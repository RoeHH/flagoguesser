/** @jsx h */

import { h, tw } from "../client_deps.ts";
import NavBar from "../components/NavBar.tsx";
import Play from "../islands/Play.tsx";

export default function PlayContainer(props: h.JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <div class="min-h-screen">
        <NavBar />
        <Play />
    </div>
  );
}
