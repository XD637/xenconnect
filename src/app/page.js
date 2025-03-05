"use client";

import { useState } from "react";
import WalletButton from "@/components/WalletButton";
import WalletModal from "@/components/WalletModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-white">
      <WalletButton onOpen={() => setIsModalOpen(true)} />
      <WalletModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
