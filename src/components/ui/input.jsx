import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
    />
  );
});

Input.displayName = "Input";

export { Input };
