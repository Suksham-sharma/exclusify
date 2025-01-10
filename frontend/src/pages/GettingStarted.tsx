import React, { useState } from "react";
import { motion } from "framer-motion";

// Types
interface ManagerDetails {
  name: string;
  phoneNumber: string;
  orgName?: string;
  gender?: "male" | "female" | "other" | "";
}

interface NFTDetails {
  name: string;
  tokenId: string;
}

type CommunityType = "open" | "invite" | "criteria";

interface CommunityDetails {
  type: CommunityType;
  minNFTRequired: number;
  name: string;
  description: string;
}

interface FormData {
  managerDetails: ManagerDetails;
  nftDetails: NFTDetails;
  communityDetails: CommunityDetails;
}

const OnboardingFlow: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    managerDetails: {
      name: "",
      phoneNumber: "",
      orgName: "",
      gender: "",
    },
    nftDetails: {
      name: "",
      tokenId: "",
    },
    communityDetails: {
      type: "open",
      minNFTRequired: 1,
      name: "",
      description: "",
    },
  });

  const steps = {
    1: {
      title: "Manager Details",
      subtitle: "Tell us about yourself",
    },
    2: {
      title: "NFT Configuration",
      subtitle: "Set up your NFT details",
    },
    3: {
      title: "Community Setup",
      subtitle: "Configure your community preferences",
    },
  };

  return (
    <div className="min-h-screen max-h-screen h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 py-12 lg:py-24 relative">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 font-serif font-extralight italic text-zinc-600">
            {steps[step as keyof typeof steps].title}
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 mb-8">
            {steps[step as keyof typeof steps].subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnboardingFlow;
