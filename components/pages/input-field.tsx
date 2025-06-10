import React from "react";
import { Input } from "../ui/input";
import { AlertCircle } from "lucide-react";
import { ContactFormValues } from "./contatct-page";

export default function InputField({
  name,
  label,
  type = "text",
  placeholder,
  icon: Icon,
  required = true,
  formData,
  handleInputChange,
  errors,
}: {
  name: keyof ContactFormValues;
  label: string;
  type?: string;
  placeholder: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  required?: boolean;
  formData: ContactFormValues;
  handleInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  errors: Partial<Record<keyof ContactFormValues, string>>;
}) {
  return (
    <div className="group">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
      >
        <Icon className="inline w-4 h-4 mr-2" />
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <Input
        id={name}
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleInputChange}
        className={`w-full px-4 py-3 rounded-xl border bg-white/80 text-slate-900 placeholder-slate-500 hover:bg-white/90 dark:bg-slate-700/50 dark:text-white dark:placeholder-slate-400 dark:hover:bg-slate-700/70 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
          errors[name]
            ? "border-red-500/50 focus:ring-red-500 dark:border-red-500/50"
            : "border-slate-300/50 focus:ring-blue-600 dark:border-slate-600/50 dark:focus:ring-blue-500"
        }`}
        placeholder={placeholder}
        required={required}
      />
      {errors[name] && (
        <div className="mt-1 flex items-center text-sm text-red-600 dark:text-red-400">
          <AlertCircle className="w-4 h-4 mr-1" />
          {errors[name]}
        </div>
      )}
    </div>
  );
}
