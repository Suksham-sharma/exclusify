"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Collection name must be at least 2 characters"),
  nftId: z.string().min(1, "NFT ID is required"),
});

interface NftDetailsProps {
  data: {
    name: string;
    nftId: string;
  };
  onUpdate: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}
import { useState } from "react";

export const NftDetails = ({
  data,
  onUpdate,
  onNext,
  onBack,
}: NftDetailsProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [nftInfo, setNftInfo] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: data,
  });

  const nftId = watch("nftId");

  const handleGetInformation = async () => {
    if (!nftId) {
      setError("Please enter an NFT ID first");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/1`
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch NFT information");
      }

      setNftInfo(data);
    } catch (err: unknown) {
      setError("Sorry, unable to retrieve NFT information. Please try again.");
      console.log(err);
      setNftInfo(null);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = (values: any) => {
    if (!nftInfo) {
      setError("Please get NFT information before proceeding");
      return;
    }
    onUpdate({ ...values, nftInfo });
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-gray-900">NFT Details</h2>
        <p className="text-gray-500">Configure your NFT collection</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Collection Name
          </label>
          <input
            {...register("name")}
            id="name"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
            placeholder="My Awesome NFTs"
          />
          {errors.name && (
            <p className="text-sm text-red-500">
              {errors.name.message as string}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="nftId"
            className="block text-sm font-medium text-gray-700"
          >
            NFT ID
          </label>
          <div className="flex gap-4">
            <input
              {...register("nftId")}
              id="nftId"
              type="text"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
              placeholder="0x1234..."
            />
            <button
              type="button"
              onClick={handleGetInformation}
              disabled={isLoading}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
            >
              {isLoading ? "Loading..." : "Get Information"}
            </button>
          </div>
          {errors.nftId && (
            <p className="text-sm text-red-500">
              {errors.nftId.message as string}
            </p>
          )}
        </div>

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        {nftInfo && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="font-medium text-green-800">
              NFT Information Retrieved
            </h3>
            <pre className="mt-2 text-sm text-green-700 whitespace-pre-wrap">
              {JSON.stringify(nftInfo, null, 2)}
            </pre>
          </div>
        )}
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
        >
          Previous Step
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Next Step
        </button>
      </div>
    </form>
  );
};

export default NftDetails;
