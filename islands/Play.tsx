/** @jsx h */

import { h, tw, useState } from "../client_deps.ts";
import Flag from "../components/Flag.tsx";
import LandButton, { ButtonContent } from "../components/LandButton.tsx";
import landnames from "../data/landnames.js";

export default function Play() {
  const [count, setCount] = useState(0);

  const buttonClickEvent = (win: boolean) => {
    win ? setCount(count + 1) : setCount(count);
  };

  const landcode =
    landnames.at(Math.round(Math.random() * (landnames.length - 1))) || "";
  const buttonContents: ButtonContent[] = landnames
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map((landname: any) => {
      return {
        landname: landname,
        win: false,
        event: buttonClickEvent,
      };
    });
  buttonContents.push({
    landname: landcode,
    win: true,
    event: buttonClickEvent,
  });

  return (
    <div class={tw`p-5`}>
      {count}
      <dl class={tw`mt-5 grid gap-5 sm:grid-cols-4 sm:grid-rows-2`}>
        <div class={tw`col-start-2 col-end-4 grid place-items-center`}>
          <Flag name={landcode} />
        </div>
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