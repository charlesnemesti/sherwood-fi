"use client";

import { useEffect, useRef, useState } from "react";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useSwitchChain,
} from "wagmi";
import { robinhoodChain, robinhoodTestnet, truncateAddress, isSupportedChain } from "@/lib/chains";

const wallets = [
  {
    id: "injected",
    name: "Browser Wallet",
    description: "MetaMask, Rabby, Phantom & more",
    icon: (
      <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none">
        <rect width="32" height="32" rx="8" fill="#1a1d18" />
        <path
          d="M8 12h16v2H8zm0 4h12v2H8zm0 4h8v2H8z"
          fill="#c4956a"
          opacity="0.8"
        />
      </svg>
    ),
  },
];

type ConnectWalletProps = {
  variant?: "header" | "hero" | "portfolio";
};

export function ConnectWallet({ variant = "header" }: ConnectWalletProps) {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const { address, isConnected, chain } = useAccount();
  const { connect, connectors, isPending, error } = useConnect();
  const { disconnect } = useDisconnect();
  const { switchChain, isPending: isSwitching } = useSwitchChain();

  const wrongNetwork = isConnected && chain && !isSupportedChain(chain.id);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [open]);

  function handleConnect() {
    const connector = connectors[0];
    if (connector) connect({ connector });
    setOpen(false);
  }

  const buttonClass =
    variant === "hero"
      ? "btn-secondary"
      : variant === "portfolio"
        ? "btn-primary"
        : "btn-wallet";

  if (isConnected && address) {
    return (
      <div className="relative" ref={menuRef}>
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className={`${buttonClass} ${wrongNetwork ? "btn-wallet--warn" : ""}`}
        >
          {wrongNetwork ? (
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              Wrong network
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" />
              <span className="font-mono text-[13px]">{truncateAddress(address)}</span>
            </span>
          )}
        </button>

        {menuOpen && (
          <div className="wallet-dropdown">
            {wrongNetwork && (
              <>
                <p className="px-3 py-2 text-[11px] leading-relaxed text-muted">
                  Switch to Robinhood Chain to use Sherwood Fi.
                </p>
                <button
                  type="button"
                  className="wallet-dropdown__item wallet-dropdown__item--accent"
                  disabled={isSwitching}
                  onClick={() => {
                    switchChain({ chainId: robinhoodChain.id });
                    setMenuOpen(false);
                  }}
                >
                  Switch to Mainnet
                </button>
                <button
                  type="button"
                  className="wallet-dropdown__item"
                  disabled={isSwitching}
                  onClick={() => {
                    switchChain({ chainId: robinhoodTestnet.id });
                    setMenuOpen(false);
                  }}
                >
                  Switch to Testnet
                </button>
                <div className="wallet-dropdown__divider" />
              </>
            )}

            {chain && (
              <div className="wallet-dropdown__meta">
                <span className="text-muted">Network</span>
                <span>{chain.name}</span>
              </div>
            )}

            <button
              type="button"
              className="wallet-dropdown__item"
              onClick={() => {
                navigator.clipboard.writeText(address);
                setMenuOpen(false);
              }}
            >
              Copy address
            </button>

            <a
              href={`https://robinhoodchain.blockscout.com/address/${address}`}
              target="_blank"
              rel="noopener noreferrer"
              className="wallet-dropdown__item"
              onClick={() => setMenuOpen(false)}
            >
              View on explorer ↗
            </a>

            <div className="wallet-dropdown__divider" />

            <button
              type="button"
              className="wallet-dropdown__item wallet-dropdown__item--danger"
              onClick={() => {
                disconnect();
                setMenuOpen(false);
              }}
            >
              Disconnect
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <button
        type="button"
        className={buttonClass}
        onClick={() => setOpen(true)}
        disabled={isPending}
      >
        {isPending ? "Connecting…" : "Connect Wallet"}
      </button>

      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div
            className="modal-panel"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-labelledby="wallet-modal-title"
          >
            <div className="modal-panel__header">
              <div>
                <p className="section-label">Wallet</p>
                <h2 id="wallet-modal-title" className="font-display text-xl">
                  Connect to Sherwood
                </h2>
              </div>
              <button
                type="button"
                className="modal-close"
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
            </div>

            <p className="modal-panel__desc">
              Connect an EVM wallet on Robinhood Chain to browse markets and manage
              your lien portfolio.
            </p>

            <div className="space-y-2">
              {wallets.map((wallet) => (
                <button
                  key={wallet.id}
                  type="button"
                  className="wallet-option"
                  onClick={handleConnect}
                  disabled={isPending}
                >
                  {wallet.icon}
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground">{wallet.name}</p>
                    <p className="text-xs text-muted">{wallet.description}</p>
                  </div>
                  <svg
                    className="ml-auto h-4 w-4 text-muted"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>

            {error && (
              <p className="mt-4 rounded-lg border border-amber/20 bg-amber/5 px-3 py-2 text-xs text-amber">
                {error.message.includes("rejected")
                  ? "Connection cancelled."
                  : error.message}
              </p>
            )}

            <p className="mt-6 text-center text-[11px] text-muted/60">
              By connecting you agree to our terms. Not investment advice.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
