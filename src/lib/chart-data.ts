export type ChartPoint = {
  label: string;
  value: number;
};

const MONTHS = [
  "Aug", "Sep", "Oct", "Nov", "Dec", "Jan",
  "Feb", "Mar", "Apr", "May", "Jun", "Jul",
];

function logCurve(min: number, max: number, base = Math.E): ChartPoint[] {
  const n = MONTHS.length;
  const logMax = Math.log(n) / Math.log(base);
  return MONTHS.map((label, i) => {
    const t = i + 1;
    const ratio = Math.log(t) / Math.log(base) / logMax;
    const value = min + (max - min) * ratio;
    return { label, value: Math.round(value * 100) / 100 };
  });
}

function logCurveYield(min: number, max: number): ChartPoint[] {
  const n = MONTHS.length;
  return MONTHS.map((label, i) => {
    const t = (i + 1) / n;
    const ratio = Math.log(1 + t * 9) / Math.log(10);
    const value = min + (max - min) * ratio;
    return { label, value: Math.round(value * 10) / 10 };
  });
}

export const tvlGrowth = logCurve(0.8, 18.4);

export const volumeGrowth = logCurve(0.2, 6.2);

export const certificatesGrowth = logCurve(420, 4218).map((d) => ({
  ...d,
  value: Math.round(d.value),
}));

export const yieldTrend = logCurveYield(11.2, 13.4);

export const growthSummary = [
  { label: "Total value locked", value: "$18.4M", change: "+2,200%" },
  { label: "Secondary volume", value: "$6.2M", change: "+3,000%" },
  { label: "Active certificates", value: "4,218", change: "+904%" },
  { label: "Avg. net yield", value: "13.4%", change: "+2.2pp" },
];
