"use client";

import { useAccount } from "wagmi";

const WalletButton = ({ onOpen }) => {
  const { address, isConnected } = useAccount();

  return (
    <button
      onClick={onOpen}
      className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
    >
      {isConnected ? `Connected (${address.slice(0, 6)}...${address.slice(-4)})` : "Connect Wallet"}
    </button>
  );
};

export default WalletButton;
