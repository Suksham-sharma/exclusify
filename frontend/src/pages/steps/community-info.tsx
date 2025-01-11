"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  discordUrl: z.string().url("Invalid Discord URL"),
  twitterHandle: z.string().min(1, "Twitter handle is required"),
  websiteUrl: z.string().url("Invalid website URL"),
});

interface CommunityDetailsProps {
  data: {
    discordUrl: string;
    twitterHandle: string;
    websiteUrl: string;
  };
  onUpdate: (data: any) => void;
  onSubmit: () => void;
  onBack: () => void;
}

export function CommunityDetails({
  data,
  onUpdate,
  onSubmit,
  onBack,
}: CommunityDetailsProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: data,
  });

  const onSubmitForm = (values: any) => {
    onUpdate(values);
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-gray-900">Community Details</h2>
        <p className="text-gray-500">Connect with your community</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="discordUrl"
            className="block text-sm font-medium text-gray-700"
          >
            Discord Server URL
          </label>
          <input
            {...register("discordUrl")}
            id="discordUrl"
            type="url"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
            placeholder="https://discord.gg/..."
          />
          {errors.discordUrl && (
            <p className="text-sm text-red-500">
              {errors.discordUrl.message as string}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="twitterHandle"
            className="block text-sm font-medium text-gray-700"
          >
            Twitter Handle
          </label>
          <input
            {...register("twitterHandle")}
            id="twitterHandle"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
            placeholder="@username"
          />
          {errors.twitterHandle && (
            <p className="text-sm text-red-500">
              {errors.twitterHandle.message as string}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="websiteUrl"
            className="block text-sm font-medium text-gray-700"
          >
            Website URL
          </label>
          <input
            {...register("websiteUrl")}
            id="websiteUrl"
            type="url"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
            placeholder="https://..."
          />
          {errors.websiteUrl && (
            <p className="text-sm text-red-500">
              {errors.websiteUrl.message as string}
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
          Complete Setup
        </button>
      </div>
    </form>
  );
}
