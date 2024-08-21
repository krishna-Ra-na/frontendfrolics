"use client";
import { useCallback, useEffect, useState } from "react";
import { RiArrowDownWideFill } from "react-icons/ri";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";

SyntaxHighlighter.registerLanguage("javascript", js);

export default function Countvowels() {
  const codeString = `function countVowels(str) {
  let count = 0;
  for (let i = 0; i <= str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u" ||
      str[i] === "A" ||
      str[i] === "E" ||
      str[i] === "I" ||
      str[i] === "O" ||
      str[i] === "U"
    ) {
      count++;
    }
  }
  return count;
}`;

  const problemSting = `Implement a function \`countVowels\` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running`;

  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^solution^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^6
  function countVowels(str) {
    let count = 0;
    for (let i = 0; i <= str.length; i++) {
      if (
        str[i] === "a" ||
        str[i] === "e" ||
        str[i] === "i" ||
        str[i] === "o" ||
        str[i] === "u" ||
        str[i] === "A" ||
        str[i] === "E" ||
        str[i] === "I" ||
        str[i] === "O" ||
        str[i] === "U"
      ) {
        count++;
      }
    }
    return count;
  }
  // **************************************end solution***************************************************

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[600px] mt-8">
        <div className="flex flex-col mt-8 gap-5  p-4 relative text-white  bg-[#29292961] rounded-lg border-gray-400 border border-opacity-20">
          <div className="flex gap-3 justify-start items-center"></div>

          <SyntaxHighlighter language="javascript" style={docco}>
            {problemSting}
          </SyntaxHighlighter>
        </div>
        <div className="flex mt-8 flex-col gap-5  p-4 relative text-white  bg-[#29292961] rounded-lg border-gray-400 border border-opacity-20">
          <h2>Solution</h2>
          <SyntaxHighlighter language="javascript" style={docco}>
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
}
