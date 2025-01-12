interface ProgressProps {
  currentStep: number;
}

export function Progress({ currentStep }: ProgressProps) {
  const steps = [
    { number: 1, label: "Manager Details", icon: "👤" },
    { number: 2, label: "NFT Details", icon: "🎨" },
    { number: 3, label: "Community", icon: "🌐" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`flex items-center ${
              index !== steps.length - 1 ? "flex-1" : ""
            }`}
          >
            <div className="relative">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-lg transition-all duration-200
                    ${
                      currentStep >= step.number
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                        : "bg-gray-100 text-gray-400"
                    }`}
              >
                {step.icon}
              </div>
              <span
                className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm font-medium whitespace-nowrap transition-colors duration-200
                    ${
                      currentStep >= step.number
                        ? "text-blue-600"
                        : "text-gray-400"
                    }`}
              >
                {step.label}
              </span>
            </div>
            {index !== steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 mx-4 mt-6 rounded transition-colors duration-200 ${
                  currentStep > step.number ? "bg-blue-600" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
