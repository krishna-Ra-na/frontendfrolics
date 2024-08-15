"use client";

import { useEffect, useLayoutEffect } from "react";
import "./style.css";
import { RiArrowDownWideFill } from "react-icons/ri";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";

SyntaxHighlighter.registerLanguage("javascript", js);

export default function Validatebrackets() {
  const codeString = `function validate(string) {
    const stack = [];
    const matchingPairs = {
      "}": "{",
      "]": "[",
      ")": "(",
    };

    for (const char of string) {
      if (char === "{" || char === "[" || char === "(") {
        stack.push(char);
      } else if (char === "}" || char === "]" || char === ")") {
        if (stack.length === 0 || stack.pop() !== matchingPairs[char]) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }

  console.log("1", validate("{}[]()"));
  console.log("2", validate("{[()]}"));
  console.log("3", validate("{[}]"));
  console.log("4", validate("{}}"));`;

  const problemSting = `validate("{}[]()");
//true
validate("{[()]}");
//true
validate("{[}]");
//false ,they r not in right order
validate("{}}");
//false, last '}' is not paired with '{'`;

  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^solution^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^6
  function validate(string) {
    const stack = [];
    const matchingPairs = {
      "}": "{",
      "]": "[",
      ")": "(",
    };

    for (const char of string) {
      if (char === "{" || char === "[" || char === "(") {
        stack.push(char);
      } else if (char === "}" || char === "]" || char === ")") {
        if (stack.length === 0 || stack.pop() !== matchingPairs[char]) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }

  console.log("1", validate("{}[]()"));
  console.log("2", validate("{[()]}"));
  console.log("3", validate("{[}]"));
  console.log("4", validate("{}}"));
  // **************************************end solution***************************************************

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[600px] mt-8">
        <div className="flex flex-col mt-8 gap-5  p-4 relative text-white  bg-[#29292961] rounded-lg border-gray-400 border border-opacity-20">
          <p>Validate Brackets. Here is the examples</p>
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
