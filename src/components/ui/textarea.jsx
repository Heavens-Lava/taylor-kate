import React from "react";

const Textarea = React.forwardRef((props, ref) => {
  return (
    <textarea
      ref={ref}
      className="flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export default Textarea;
