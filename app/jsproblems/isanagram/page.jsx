"use client";
import { useCallback, useEffect, useState } from "react";
import { RiArrowDownWideFill } from "react-icons/ri";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";

SyntaxHighlighter.registerLanguage("javascript", js);

export default function Isanagram() {
  const codeString = `function isAnagram(str1, str2) {
    // Check if both strings have the same length
    if (str1.length !== str2.length) {
      return false;
    }
    const a = str1.toUpperCase().split("").sort().join("");
    const b = str2.toUpperCase().split("").sort().join("");
    return a === b;
  }
  console.log("isana", isAnagram("spar", "rasp"));`;

  const problemSting = `function isAnagram(str1, str2) {

}`;

  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^solution^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^6
  function isAnagram(str1, str2) {
    // Check if both strings have the same length
    if (str1.length !== str2.length) {
      return false;
    }
    const a = str1.toUpperCase().split("").sort().join("");
    const b = str2.toUpperCase().split("").sort().join("");
    return a === b;
  }
  console.log("isana", isAnagram("spar", "rasp"));
  // **************************************end solution***************************************************

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[600px] mt-8">
        <div className="flex flex-col mt-8 gap-5  p-4 relative text-white  bg-[#29292961] rounded-lg border-gray-400 border border-opacity-20">
          <div className="flex gap-3 justify-start items-center"></div>
          <p>
            (easy) Write a function `isAnagram` which takes 2 parameters and
            returns true/false if those are anagrams or not. What's Anagram? - A
            word, phrase, or name formed by rearranging the letters of another,
            such as spar, formed from rasp.
          </p>
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
