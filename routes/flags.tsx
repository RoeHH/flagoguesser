/** @jsx h */

import { h, tw } from "../client_deps.ts";
import NavBar from "../components/NavBar.tsx";
import Flag from "../components/Flag.tsx";
import landnames from "../data/landnames.js";

export default function Flags() {
  return (      
    <div class={tw`min-h-screen`}>
      <NavBar />
    <div class={tw`mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24`}>
      <div class={tw`space-y-4 mb-12 lg:mb-8`}>
        <h2 class={tw`text-4xl font-extrabold tracking-tight sm:text-4xl`}>All Flags currently in the Game</h2>
      </div>
      <div class={tw`grid grid-cols-1 gap-y-10 items-center sm:grid-cols-3 gap-x-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8`}>
        {landnames.map((name) => (
          <Flag name={name} />
        ))}
      </div>
    </div>
    </div>
  )
}