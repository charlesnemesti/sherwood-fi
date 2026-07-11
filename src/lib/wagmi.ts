import { createConfig, http } from "wagmi";
import { injected } from "wagmi/connectors";
import { robinhoodChain, robinhoodTestnet } from "./chains";

export const wagmiConfig = createConfig({
  chains: [robinhoodChain, robinhoodTestnet],
  connectors: [injected()],
  transports: {
    [robinhoodChain.id]: http(),
    [robinhoodTestnet.id]: http(),
  },
  ssr: true,
});
