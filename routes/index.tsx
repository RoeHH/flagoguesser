/** @jsx h */
/** @jsxFrag Fragment */

import {
  h,
  tw,
} from "../client_deps.ts";
import NavBar from "../components/NavBar.tsx";
import Play from "../islands/Play.tsx";

export default function MainPage() {
  return (
    <div class={tw`min-h-screen`}>
      <NavBar />
      <Play />
    </div>
  );
}
