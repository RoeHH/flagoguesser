/** @jsx h */

import { h, tw } from "../client_deps.ts";

export default function Play() {
    const landcode = landnames.at(Math.round(Math.random() * (landnames.length - 1))) || "";
    const buttonContents: ButtonContent[] = landnames.sort(() => Math.random() - 0.5).slice(0,3).map((landname: any) => { return { name: landname, win: false } });
    console.log(buttonContents);
    buttonContents.push({ name: landcode, win: true });
  
    return (
      <div class="p-5">
        <dl class="mt-5 grid gap-5 sm:grid-cols-4 sm:grid-rows-2">
          <div class="col-start-2 col-end-4 grid place-items-center" >
            <Flag name={landcode} />
          </div>
              {buttonContents.sort(() => Math.random() - 0.5).map((buttonContent) => (
                <LandButton landname={buttonContent.name} win={buttonContent.win} />
              ))}
        </dl>
      </div>
    );
  }