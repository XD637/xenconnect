"use client";

import WalletButton from "@/components/WalletButton";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-gray-100 to-gray-300 text-black">
      <WalletButton label="Sign In" />
    </div>
  );
}
