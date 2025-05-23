interface InputFieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
}

export const InputField = ({ label, error, children }: InputFieldProps) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    {children}
    {error && (
      <p className="text-sm text-red-500 flex items-center gap-1">{error}</p>
    )}
  </div>
);
