import * as React from "react";
import { X, CheckCircle } from "lucide-react";

interface SuccessToastProps {
  message: string;
  onClose?: () => void;
}

export const SuccessToast: React.FC<SuccessToastProps> = ({
  message,
  onClose,
}) => {
  return (
    <div
      className="flex items-start bg-white border rounded shadow-md overflow-hidden"
      style={{ maxWidth: 360 }}
    >
      {/* Left accent */}
      <div style={{ width: 4, backgroundColor: "#34D399" }} />

      {/* Icon + content */}
      <div className="flex-1 px-4 py-3">
        <div className="flex items-center">
          <CheckCircle size={20} className="text-green-500 mr-2" />
          <span className="font-semibold text-gray-900">Success</span>
        </div>
        <p className="mt-1 text-sm text-gray-700">{message}</p>
      </div>

      {/* Close button */}
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="p-2 focus:outline-none"
          aria-label="Close toast"
        >
          <X size={16} className="text-gray-400 hover:text-gray-600" />
        </button>
      )}
    </div>
  );
};
