export type Market = {
  slug: string;
  name: string;
  state: string;
  type: "Tax Lien" | "Tax Deed";
  rate: number;
  termMonths: number;
  collateral: number;
};

export const markets: Market[] = [
  {
    slug: "maricopa-az",
    name: "Maricopa County",
    state: "AZ",
    type: "Tax Lien",
    rate: 16.0,
    termMonths: 36,
    collateral: 22,
  },
  {
    slug: "miami-dade-fl",
    name: "Miami-Dade County",
    state: "FL",
    type: "Tax Lien",
    rate: 12.5,
    termMonths: 24,
    collateral: 18,
  },
  {
    slug: "cook-il",
    name: "Cook County",
    state: "IL",
    type: "Tax Lien",
    rate: 9.0,
    termMonths: 30,
    collateral: 15,
  },
  {
    slug: "harris-tx",
    name: "Harris County",
    state: "TX",
    type: "Tax Deed",
    rate: 25.0,
    termMonths: 6,
    collateral: 4,
  },
  {
    slug: "wayne-mi",
    name: "Wayne County",
    state: "MI",
    type: "Tax Lien",
    rate: 18.0,
    termMonths: 12,
    collateral: 12,
  },
  {
    slug: "pima-az",
    name: "Pima County",
    state: "AZ",
    type: "Tax Lien",
    rate: 16.0,
    termMonths: 36,
    collateral: 20,
  },
];

export const features = [
  {
    title: "Tokenized Tax Liens",
    description:
      "Each lien certificate is issued onchain with statutory interest, redemption terms, and the underlying parcel reference embedded in its token.",
    icon: "leaf",
  },
  {
    title: "Real Estate–Linked Collateral",
    description:
      "Liens are secured by a first-position claim on real property, senior to mortgages in most U.S. jurisdictions.",
    icon: "home",
  },
  {
    title: "Defined Terms, Onchain",
    description:
      "Fixed statutory rates and redemption windows are enforced by smart contracts — no discretionary payouts.",
    icon: "contract",
  },
  {
    title: "24/7 Secondary Market",
    description:
      "Exit before redemption by listing your position on the Sherwood Fi marketplace. Instant USDC settlement on Robinhood Chain.",
    icon: "market",
  },
  {
    title: "Built on Robinhood Chain",
    description:
      "Low-fee, EVM-compatible L2 purpose-built for tokenized real-world assets, secured by the Arbitrum stack.",
    icon: "chain",
  },
  {
    title: "Transparent by Default",
    description:
      "Every certificate, payment, and redemption is verifiable onchain. Portfolio data updates in real time.",
    icon: "eye",
  },
];

export const steps = [
  {
    number: "01",
    title: "Connect & verify",
    description:
      "Connect your wallet on Robinhood Chain and complete a one-time eligibility check.",
  },
  {
    number: "02",
    title: "Browse lien markets",
    description:
      "Filter by state, yield, term, and collateral coverage across live tax lien and deed offerings.",
  },
  {
    number: "03",
    title: "Invest in USDC",
    description:
      "Purchase tokenized certificates with USDC. Positions appear in your portfolio instantly.",
  },
  {
    number: "04",
    title: "Earn or trade",
    description:
      "Collect statutory interest at redemption, or sell your position anytime on the secondary market.",
  },
];

export const faqs = [
  {
    question: "What is a tax lien?",
    answer:
      "When a property owner falls behind on property taxes, the county sells a lien certificate to investors. The owner must repay the taxes plus statutory interest to clear the lien — and if they don't, the certificate holder can foreclose on the property.",
  },
  {
    question: "What is Robinhood Chain?",
    answer:
      "Robinhood Chain is an EVM-compatible layer-2 network built on the Arbitrum stack, purpose-built for tokenized real-world assets with low fees and fast settlement.",
  },
  {
    question: "How do I earn yield?",
    answer:
      "You earn the statutory interest rate defined by the lien's jurisdiction when the property owner redeems, or you can sell your position on the secondary market at any time.",
  },
  {
    question: "When does early access open?",
    answer:
      "Access rolls out in phases. Join the waitlist and we'll notify you by email when your cohort is approved.",
  },
];
