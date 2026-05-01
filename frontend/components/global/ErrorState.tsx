import React from "react";
import { AlertCircle, RefreshCcw } from "lucide-react";

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
  variant?: "full" | "inline";
  errorCodeMessage?: string;
}

export const ErrorState = ({
  message = "Something went wrong while fetching events.",
  onRetry,
  variant = "full",
  errorCodeMessage,
}: ErrorStateProps) => {
  const containerClasses =
    variant === "full"
      ? "min-h-[60vh] flex flex-col items-center justify-center p-6 text-center"
      : "p-8 border-2 border-dashed border-red-100 rounded-2xl bg-red-50/30 text-center";

  return (
    <div className={containerClasses}>
      <div className="bg-red-100 p-4 rounded-full mb-6">
        <AlertCircle className="w-10 h-10 text-red-600" />
      </div>

      <h2 className="text-xl font-bold text-slate-900 mb-2">
        Oops! Service Interrupted
      </h2>

      <p className="text-gray-600 max-w-md mx-auto mb-8 text-sm">{message}</p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {onRetry && (
          <button
            onClick={onRetry}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-md shadow-blue-100"
          >
            <RefreshCcw className="w-4 h-4" />
            Try Again
          </button>
        )}
      </div>

      <p className="mt-8 text-xs text-gray-400">
        {errorCodeMessage || "Error Code: 500_INTERNAL_SERVER_ERROR"}
      </p>
    </div>
  );
};
