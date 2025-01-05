import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useEffect } from "react";
import TelegramInviteGenerator from "./LinkGenerator";

export default function HomeScreen() {
  const { publicKey } = useWallet();

  useEffect(() => {
    if (publicKey) {
      console.log(publicKey.toString());
    }
  }, [publicKey]);

  return (
    <div>
      <nav className="bg-gray-900 py-4 px-6 flex items-center justify-between fixed w-full top-0 left-0 z-10 shadow-lg">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-white">Auth System</h1>
        </div>
        <WalletMultiButton className="!bg-blue-600 !hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors" />
      </nav>

      <div>
        {publicKey ? (
          <TelegramInviteGenerator />
        ) : (
          <div className="text-lg text-gray-500">
            Connect your wallet to see your public key.
          </div>
        )}
      </div>
    </div>
  );
}
