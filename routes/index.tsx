/** @jsx h */
/** @jsxFrag Fragment */

import {
  asset,
  ComponentChildren,
  Fragment,
  h,
  Head,
  PageProps,
  tw,
} from "../client_deps.ts";
import NavBar from "../components/NavBar.tsx";

export default function MainPage(props: PageProps) {
  return (
    <div class={tw`min-h-screen`}>
      <NavBar />
      <div class={tw`flex justify-center items-center`}>
        <div class={tw`max-w-7xl py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between`}>
          <h2 class={tw`text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl`}>
            <span class={tw`block`}>Are you ready to guess?</span>
            <span class={tw`block text-indigo-600`}>Guess the hell out of the Flags!!</span>
          </h2>
          <div class={tw`mt-8 flex lg:mt-0 lg:flex-shrink-0 lg:ml-8`}>
            <div class={tw`inline-flex rounded-md shadow`}>
              <a href="/play" class={tw`inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700`}> Play </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
