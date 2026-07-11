"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { ChartPoint } from "@/lib/chart-data";
import {
  certificatesGrowth,
  growthSummary,
  tvlGrowth,
  volumeGrowth,
  yieldTrend,
} from "@/lib/chart-data";

type AreaChartProps = {
  data: ChartPoint[];
  color: "sage" | "copper" | "amber";
  height?: number;
  formatValue?: (v: number) => string;
  featured?: boolean;
};

const strokeColors = {
  sage: "#7fa882",
  copper: "#c4956a",
  amber: "#d4a24a",
};

function buildPath(
  data: ChartPoint[],
  width: number,
  height: number,
  padding: { top: number; right: number; bottom: number; left: number }
) {
  const innerW = width - padding.left - padding.right;
  const innerH = height - padding.top - padding.bottom;
  const max = Math.max(...data.map((d) => d.value));
  const min = Math.min(...data.map((d) => d.value));
  const range = max - min || 1;

  const points = data.map((d, i) => ({
    x: padding.left + (i / (data.length - 1)) * innerW,
    y: padding.top + innerH - ((d.value - min) / range) * innerH,
  }));

  let path = `M${points[0].x},${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p1 = points[i];
    const p2 = points[i + 1];
    const cp1x = p1.x + (p2.x - p1.x) / 3;
    const cp2x = p2.x - (p2.x - p1.x) / 3;
    path += ` C${cp1x},${p1.y} ${cp2x},${p2.y} ${p2.x},${p2.y}`;
  }
  return { path, points, min, max, innerW, innerH };
}

function AreaChart({
  data,
  color,
  height = 200,
  formatValue = (v) => v.toString(),
  featured = false,
}: AreaChartProps) {
  const id = useId();
  const width = 600;
  const padding = { top: 20, right: 16, bottom: 32, left: 16 };
  const [hovered, setHovered] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = ref.current?.closest(".chart-card");
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const { path, points, min, max, innerW, innerH } = buildPath(
    data, width, height, padding
  );
  const areaPath = `${path} L${width - padding.right},${height - padding.bottom} L${padding.left},${height - padding.bottom} Z`;

  const yTicks = [0, 0.33, 0.66, 1].map((pct) => {
    const val = min + (max - min) * pct;
    return {
      y: padding.top + innerH - pct * innerH,
      label: formatValue(val),
    };
  });

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${width} ${height}`}
      className="chart-svg w-full"
      preserveAspectRatio="xMidYMid meet"
      onMouseLeave={() => setHovered(null)}
    >
      <defs>
        <linearGradient id={`grad-${color}-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={strokeColors[color]} stopOpacity="0.28" />
          <stop offset="100%" stopColor={strokeColors[color]} stopOpacity="0" />
        </linearGradient>
        <filter id={`glow-${color}-${id}`} x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {yTicks.map((tick, i) => (
        <g key={i}>
          <line
            x1={padding.left}
            y1={tick.y}
            x2={width - padding.right}
            y2={tick.y}
            className="chart-grid-line"
          />
          <text
            x={padding.left + 4}
            y={tick.y - 4}
            className="chart-y-label"
          >
            {tick.label}
          </text>
        </g>
      ))}

      <path
        d={areaPath}
        fill={`url(#grad-${color}-${id})`}
        className={`chart-area ${visible ? "chart-area--visible" : ""}`}
      />

      <path
        d={path}
        fill="none"
        stroke={strokeColors[color]}
        strokeWidth={featured ? 2.5 : 2}
        strokeLinecap="round"
        filter={`url(#glow-${color}-${id})`}
        className={`chart-line ${visible ? "chart-line--visible" : ""}`}
      />

      {data.map((d, i) => {
        const x = padding.left + (i / (data.length - 1)) * innerW;
        const y = points[i].y;
        return (
          <g key={d.label}>
            <rect
              x={x - innerW / data.length / 2}
              y={padding.top}
              width={innerW / data.length}
              height={innerH}
              fill="transparent"
              onMouseEnter={() => setHovered(i)}
            />
            {hovered === i && (
              <>
                <line
                  x1={x}
                  y1={padding.top}
                  x2={x}
                  y2={height - padding.bottom}
                  className="chart-crosshair"
                />
                <circle cx={x} cy={y} r="4" fill={strokeColors[color]} className="chart-dot" />
              </>
            )}
          </g>
        );
      })}

      {hovered !== null && (
        <g>
          <rect
            x={Math.min(
              padding.left + (hovered / (data.length - 1)) * innerW + 8,
              width - 96
            )}
            y={padding.top + 4}
            width="84"
            height="34"
            className="chart-tooltip__bg"
            rx="2"
          />
          <text
            x={Math.min(
              padding.left + (hovered / (data.length - 1)) * innerW + 14,
              width - 90
            )}
            y={padding.top + 17}
            className="chart-tooltip__label"
          >
            {data[hovered].label}
          </text>
          <text
            x={Math.min(
              padding.left + (hovered / (data.length - 1)) * innerW + 14,
              width - 90
            )}
            y={padding.top + 31}
            className="chart-tooltip__value"
          >
            {formatValue(data[hovered].value)}
          </text>
        </g>
      )}

      {data.map((d, i) => {
        if (i % 3 !== 0 && i !== data.length - 1) return null;
        const x = padding.left + (i / (data.length - 1)) * innerW;
        return (
          <text
            key={`x-${d.label}`}
            x={x}
            y={height - 10}
            textAnchor="middle"
            className="chart-x-label"
          >
            {d.label}
          </text>
        );
      })}
    </svg>
  );
}

export function GrowthCharts() {
  return (
    <section className="border-y border-border py-24 sm:py-32">
      <div className="site-container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-label">Performance</p>
            <h2 className="font-display mt-3 text-[clamp(1.75rem,4vw,2.5rem)] font-light text-foreground">
              Protocol <em className="text-sage">growth</em>
            </h2>
            <p className="mt-3 max-w-md text-sm text-muted">
              Cumulative metrics across Sherwood Fi markets on Robinhood Chain.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            {growthSummary.map((item) => (
              <div key={item.label} className="chart-kpi">
                <p className="chart-kpi__label">{item.label}</p>
                <p className="chart-kpi__value">{item.value}</p>
                <p className="chart-kpi__change">{item.change}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-px bg-border lg:grid-cols-3">
          <div className="chart-card chart-card--featured lg:col-span-2">
            <div className="chart-card__header">
              <div>
                <p className="chart-card__title">Total Value Locked</p>
                <p className="chart-card__subtitle">USDC · 12 month trend</p>
              </div>
              <p className="chart-card__badge chart-card__badge--sage">+2,200%</p>
            </div>
            <AreaChart
              data={tvlGrowth}
              color="sage"
              height={240}
              formatValue={(v) => `$${v.toFixed(1)}M`}
              featured
            />
          </div>

          <div className="chart-card">
            <div className="chart-card__header">
              <div>
                <p className="chart-card__title">Avg. Net Yield</p>
                <p className="chart-card__subtitle">Weighted across markets</p>
              </div>
              <p className="chart-card__badge chart-card__badge--amber">+2.2pp</p>
            </div>
            <AreaChart
              data={yieldTrend}
              color="amber"
              height={240}
              formatValue={(v) => `${v.toFixed(1)}%`}
            />
          </div>

          <div className="chart-card">
            <div className="chart-card__header">
              <div>
                <p className="chart-card__title">Secondary Volume</p>
                <p className="chart-card__subtitle">Monthly USDC</p>
              </div>
              <p className="chart-card__badge chart-card__badge--copper">+3,000%</p>
            </div>
            <AreaChart
              data={volumeGrowth}
              color="copper"
              height={190}
              formatValue={(v) => `$${v.toFixed(1)}M`}
            />
          </div>

          <div className="chart-card lg:col-span-2">
            <div className="chart-card__header">
              <div>
                <p className="chart-card__title">Active Certificates</p>
                <p className="chart-card__subtitle">Tokenized liens onchain</p>
              </div>
              <p className="chart-card__badge chart-card__badge--sage">+904%</p>
            </div>
            <AreaChart
              data={certificatesGrowth}
              color="sage"
              height={190}
              formatValue={(v) => v.toLocaleString()}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
