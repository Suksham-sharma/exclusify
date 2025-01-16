import { ArrowRight, Sparkles } from "lucide-react";

export function SetupNotice() {
  return (
    <div className="rounded-lg border-none bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-xl p-6">
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="h-5 w-5" />
          <h2 className="text-xl font-semibold">Welcome to Community Hub!</h2>
        </div>
        <p className="text-blue-100">
          Complete your community setup to unlock all features
        </p>
      </div>
      <div className="space-y-6">
        <div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span>Setup Progress</span>
            <span>40%</span>
          </div>
          <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
            <div className="h-full w-2/5 bg-white rounded-full" />
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-lg bg-white/10 p-4 backdrop-blur-sm">
            <div>
              <h3 className="font-medium">Website Setup</h3>
              <p className="text-sm text-blue-100">
                Configure your community website and branding
              </p>
            </div>
            <button className="px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 inline" />
            </button>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-white/10 p-4 backdrop-blur-sm">
            <div>
              <h3 className="font-medium">NFT Collection</h3>
              <p className="text-sm text-blue-100">
                Connect your NFT collection for gated access
              </p>
            </div>
            <button className="px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500">
              Configure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
