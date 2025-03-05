"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { injected, walletConnect, coinbaseWallet } from "wagmi/connectors";

const WalletModal = ({ isOpen, onClose }) => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();

  const wallets = [
    { name: "MetaMask", connector: injected() },
    { name: "WalletConnect", connector: walletConnect({ projectId: "6d265c3d6947690ba8372a55d61a8005" }) },
    { name: "Coinbase Wallet", connector: coinbaseWallet({ appName: "XenConnect" }) },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Select Wallet</h2>

        {isConnected ? (
          <button
            onClick={disconnect}
            className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Disconnect
          </button>
        ) : (
          wallets.map(({ name, connector }) => (
            <button
              key={name}
              onClick={() => connect({ connector })}
              className="w-full py-2 my-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              {name}
            </button>
          ))
        )}

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default WalletModal;
