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
    id: "overview",
    title: "Overview",
    articles: [
      {
        id: "what-is-sherwood-fi",
        title: "What is Sherwood Fi",
        content: [
          {
            type: "p",
            text: "Sherwood Fi is the first platform to tokenize U.S. county tax lien and tax deed markets — bringing institutional-grade, real-estate-backed yield (8–16% target net) to retail investors with 24/7 secondary liquidity and USDC settlement on Robinhood Chain.",
          },
          {
            type: "callout",
            variant: "info",
            text: "Senior claims on real property, tokenized. Statutory yield. Onchain settlement. No intermediaries. No discretion. Only code and collateral.",
          },
          {
            type: "p",
            text: "Tax liens and tax deeds are among the oldest defensive yield assets in the United States. Historically reserved for large institutions at in-person county auctions, Sherwood Fi tokenizes them so any wallet holder can access them onchain.",
          },
          {
            type: "ul",
            items: [
              "Fixed statutory interest rate embedded in each token",
              "Defined redemption window enforced by smart contract",
              "Underlying parcel reference (APN / assessor ID)",
              "Senior first-position claim on real property",
              "24/7 secondary market with instant USDC settlement",
            ],
          },
        ],
      },
      {
        id: "problem-solution",
        title: "Problem & Solution",
        content: [
          {
            type: "table",
            headers: ["Problem", "Sherwood Fi Solution"],
            rows: [
              ["Restricted access — institutional county auctions only", "Democratized access via tokenization and wallet connection"],
              ["No secondary liquidity", "24/7 onchain marketplace with instant USDC settlement"],
              ["Manual, opaque processes", "Smart contracts enforce terms automatically — no human discretion"],
              ["High barriers to entry", "Filter by state, yield, term, and collateral coverage from a single interface"],
            ],
          },
          {
            type: "p",
            text: "Core value proposition: bring a traditional high-yield, real-estate-backed asset class to blockchain with real liquidity and retail accessibility — enforced entirely by code.",
          },
        ],
      },
      {
        id: "platform-status",
        title: "Platform Status",
        content: [
          {
            type: "table",
            headers: ["Property", "Value"],
            rows: [
              ["Website", "sherwoodfi.site"],
              ["Chain", "Robinhood Chain (EVM L2, Arbitrum stack)"],
              ["Settlement", "USDC"],
              ["Network status", "Testnet live — mainnet rolling out in phases"],
              ["Access", "Early access via waitlist cohorts"],
              ["Target net yield", "8–16%"],
              ["Terms", "6–36 months"],
            ],
          },
          {
            type: "p",
            text: "Testnet metrics (illustrative): TVL ~$18.4M, secondary volume ~$6.2M, 4,218+ active certificates. Figures update in real time during early access.",
          },
        ],
      },
    ],
  },
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
            text: "Sherwood Fi requires an EVM-compatible wallet on Robinhood Chain. Supported wallets include MetaMask, Rabby, Phantom, Coinbase Wallet, and Robinhood Wallet.",
          },
          {
            type: "ol",
            items: [
              "Install a browser wallet or Robinhood Wallet (iOS/Android — native Robinhood Chain support).",
              "Navigate to sherwoodfi.site and click Connect Wallet.",
              "Approve the connection request.",
              "If on an unsupported network, switch to Robinhood Chain (see RPC configuration).",
            ],
          },
          {
            type: "p",
            text: "Frontend stack: Wagmi + Viem for wallet connection, transaction signing, and chain switching.",
          },
        ],
      },
      {
        id: "robinhood-chain-rpc",
        title: "Robinhood Chain RPC",
        content: [
          {
            type: "p",
            text: "Robinhood Chain is an EVM-compatible Layer 2 built on the Arbitrum stack, optimized for tokenized real-world assets with low fees and fast settlement.",
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
            label: "wagmi / viem chain definition",
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
            text: "Public RPC endpoints are rate-limited. Use Alchemy, Quicknode, Blockdaemon, or dRPC for production.",
          },
        ],
      },
      {
        id: "usdc-bridging",
        title: "USDC Bridging",
        content: [
          {
            type: "p",
            text: "All Sherwood Fi markets settle in USDC. Bridge USDC to Robinhood Chain before purchasing tokenized certificates.",
          },
          {
            type: "ol",
            items: [
              "Acquire USDC on Ethereum mainnet or a supported source chain.",
              "Bridge via LayerZero or the native Robinhood Chain bridge.",
              "Confirm USDC balance on Robinhood Chain (chain ID 4663).",
              "Retain a small ETH balance for gas fees.",
              "Approve USDC spend when purchasing certificates (standard ERC-20 approval flow).",
            ],
          },
        ],
      },
      {
        id: "eligibility-check",
        title: "Eligibility Check",
        content: [
          {
            type: "p",
            text: "A one-time eligibility verification is required before trading. This can be executed onchain via the EligibilityGate contract or through a lightweight offchain KYC flow, depending on jurisdiction.",
          },
          {
            type: "ol",
            items: [
              "Connect wallet on Robinhood Chain.",
              "Complete one-time KYC / eligibility check.",
              "Wait for early-access cohort approval (phased rollout).",
              "Approved wallets unlock primary issuance and secondary market access.",
            ],
          },
          {
            type: "callout",
            variant: "info",
            text: "Join the waitlist at sherwoodfi.site to be notified when your cohort is approved.",
          },
        ],
      },
      {
        id: "user-flow",
        title: "User Flow",
        content: [
          {
            type: "ol",
            items: [
              "Connect wallet on Robinhood Chain + complete one-time eligibility check.",
              "Browse markets — filter by state, yield, term, and collateral coverage.",
              "Approve USDC and purchase a tokenized certificate. Position appears in portfolio instantly.",
              "Hold for statutory yield at redemption, or list on the secondary market at any time.",
            ],
          },
          {
            type: "p",
            text: "Portfolio data, accrued interest, and market positions update in real time via onchain events and indexer queries.",
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
            text: "Sherwood Fi tokenizes two distinct instruments. Each is represented as an ERC-721 certificate with immutable statutory terms.",
          },
          {
            type: "table",
            headers: ["", "Tax Lien", "Tax Deed"],
            rows: [
              ["Instrument", "Lien certificate on unpaid property taxes", "Ownership interest via tax deed sale"],
              ["Collateral", "Senior first-position claim — senior to mortgages in most U.S. jurisdictions", "Direct property interest"],
              ["Return mechanism", "Statutory interest when owner redeems", "Higher yield, shorter terms, distinct risk profile"],
              ["Typical term", "12–36 months", "6–12 months"],
            ],
          },
        ],
      },
      {
        id: "live-markets",
        title: "Live Markets",
        content: [
          {
            type: "p",
            text: "Current testnet / early-access markets. Statutory rates are set by jurisdiction — not by Sherwood Fi.",
          },
          {
            type: "table",
            headers: ["Market", "Type", "Rate", "Term", "Collateral"],
            rows: [
              ["Maricopa County, AZ", "Tax Lien", "16.0%", "36 mo", "22×"],
              ["Miami-Dade County, FL", "Tax Lien", "12.5%", "24 mo", "18×"],
              ["Cook County, IL", "Tax Lien", "9.0%", "30 mo", "15×"],
              ["Harris County, TX", "Tax Deed", "25.0%", "6 mo", "4×"],
              ["Wayne County, MI", "Tax Lien", "18.0%", "12 mo", "12×"],
              ["Pima County, AZ", "Tax Lien", "16.0%", "36 mo", "20×"],
            ],
          },
          {
            type: "p",
            text: "Target net yield across markets: 8–16%. Settlement currency: USDC. Marketplace uptime: 24/7.",
          },
        ],
      },
      {
        id: "redemption-windows",
        title: "Redemption & Yield",
        content: [
          {
            type: "p",
            text: "Yield is generated through statutory interest paid when the property owner redeems the lien. Terms are fixed at mint and enforced by the RedemptionHandler contract — no discretionary payouts.",
          },
          {
            type: "ul",
            items: [
              "Redemption window encoded in token metadata at issuance.",
              "Interest accrues from certificate purchase date.",
              "Owner redemption triggers automatic USDC distribution to the holder.",
              "Token is burned on settlement. Lien cleared onchain.",
              "Alternative exit: sell on secondary market before redemption at any time.",
            ],
          },
          {
            type: "callout",
            variant: "warn",
            text: "Redemption timelines and foreclosure remedies vary by state. Review jurisdiction-specific terms on each market page.",
          },
        ],
      },
      {
        id: "collateral-coverage",
        title: "Collateral Coverage",
        content: [
          {
            type: "p",
            text: "Collateral coverage measures how many times the underlying property value exceeds the lien face amount. Parcel references are embedded in each token and verifiable onchain.",
          },
          {
            type: "p",
            text: "Property status and valuation data may be verified via the CollateralVerifier contract and external oracles (Chainlink or Robinhood-native feeds) where jurisdiction requires it.",
          },
        ],
      },
    ],
  },
  {
    id: "architecture",
    title: "Architecture",
    articles: [
      {
        id: "system-overview",
        title: "System Overview",
        content: [
          {
            type: "p",
            text: "Sherwood Fi is a full-stack onchain RWA protocol. Certificates are minted on Robinhood Chain, traded on an onchain marketplace, and settled in USDC.",
          },
          {
            type: "table",
            headers: ["Layer", "Component"],
            rows: [
              ["Blockchain", "Robinhood Chain — EVM L2 on Arbitrum stack"],
              ["Assets", "ERC-721 certificates (ERC-1155 for batch instruments)"],
              ["Settlement", "USDC (native or bridged)"],
              ["Secondary market", "Hybrid orderbook / AMM onchain"],
              ["Frontend", "Next.js + Wagmi + Viem"],
              ["Indexing", "The Graph subgraph or custom indexer"],
              ["Oracles", "Chainlink / Robinhood-native feeds for property data"],
            ],
          },
          {
            type: "code",
            label: "High-level flow",
            code: `User → Wallet (Wagmi/Viem)
     → EligibilityGate (one-time)
     → Marketplace (USDC → CertificateFactory mint)
     → ERC-721 Lien Certificate (portfolio)
     → RedemptionHandler (yield) OR Marketplace (secondary exit)`,
          },
        ],
      },
      {
        id: "smart-contracts",
        title: "Smart Contracts",
        content: [
          {
            type: "p",
            text: "Core protocol contracts. All deployments require dual audit from recognized firms before mainnet launch. Emergency pause functionality included.",
          },
          {
            type: "table",
            headers: ["Contract", "Responsibility"],
            rows: [
              ["CertificateFactory", "Creates and mints lien/deed tokens with immutable metadata"],
              ["Marketplace", "Primary issuance and secondary orderbook — listing, matching, settlement"],
              ["RedemptionHandler", "Processes owner redemptions — principal + statutory interest in USDC"],
              ["CollateralVerifier", "Onchain / oracle verification of property status and parcel data"],
              ["EligibilityGate", "One-time wallet verification and cohort access control"],
              ["GovernanceStaking", "$SHER staking — fee discounts, priority allocation, governance votes"],
            ],
          },
          {
            type: "callout",
            variant: "warn",
            text: "Contracts are pausable in emergency scenarios. Contract addresses published on Blockscout at mainnet launch.",
          },
        ],
      },
      {
        id: "token-standards",
        title: "Certificate Standard",
        content: [
          {
            type: "p",
            text: "Each lien certificate is an ERC-721 token. Metadata is immutable after mint. The token is the legal-economic claim representation onchain.",
          },
          {
            type: "code",
            label: "Onchain metadata schema",
            code: `{
  "market": "maricopa-az",
  "type": "Tax Lien",
  "statutoryRate": "16.0%",
  "maxTerm": "36mo",
  "parcelRef": "APN-304-12-045B",
  "county": "Maricopa",
  "state": "AZ",
  "faceValue": "1250.00",
  "collateralCoverage": "22x",
  "seniorClaim": true,
  "currency": "USDC",
  "issuedAt": "2026-03-15T00:00:00Z"
}`,
          },
          {
            type: "ul",
            items: [
              "Transferable on secondary market.",
              "Burned on redemption settlement.",
              "All payments and ownership changes verifiable onchain.",
            ],
          },
        ],
      },
      {
        id: "integrations",
        title: "Integrations",
        content: [
          {
            type: "table",
            headers: ["Integration", "Purpose"],
            rows: [
              ["Wagmi + Viem", "Wallet connection, chain switching, transaction signing"],
              ["The Graph", "Subgraph for portfolio queries, market data, and event indexing"],
              ["Chainlink", "External property data, payment status, valuation feeds"],
              ["LayerZero", "Cross-chain USDC bridging"],
              ["Virtuals Protocol", "AI yield optimizer agents operating on lien positions (roadmap)"],
            ],
          },
          {
            type: "p",
            text: "Indexer events drive real-time portfolio updates in the frontend. No offchain database required for position state — the chain is the source of truth.",
          },
        ],
      },
      {
        id: "secondary-market",
        title: "Secondary Market",
        content: [
          {
            type: "p",
            text: "The Marketplace contract supports a hybrid orderbook / AMM model for 24/7 certificate trading with atomic USDC + NFT settlement.",
          },
          {
            type: "ol",
            items: [
              "List certificate at ask price in USDC from Portfolio.",
              "Buyer submits bid or accepts ask — matched onchain.",
              "Atomic swap: USDC to seller, NFT to buyer in a single transaction.",
              "No redemption required. Exit anytime during certificate term.",
            ],
          },
        ],
      },
      {
        id: "fee-schedule",
        title: "Fee Schedule",
        content: [
          {
            type: "table",
            headers: ["Action", "Protocol Fee"],
            rows: [
              ["Primary issuance (origination)", "0.5% of face value"],
              ["Secondary trade", "0.25% per side"],
              ["Redemption settlement", "No protocol fee"],
              ["Eligibility verification", "Free"],
            ],
          },
          {
            type: "p",
            text: "Revenue model: origination fees + secondary trading fees. $SHER stakers receive revenue share and fee discounts (see Tokenomics). Gas paid separately in ETH.",
          },
        ],
      },
    ],
  },
  {
    id: "tokenomics",
    title: "Tokenomics",
    articles: [
      {
        id: "sher-token",
        title: "$SHER Token",
        content: [
          {
            type: "p",
            text: "$SHER is the utility and governance token of Sherwood Fi. It aligns long-term participants with protocol growth and fee revenue.",
          },
          {
            type: "ul",
            items: [
              "Priority early-access allocation for new county markets",
              "Governance votes on new market listings and protocol parameters",
              "Staking for fee discounts on primary and secondary trades",
              "Revenue share from marketplace origination and trading fees",
              "Increased position limits for staked holders",
            ],
          },
          {
            type: "callout",
            variant: "info",
            text: "Full supply, distribution, and vesting schedule to be published in the Tokenomics litepaper. Contract address announced at TGE.",
          },
        ],
      },
      {
        id: "revenue-model",
        title: "Revenue Model",
        content: [
          {
            type: "p",
            text: "Protocol revenue is generated from marketplace activity, not from investor yield. Statutory interest flows entirely to certificate holders.",
          },
          {
            type: "ul",
            items: [
              "Origination fees on primary certificate purchases.",
              "Trading fees on secondary market transactions.",
              "Portion of fees distributed to $SHER stakers via GovernanceStaking contract.",
              "Remaining fees fund protocol development and audit reserves.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "security",
    title: "Security",
    articles: [
      {
        id: "audits-compliance",
        title: "Audits & Compliance",
        content: [
          {
            type: "p",
            text: "Security is non-negotiable for an RWA protocol handling real-property claims. Sherwood Fi follows a defense-in-depth approach.",
          },
          {
            type: "ul",
            items: [
              "Minimum two independent audits from recognized firms before mainnet.",
              "Pausable contracts with multisig-controlled emergency stop.",
              "Onchain transparency as the primary trust mechanism — all certificates, payments, and redemptions verifiable.",
              "SPV / wrapped offchain structures under evaluation for legal enforceability of underlying liens.",
              "Jurisdiction-aware eligibility gating for regulatory compliance.",
            ],
          },
          {
            type: "callout",
            variant: "warn",
            text: "Sherwood Fi is not investment advice. Digital assets and tokenized real-world instruments involve risk. Review jurisdiction-specific terms before investing.",
          },
        ],
      },
    ],
  },
  {
    id: "roadmap",
    title: "Roadmap",
    articles: [
      {
        id: "technical-roadmap",
        title: "Technical Roadmap",
        content: [
          {
            type: "table",
            headers: ["Phase", "Milestone", "Timeline"],
            rows: [
              ["I", "Testnet live — 6 county markets, faucet, waitlist", "2026 Q1 ✓"],
              ["II", "Mainnet deployment + full secondary orderbook", "2026 Q2"],
              ["III", "$SHER staking + governance launch", "2026 Q3"],
              ["IV", "AI yield agents via Virtuals integration", "2026 Q4"],
              ["V", "County expansion + additional RWA verticals", "2027"],
            ],
          },
          {
            type: "p",
            text: "Documentation deliverables planned: Litepaper, full Tokenomics paper, audited contract reference, and pitch deck. This docs portal is the living technical reference.",
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
