import { useState } from "react";
import {
  Copy as CopyIcon,
  ExternalLink as ExternalLinkIcon,
  Loader as LoaderIcon,
} from "lucide-react";
import { useWallet } from "@solana/wallet-adapter-react";
import axios from "axios";

const TelegramInviteGenerator = () => {
  const [link, setLink] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const { publicKey, signMessage } = useWallet();

  const handleGetTelegramLink = async () => {
    setLoading(true);
    setError(null);
    if (!signMessage) {
      return;
    }

    try {
      const secret = "your_secret_here";
      const encodedMessage = new TextEncoder().encode(secret);
      const signature = await signMessage(encodedMessage);
      console.log("Signature:", signature);

      const responseData = await axios.post(
        "http://localhost:4000/api/user/generate-link",
        {
          publicKey: publicKey
            ? "9P9mMnxeoQWdvGR1Cv4D7uh2y39FTq6wKeRBXWy21ja3"
            : "",
          signature: Array.from(signature),
          secret,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("responseData", responseData);

      if (!responseData) {
        throw new Error("Failed to generate invite link");
      }
      const data = responseData?.data;

      setLink(data.link);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(
          `Failed to generate invite link. Please try again. ${err.message}`
        );
      } else {
        setError("Failed to generate invite link. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    if (!link) return;

    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err: unknown) {
      console.error("Failed to copy link:", err);
      setError("Failed to copy link");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2">
            Telegram Channel Invites
          </h1>
          <p className="text-gray-400">
            Generate one-time use invite links for your channel
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
          {/* Card Header */}
          <div className="p-6">
            <h2 className="text-xl font-semibold text-white mb-2">
              Generate Invite Link
            </h2>
            <p className="text-gray-400 text-sm">
              Create a secure, one-time use invitation link
            </p>
          </div>

          {/* Card Content */}
          <div className="px-6 pb-6">
            {error && (
              <div className="mb-4 p-4 bg-red-900/50 border border-red-800 rounded-lg text-red-200 text-sm">
                {error}
              </div>
            )}

            {link ? (
              <div className="space-y-4">
                <div className="p-3 bg-gray-900 rounded-lg break-all text-gray-300 font-mono text-sm">
                  {link}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={copyToClipboard}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                  >
                    <CopyIcon className="w-4 h-4" />
                    {copied ? "Copied!" : "Copy Link"}
                  </button>

                  <button
                    onClick={() => window.open(link, "_blank")}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
                  >
                    <ExternalLinkIcon className="w-4 h-4" />
                    Open Link
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={handleGetTelegramLink}
                disabled={loading}
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <LoaderIcon className="w-4 h-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  "Generate New Link"
                )}
              </button>
            )}
          </div>

          {/* Card Footer */}
          <div className="px-6 pb-6 text-sm text-gray-400 space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-gray-500 rounded-full" />
              <span>Links expire after 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-gray-500 rounded-full" />
              <span>Each link can only be used once</span>
            </div>
          </div>
        </div>

        {/* Attribution */}
        <div className="text-center text-gray-500 text-sm">
          Made with ❤️ for your Telegram community
        </div>
      </div>
    </div>
  );
};

export default TelegramInviteGenerator;
