import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="border-gray-400 hover:border-gray-300 focus:border-gray-200 border-4 rounded-md outline-none p-2 bg-gray-900 text-white font-bold"
    />
  );
}
