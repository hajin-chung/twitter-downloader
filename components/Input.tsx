import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export const Input = (props: JSX.HTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      type="text"
      class="border-gray-400 hover:border-gray-300 focus:border-gray-200 border-4 rounded-md text-xl outline-none p-2 bg-gray-900 text-white"
    />
  );
};
