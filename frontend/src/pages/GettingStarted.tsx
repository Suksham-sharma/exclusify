"use client";

import { useState } from "react";
import { ManagerDetails } from "./steps/manager-details";
import { NftDetails } from "./steps/nft-details";
import { CommunityDetails } from "./steps/community-info";
type FormData = {
  manager: {
    firstName: string;
    lastName: string;
    email: string;
  };
  nft: {
    name: string;
    symbol: string;
    description: string;
    supply: string;
  };
  community: {
    discordUrl: string;
    twitterHandle: string;
    websiteUrl: string;
  };
};

const initialFormData: FormData = {
  manager: {
    firstName: "",
    lastName: "",
    email: "",
  },
  nft: {
    name: "",
    symbol: "",
    description: "",
    supply: "",
  },
  community: {
    discordUrl: "",
    twitterHandle: "",
    websiteUrl: "",
  },
};

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const updateFormData = (step: keyof FormData, data: any) => {
    setFormData((prev) => ({
      ...prev,
      [step]: { ...prev[step], ...data },
    }));
  };

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 ">
            {/* Left Panel */}
            <div className="col-span-2 relative">
              <div className="absolute inset-0">
                <img
                  src="/form.png"
                  alt="Decorative background"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-indigo-900/90" />
              </div>
              <div className="relative z-10 p-8 lg:p-12">
                <div className="h-full">
                  <div className="space-y-6">
                    <h1 className="text-3xl font-bold text-white">
                      Create Your Community
                    </h1>
                    <p className="text-blue-100">
                      Set up your NFT-gated community in minutes. Connect with
                      your members, manage access, and grow your ecosystem.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div className="col-span-3 p-8 lg:p-12">
              <div className="max-w-2xl mx-auto">
                <Progress currentStep={step} />
                <div className="mt-12">
                  {step === 1 && (
                    <ManagerDetails
                      data={formData.manager}
                      onUpdate={(data) => updateFormData("manager", data)}
                      onNext={handleNext}
                    />
                  )}
                  {step === 2 && (
                    <NftDetails
                      data={formData.nft}
                      onUpdate={(data) => updateFormData("nft", data)}
                      onNext={handleNext}
                      onBack={handleBack}
                    />
                  )}
                  {step === 3 && (
                    <CommunityDetails
                      data={formData.community}
                      onUpdate={(data) => updateFormData("community", data)}
                      onSubmit={handleSubmit}
                      onBack={handleBack}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
