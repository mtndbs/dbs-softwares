import React, { TextareaHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface AppTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: FieldError;
}

export const AppTextarea = forwardRef<HTMLTextAreaElement, AppTextareaProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div>
        <label className="block text-primary font-semibold mb-2">{label}</label>
        <textarea
          ref={ref}
          className={`w-full px-4 py-3 border-2 ${
            error ? "border-red-500" : "border-primary"
          } focus:border-secondary outline-none resize-none ${className}`}
          {...props}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
      </div>
    );
  },
);

AppTextarea.displayName = "AppTextarea";
