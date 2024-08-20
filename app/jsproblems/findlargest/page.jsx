"use client";
import { useCallback, useEffect, useState } from "react";
import { RiArrowDownWideFill } from "react-icons/ri";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";

SyntaxHighlighter.registerLanguage("javascript", js);

export default function Findlargest() {
  const codeString = `function findLargestElement(numbers) {
    let largestnum = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largestnum) {
        largestnum = numbers[i];
      }
    }
    return largestnum;
  }
  console.log("findLargestElement", findLargestElement([3, 7, 2, 9, 1]));`;

  const problemSting = `Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9`;

  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^solution^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^6
  function findLargestElement(numbers) {
    let largestnum = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largestnum) {
        largestnum = numbers[i];
      }
    }
    return largestnum;
  }
  console.log("findLargestElement", findLargestElement([3, 7, 2, 9, 1]));
  // **************************************end solution***************************************************

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[600px] mt-8">
        <div className="flex flex-col mt-8 gap-5  p-4 relative text-white  bg-[#29292961] rounded-lg border-gray-400 border border-opacity-20">
          <div className="flex gap-3 justify-start items-center"></div>
          <p>
            (easy) Write a function `findLargestElement` that takes an array of
            numbers and returns the largest element.
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
