"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Collection name must be at least 2 characters"),
  symbol: z.string().min(2, "Symbol must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  supply: z.string().regex(/^\d+$/, "Supply must be a number"),
});

interface NftDetailsProps {
  data: {
    name: string;
    symbol: string;
    description: string;
    supply: string;
  };
  onUpdate: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export function NftDetails({
  data,
  onUpdate,
  onNext,
  onBack,
}: NftDetailsProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: data,
  });

  const onSubmit = (values: any) => {
    onUpdate(values);
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
            htmlFor="symbol"
            className="block text-sm font-medium text-gray-700"
          >
            Symbol
          </label>
          <input
            {...register("symbol")}
            id="symbol"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
            placeholder="AWSM"
          />
          {errors.symbol && (
            <p className="text-sm text-red-500">
              {errors.symbol.message as string}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            {...register("description")}
            id="description"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow resize-none"
            placeholder="Describe your NFT collection..."
          />
          {errors.description && (
            <p className="text-sm text-red-500">
              {errors.description.message as string}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="supply"
            className="block text-sm font-medium text-gray-700"
          >
            Total Supply
          </label>
          <input
            {...register("supply")}
            id="supply"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
            placeholder="10000"
          />
          {errors.supply && (
            <p className="text-sm text-red-500">
              {errors.supply.message as string}
            </p>
          )}
        </div>
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
}
