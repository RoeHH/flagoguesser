/** @jsx h */

import { h, tw } from "../client_deps.ts";

export default function Flag({name: name}: {name: string}) {
  const baseURl = "https://countryflagsapi.com/svg/"
  return (
    <img class={tw`border-2 border-black max-w-full h-auto`} src={baseURl + name} />
  );
}