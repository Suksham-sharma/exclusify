"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
});

interface ManagerDetailsProps {
  data: {
    firstName: string;
    lastName: string;
    email: string;
  };
  onUpdate: (data: any) => void;
  onNext: () => void;
}

export function ManagerDetails({
  data,
  onUpdate,
  onNext,
}: ManagerDetailsProps) {
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold text-gray-900">Manager Details</h2>
        <p className="text-gray-500">
          Tell us about yourself and your role in the community
        </p>
      </div>

      <div className="space-y-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              {...register("firstName")}
              id="firstName"
              type="text"
              className="form-input-style"
              placeholder="John"
            />
            {errors.firstName && (
              <p className="text-sm text-red-500">
                {errors.firstName.message as string}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              {...register("lastName")}
              id="lastName"
              type="text"
              className="form-input-style"
              placeholder="Doe"
            />
            {errors.lastName && (
              <p className="text-sm text-red-500">
                {errors.lastName.message as string}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            className="form-input-style"
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="text-sm text-red-500">
              {errors.email.message as string}
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button type="submit" className="btn-primary">
          Next Step
        </button>
      </div>
    </form>
  );
}
