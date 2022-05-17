/** @jsx h */

import { h, tw, useState } from "../client_deps.ts";
import Flag from "../components/Flag.tsx";
import LandButton, { ButtonContent } from "../components/LandButton.tsx";
import landnames from "../data/landnames.js";

let highScore = 0;

export default function Play() {
  const [count, setCount] = useState(0);

  const buttonClickEvent = (win: boolean) => {
    if (win) {
        if (count > highScore) {
        highScore = count + 1;
      }
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };

  let first = true;
  let landcode = "";
  const buttonContents: ButtonContent[] = landnames
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)
    .map((landname: string) => {
      if (first) {
        first = false;
        landcode = landname;
        return {
          landname: landname,
          win: true,
          event: buttonClickEvent,
        };
      } else {
        return {
          landname: landname,
          win: false,
          event: buttonClickEvent,
        };
      }
    });

  return (
    <div class={tw`p-5`}>
      <dl class={tw`mt-5 grid gap-5 grid-cols-2 sm:grid-cols-4`}>
        <h2 class={tw`col-start-1 col-end-2 sm:col-start-2 sm:col-end-3 place-items-center text-xl`}>Points: {count}</h2>
        <h2 class={tw`col-start-2 col-end-3 sm:col-start-3 sm:col-end-4 place-items-center text-xl text-right`}>High Score: {highScore}</h2>
        <div class={tw`col-start-1 col-end-3 sm:col-start-2 sm:col-end-4 place-items-center`}>
          <Flag name={landcode} />
        </div>
        <div class={tw`hidden sm:block `}></div>
        {buttonContents
          .sort(() => Math.random() - 0.5)
          .map((buttonContent) => (
            <LandButton
              landname={buttonContent.landname}
              win={buttonContent.win}
              event={buttonContent.event}
            />
          ))}
      </dl>
    </div>
  );
}
