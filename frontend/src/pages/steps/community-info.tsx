import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ChevronDown } from "lucide-react";

const formSchema = z.object({
  communityName: z.string().url("Invalid Discord URL"),
  description: z.string().min(1, "Twitter handle is required"),
  type: z.string().url("Invalid website URL"),
});

enum CommunityType {
  Open = "open",
  Closed = "closed",
  Custom = "custom",
}
interface CommunityDetailsProps {
  data: {
    communityName: string;
    description: string;
    type: CommunityType;
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
            htmlFor="communityName"
            className="block text-sm font-medium text-gray-700"
          >
            Community Name
          </label>
          <input
            {...register("communityName")}
            id="communityName"
            type="url"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
            placeholder="AllianceDAO"
          />
          {errors.communityName && (
            <p className="text-sm text-red-500">
              {errors.communityName.message as string}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="Description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <input
            {...register("description")}
            id="Description"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
            placeholder="Details about your community...."
          />
          {errors.description && (
            <p className="text-sm text-red-500">
              {errors.description.message as string}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="type"
            className="block text-sm font-medium text-gray-700"
          >
            Community Type
          </label>

          <AccessTypeDropdown
            register={(type: string) => ({
              onChange: (e: React.ChangeEvent<HTMLSelectElement>) =>
                console.log(e.target.value),
              type,
            })}
          />
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

interface AccessTypeDropdownProps {
  register: any;
}

export const AccessTypeDropdown: React.FC<AccessTypeDropdownProps> = ({
  register,
}) => {
  return (
    <div className="relative">
      <select
        {...register("type")}
        id="type"
        className="w-full h-12 pl-4 pr-10 bg-white border border-gray-200 rounded-xl 
                   appearance-none cursor-pointer
                   shadow-sm
                   hover:border-gray-300
                   focus:border-blue-500 focus:ring-4 focus:ring-blue-100
                   outline-none transition-all duration-200
                   text-gray-900 text-base"
      >
        <option value="" disabled>
          Select access type...
        </option>
        <option value={CommunityType.Open} className="py-2">
          Open (Anyone can join)
        </option>
        <option value={CommunityType.Closed} className="py-2">
          Closed (Invite only)
        </option>
        <option value={CommunityType.Custom} className="py-2">
          Custom (NFT requirement)
        </option>
      </select>

      <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
        <ChevronDown className="w-5 h-5" />
      </div>
    </div>
  );
};
