/** @jsx h */

import { h, tw } from "../client_deps.ts";
import NavBar from "../components/NavBar.tsx";

const urls = ["https://comfortable-pheasant-86-bv9q02zgzndg.deno.dev", "https://flagoguesser-2p6s0we0fse0.deno.dev" ];

export default function PlayContainer() {
  let i = 0;
  return (
    <div class={tw`min-h-screen`}>
      <NavBar />
      {urls.map((url) => (
        <div class={tw`flex justify-center items-center`}>
          <a
            class={tw
              `text-3xl font-extrabold tracking-tight text-indigo-900 md:text-4xl`}
            href={url}
          >
            V{i++}
          </a>
        </div>
      ))}
    </div>
  );
}
