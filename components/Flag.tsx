/** @jsx h */

import { h } from "../client_deps.ts";

export default function Flag({name: name}: {name: string}) {
  const baseURl = "https://countryflagsapi.com/svg/"
  return (
    <img src={baseURl + name} />
  );
}