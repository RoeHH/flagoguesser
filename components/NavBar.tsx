/** @jsx h */

import { h, tw } from "../client_deps.ts";

export default function NavBar(props: h.JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <nav class={tw`font-sans flex flex-row text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full`}>
     <div class={tw`mb-2 sm:mb-0 flex flex-row`}>
        <img src="/favicon.ico" class={tw`h-[2rem]`} />
        <a href="/" class={tw`text-2xl no-underline hover:text-indigo-800`}>Flago Guesser</a>
     </div>
     <div>
        <a href="/versions" class={tw`text-lg no-underline hover:text-indigo-800 ml-3`}>Versions</a>
        <a href="/flags" class={tw`text-lg no-underline hover:text-indigo-800 ml-3`}>Flags</a>
        <a href="/" class={tw`text-lg no-underline hover:text-indigo-800 ml-3`}>Play</a>
     </div>
    </nav>
  );
}
