"use client";

import "./globals.css"; // ✅ Import Tailwind styles
import { WagmiProvider, createConfig } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { mainnet } from "wagmi/chains";
import { injected } from "wagmi/connectors";
import { http } from "viem";

// ✅ Create Query Client
const queryClient = new QueryClient();

// ✅ Correct Wagmi v2 Config
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [injected()],
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <QueryClientProvider client={queryClient}>
          <WagmiProvider config={wagmiConfig}>{children}</WagmiProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
