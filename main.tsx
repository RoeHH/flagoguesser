/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
import { serve } from "https://deno.land/std@0.133.0/http/server.ts";
import { router } from "https://crux.land/router@0.0.11";
import { h, ssr } from "https://crux.land/nanossr@0.0.4";
import landnames from "https://raw.githubusercontent.com/RoeHH/flagoguesser/master/landnames.json" assert { type: "json" };

const render = (component:any) => ssr(() => <App>{component}</App>);

serve(router(
  {
    "/": () => render(<Landing />),
    "/flags": () => render(<Flags />),
    "/play": () => render(<Play />),
  },
  () => render(<NotFound />),
));

function App({ children: children }: { children: any }) {
  return (
    <div class="min-h-screen">
      <NavBar />
      {children}
    </div>
  );
}

function NavBar() {
  return (
    <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
     <div class="mb-2 sm:mb-0">
      <a href="/" class="text-2xl no-underline hover:text-indigo-800">Flago Guesser</a>
     </div>
     <div>
        <a href="/flags" class="text-lg no-underline hover:text-indigo-800 ml-3">Flags</a>
        <a href="/play" class="text-lg no-underline hover:text-indigo-800 ml-3">Play</a>
     </div>
    </nav>
  );
}

function Landing() {
  return (
    <div class="flex justify-center items-center">
      <div class="max-w-7xl py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          <span class="block">Are you ready to guess?</span>
          <span class="block text-indigo-600">Guess the hell out of the Flags!!</span>
        </h2>
        <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0 lg:ml-8">
          <div class="inline-flex rounded-md shadow">
            <a href="/play" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"> Play </a>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ButtonContent{
  name: string;
  win: boolean;
}

function Play() {
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

function Flags() {
  return (
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-4 mb-12 lg:mb-8">
        <h2 class="text-4xl font-extrabold tracking-tight sm:text-4xl">All Flags currently in the Game</h2>
      </div>
      <div class="grid grid-cols-1 gap-y-10 items-center sm:grid-cols-3 gap-x-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
        {landnames.map((name) => (
          <Flag name={name} />
        ))}
      </div>
    </div>
  )
}

function NotFound() {
  return (
    <div class="min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div class="max-w-max mx-auto">
        <main class="sm:flex">
          <p class="text-4xl font-extrabold text-indigo-600 sm:text-5xl">404</p>
          <div class="sm:ml-6">
            <div class="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page not found</h1>
              <p class="mt-1 text-base text-gray-500">Please check the URL in the address bar and try again.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function LandButton({landname: landname, win: win}: {landname: string, win: boolean}) {
  const winStyle = win ? "color: white;" : "color: red;";
  return (
      <button class="row-start-2 h-20 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          <span class="text-base font-medium" style={winStyle}>{landname}</span>
      </button>
  );
}

function Flag({name: name}: {name: string}) {
  const baseURl = "https://countryflagsapi.com/svg/"
  return (
    <img src={baseURl + name} />
  );
}