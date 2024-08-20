"use client";

import { useCallback, useEffect, useState } from "react";
// import "./style.css";
import { RiArrowDownWideFill } from "react-icons/ri";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";
import _ from "lodash";

SyntaxHighlighter.registerLanguage("javascript", js);

export default function Searchautocomplete() {
  const [posX, setPosX] = useState("");
  const [posY, setPosY] = useState("");

  useEffect(() => {
    const handleMouseMove = _.throttle((event) => {
      console.log(`Mouse moved at: X: ${event.clientX}, Y: ${event.clientY}`);
      setPosX(event.clientX);
      setPosY(event.clientY);
    }, 3000);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <div className="flex  mt-8">
        <div className="flex flex-col w-full mt-8  h-full  p-4 relative   bg-[#29292961] rounded-lg border-gray-400 border border-opacity-20">
          <div className="grid gap-3 grid-cols-4">
            <h2>hello</h2>
            <h2>posX: {posX}</h2>
            <h2>posY: {posY}</h2>
          </div>
        </div>
      </div>
    </>
  );
}
