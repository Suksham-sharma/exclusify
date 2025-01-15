import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import * as z from "zod";
import { toast } from "sonner";
import { getCollectionInfo } from "../../api/nft";

const formSchema = z.object({
  name: z.string().min(2, "Collection name must be at least 2 characters"),
  nftId: z.string().min(1, "NFT ID is required"),
  tokenStandard: z.string().min(1, "Token Standard is required"),
  groupValue: z.string().min(1, "Group Value is required"),
});

interface NftDetailsProps {
  data: {
    name: string;
    nftId: string;
    tokenStandard: string;
    groupValue: string;
  };
  onUpdate: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export const NftDetails = ({
  data,
  onUpdate,
  onNext,
  onBack,
}: NftDetailsProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: data,
  });

  const nftId = watch("nftId");
  const groupValue = watch("groupValue");

  const {
    data: NftDetails,
    isError,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: ["nftInfo", nftId],
    queryFn: () => getCollectionInfo(nftId),
    enabled: false,
    staleTime: 1000 * 60,
  });

  const handleGetInformation = async () => {
    if (!nftId) {
      toast.error("Please enter an NFT ID first");
      return;
    }
    await refetch();
    if (isError) return toast.error("Something went wrong");
    if (!NftDetails) return toast.error("No data found");
    setValue("name", NftDetails.collectionName);
    setValue("tokenStandard", NftDetails.tokenStandard);
    setValue("groupValue", NftDetails.groupValue);
  };

  const onSubmit = (values: any) => {
    onUpdate({ ...values });
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-gray-900">NFT Details</h2>
        <p className="text-gray-500">Configure your NFT collection</p>
      </div>

      <div className="space-y-4">
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
              disabled={isRefetching}
              className="px-4 py-2 bg-blue-500 text-gray-100 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
            >
              {isRefetching ? "Loading..." : "Get Information"}
            </button>
          </div>
          {errors.nftId && (
            <p className="text-sm text-red-500">
              {errors.nftId.message as string}
            </p>
          )}
        </div>
        {groupValue && (
          <>
            <div className="flex gap-x-4">
              <div className="space-y-2 w-[70%]">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Collection Name
                </label>
                <input
                  readOnly
                  {...register("name")}
                  id="name"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg   outline-none transition-shadow"
                  placeholder="My Awesome NFTs"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="tokenStandard"
                  className="block text-sm font-medium text-gray-700"
                >
                  Token Standard
                </label>
                <input
                  readOnly
                  {...register("tokenStandard")}
                  id="tokenStandard"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg   outline-none transition-shadow"
                  placeholder="ERC-721"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="groupValue"
                className="block text-sm font-medium text-gray-700"
              >
                Group Value
              </label>
              <input
                readOnly
                {...register("groupValue")}
                id="groupValue"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg   outline-none transition-shadow"
                placeholder="0x1234..."
              />
            </div>

            <div className="flex justify-between ">
              <button
                type="button"
                onClick={onBack}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
              >
                Previous Step
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-70"
                disabled={!groupValue}
              >
                Next Step
              </button>
            </div>
          </>
        )}
      </div>
    </form>
  );
};

export default NftDetails;
