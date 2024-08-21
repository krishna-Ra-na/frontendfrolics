"use client";
import { useCallback, useEffect, useState } from "react";
import { RiArrowDownWideFill } from "react-icons/ri";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";

SyntaxHighlighter.registerLanguage("javascript", js);

export default function Palindrome() {
  const codeString = `function isPalindrome(str) {
  str = str.toLowerCase();
  const cleanedStr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_\`~()?\s]/g, "");
  console.log(cleanedStr);
  return cleanedStr === cleanedStr.split("").reverse().join("");
}
console.log(isPalindrome("Eva, can I see bees in a cave?"));`;

  const problemSting = `Implement a function \`isPalindrome\` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive`;

  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^solution^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^6
  function isPalindrome(str) {
    str = str.toLowerCase();
    const cleanedStr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_\`~()?\s]/g, "");
    console.log(cleanedStr);
    return cleanedStr === cleanedStr.split("").reverse().join("");
  }
  console.log(isPalindrome("Eva, can I see bees in a cave?"));
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
