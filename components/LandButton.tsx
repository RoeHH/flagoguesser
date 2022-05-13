/** @jsx h */

import { h, tw } from "../client_deps.ts";

export interface ButtonContent{
    landname: string;
    win: boolean;
}

export default function LandButton({landname: landname, win: win}: ButtonContent) {
    const winStyle = win ? "color: white;" : "color: red;";
    return (
        <button class="row-start-2 h-20 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            <span class="text-base font-medium" style={winStyle}>{landname}</span>
        </button>
    );
}