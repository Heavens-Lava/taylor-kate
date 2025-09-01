// src/components/ui/Button.jsx
import React from "react";

// Optional: define variants for button styles
const VARIANTS = {
  default: "bg-pink-600 text-white hover:bg-pink-700",
  ghost: "bg-transparent text-pink-600 hover:bg-pink-100",
  luxury:
    "bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-90",
};

export const Button = ({
  variant = "default",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`rounded-md font-medium transition-colors duration-200 ${VARIANTS[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
