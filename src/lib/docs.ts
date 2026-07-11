export type DocSection = {
  id: string;
  title: string;
  articles: DocArticle[];
};

export type DocArticle = {
  id: string;
  title: string;
  content: DocBlock[];
};

export type DocBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "code"; label?: string; code: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "callout"; variant: "info" | "warn"; text: string };

export const docSections: DocSection[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    articles: [
      {
        id: "wallet-setup",
        title: "Wallet Setup",
        content: [
          {
            type: "p",
            text: "Sherwood Fi supports any EVM-compatible browser wallet — MetaMask, Rabby, Phantom, Coinbase Wallet, and others. Connect from the header or the Portfolio page.",
          },
          {
            type: "ol",
            items: [
              "Install a browser wallet extension or use Robinhood Wallet on mobile.",
              "Click Connect Wallet in the Sherwood Fi header.",
              "Approve the connection request in your wallet.",
              "If prompted, add Robinhood Chain (see RPC configuration below).",
            ],
          },
          {
            type: "callout",
            variant: "info",
            text: "Robinhood Wallet supports Robinhood Chain natively — no manual network setup required.",
          },
        ],
      },
      {
        id: "robinhood-chain-rpc",
        title: "Robinhood Chain RPC",
        content: [
          {
            type: "p",
            text: "Sherwood Fi runs on Robinhood Chain, an EVM-compatible L2 built on the Arbitrum stack. Add the network manually if your wallet does not detect it automatically.",
          },
          {
            type: "table",
            headers: ["Property", "Mainnet", "Testnet"],
            rows: [
              ["Network name", "Robinhood Chain", "Robinhood Chain Testnet"],
              ["Chain ID", "4663", "46630"],
              ["RPC URL", "https://rpc.mainnet.chain.robinhood.com", "https://rpc.testnet.chain.robinhood.com"],
              ["Currency", "ETH", "ETH"],
              ["Explorer", "robinhoodchain.blockscout.com", "explorer.testnet.chain.robinhood.com"],
            ],
          },
          {
            type: "code",
            label: "wagmi / viem",
            code: `import { defineChain } from "viem";

export const robinhoodChain = defineChain({
  id: 4663,
  name: "Robinhood Chain",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc.mainnet.chain.robinhood.com"] },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://robinhoodchain.blockscout.com",
    },
  },
});`,
          },
          {
            type: "callout",
            variant: "warn",
            text: "Public RPC endpoints are rate-limited. Use Alchemy, Quicknode, or another provider for production integrations.",
          },
        ],
      },
      {
        id: "usdc-bridging",
        title: "USDC Bridging",
        content: [
          {
            type: "p",
            text: "All Sherwood Fi markets settle in USDC. Bridge USDC to Robinhood Chain before purchasing lien certificates.",
          },
          {
            type: "ol",
            items: [
              "Acquire USDC on Ethereum mainnet or a supported source chain.",
              "Use an approved bridge (LayerZero and native Robinhood bridges are supported).",
              "Confirm USDC arrives in your wallet on Robinhood Chain (chain ID 4663).",
              "Keep a small ETH balance for gas fees on Robinhood Chain.",
            ],
          },
          {
            type: "p",
            text: "Minimum purchase amounts vary by market during early access. Check individual market pages for current minimums.",
          },
        ],
      },
      {
        id: "eligibility-check",
        title: "Eligibility Check",
        content: [
          {
            type: "p",
            text: "Before trading, complete a one-time eligibility verification. This confirms jurisdiction compliance and early-access cohort approval.",
          },
          {
            type: "ul",
            items: [
              "Connect your wallet on Robinhood Chain.",
              "Sign a non-custodial verification message (no gas fee on testnet).",
              "Wait for cohort approval — rolled out in phases during early access.",
              "Approved wallets can browse, purchase, and list on the secondary market.",
            ],
          },
          {
            type: "callout",
            variant: "info",
            text: "Join the waitlist on the homepage to be notified when your cohort is approved.",
          },
        ],
      },
    ],
  },
  {
    id: "markets",
    title: "Markets",
    articles: [
      {
        id: "tax-liens-vs-deeds",
        title: "Tax Liens vs Deeds",
        content: [
          {
            type: "p",
            text: "Sherwood Fi tokenizes two related but distinct real estate instruments. Understanding the difference is essential before investing.",
          },
          {
            type: "table",
            headers: ["", "Tax Lien", "Tax Deed"],
            rows: [
              ["What you buy", "A lien certificate on unpaid taxes", "Ownership interest via tax deed sale"],
              ["Owner redemption", "Owner repays taxes + interest to clear lien", "Redemption window varies by state"],
              ["Your return", "Statutory interest at redemption", "Higher yield, shorter terms, different risk"],
              ["Collateral", "First-position claim on property", "Direct property interest"],
              ["Typical term", "12–36 months", "6–12 months"],
            ],
          },
          {
            type: "p",
            text: "Most Sherwood Fi markets are tax liens. Harris County, TX is an example tax deed market with a 25% statutory rate and 6-month term.",
          },
        ],
      },
      {
        id: "statutory-rates",
        title: "Statutory Rates",
        content: [
          {
            type: "p",
            text: "Interest rates are set by state and county statute — not by Sherwood Fi. Each tokenized certificate embeds the applicable rate at issuance.",
          },
          {
            type: "table",
            headers: ["Market", "Type", "Rate", "Term"],
            rows: [
              ["Maricopa County, AZ", "Tax Lien", "16.0%", "36 mo"],
              ["Miami-Dade County, FL", "Tax Lien", "12.5%", "24 mo"],
              ["Cook County, IL", "Tax Lien", "9.0%", "30 mo"],
              ["Harris County, TX", "Tax Deed", "25.0%", "6 mo"],
              ["Wayne County, MI", "Tax Lien", "18.0%", "12 mo"],
              ["Pima County, AZ", "Tax Lien", "16.0%", "36 mo"],
            ],
          },
          {
            type: "p",
            text: "Rates are paid when the property owner redeems. There is no discretionary payout — terms are enforced by smart contract.",
          },
        ],
      },
      {
        id: "redemption-windows",
        title: "Redemption Windows",
        content: [
          {
            type: "p",
            text: "Each certificate has a defined redemption window set by jurisdiction. If the property owner does not redeem within the statutory period, additional remedies may apply per state law.",
          },
          {
            type: "ul",
            items: [
              "Redemption window is encoded in the token metadata at mint.",
              "Interest accrues from the certificate purchase date.",
              "Early redemption by the property owner triggers automatic USDC payout.",
              "Post-redemption, the lien is cleared onchain and the token is burned.",
            ],
          },
          {
            type: "callout",
            variant: "warn",
            text: "Redemption timelines and foreclosure rights vary significantly by state. Review the market detail page for jurisdiction-specific terms.",
          },
        ],
      },
      {
        id: "collateral-coverage",
        title: "Collateral Coverage",
        content: [
          {
            type: "p",
            text: "Collateral coverage indicates how many times the underlying property value exceeds the lien face amount. Higher coverage provides more security if the owner defaults.",
          },
          {
            type: "table",
            headers: ["Market", "Coverage"],
            rows: [
              ["Maricopa County, AZ", "22×"],
              ["Miami-Dade County, FL", "18×"],
              ["Cook County, IL", "15×"],
              ["Harris County, TX", "4×"],
              ["Wayne County, MI", "12×"],
              ["Pima County, AZ", "20×"],
            ],
          },
          {
            type: "p",
            text: "Parcel references (APN, county assessor ID) are embedded in each token and verifiable onchain. Collateral data is sourced from county assessor records.",
          },
        ],
      },
    ],
  },
  {
    id: "protocol",
    title: "Protocol",
    articles: [
      {
        id: "smart-contracts",
        title: "Smart Contracts",
        content: [
          {
            type: "p",
            text: "Sherwood Fi protocol contracts are deployed on Robinhood Chain. All certificate issuance, interest accrual, and redemption settlement happen onchain.",
          },
          {
            type: "table",
            headers: ["Contract", "Purpose"],
            rows: [
              ["LienRegistry", "Certificate minting, metadata, and parcel linkage"],
              ["Marketplace", "Primary issuance and secondary order matching"],
              ["RedemptionEngine", "Owner redemption processing and USDC distribution"],
              ["EligibilityGate", "One-time wallet verification and cohort access"],
            ],
          },
          {
            type: "p",
            text: "Contract addresses will be published on Blockscout and in this documentation when mainnet deployment completes during early access.",
          },
        ],
      },
      {
        id: "token-standards",
        title: "Token Standards",
        content: [
          {
            type: "p",
            text: "Lien certificates are ERC-721 tokens with extended metadata. Each NFT represents a single lien position with immutable terms.",
          },
          {
            type: "code",
            label: "Certificate metadata (example)",
            code: `{
  "market": "maricopa-az",
  "type": "Tax Lien",
  "statutoryRate": "16.0%",
  "maxTerm": "36mo",
  "parcelRef": "APN-304-12-045B",
  "county": "Maricopa",
  "state": "AZ",
  "faceValue": "1250.00",
  "currency": "USDC",
  "issuedAt": "2026-03-15T00:00:00Z"
}`,
          },
          {
            type: "ul",
            items: [
              "Transferable on the secondary market.",
              "Metadata is immutable after mint.",
              "Redemption burns the token and settles USDC to the holder.",
            ],
          },
        ],
      },
      {
        id: "secondary-market",
        title: "Secondary Market",
        content: [
          {
            type: "p",
            text: "Exit before redemption by listing your certificate on the Sherwood Fi marketplace. Orders match peer-to-peer with instant USDC settlement.",
          },
          {
            type: "ol",
            items: [
              "Navigate to Portfolio and select a position.",
              "Set an ask price in USDC (or accept a market bid).",
              "On fill, USDC is transferred atomically with the NFT.",
              "No redemption required — sell anytime during the certificate term.",
            ],
          },
          {
            type: "p",
            text: "Secondary prices reflect market demand, time to redemption, and jurisdiction risk. Historical volume is available in the Protocol Growth charts on the homepage.",
          },
        ],
      },
      {
        id: "fee-schedule",
        title: "Fee Schedule",
        content: [
          {
            type: "p",
            text: "Sherwood Fi charges protocol fees on primary issuance and secondary trades. Gas fees on Robinhood Chain are paid separately in ETH.",
          },
          {
            type: "table",
            headers: ["Action", "Fee"],
            rows: [
              ["Primary purchase", "0.5% of face value"],
              ["Secondary sale", "0.25% per side"],
              ["Redemption settlement", "No protocol fee"],
              ["Wallet verification", "Free"],
            ],
          },
          {
            type: "callout",
            variant: "info",
            text: "Early access cohorts may receive reduced fees. Final fee schedule subject to governance.",
          },
        ],
      },
    ],
  },
];

export const docNav = docSections.flatMap((section) =>
  section.articles.map((article) => ({
    sectionId: section.id,
    sectionTitle: section.title,
    articleId: article.id,
    articleTitle: article.title,
  }))
);
