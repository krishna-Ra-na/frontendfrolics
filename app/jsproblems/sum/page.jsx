"use client";

import { useEffect, useLayoutEffect } from "react";
import "./style.css";
import { RiArrowDownWideFill } from "react-icons/ri";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";

SyntaxHighlighter.registerLanguage("javascript", js);

export default function Sum() {
  const codeString = ` function sum(num) {
    const func = function (num2) {
      return num2 ? sum(num + num2) : num; 
    };

    func.valueOf = () => num; 
    return func; 
  }
  console.log("RETURN", sum(2)(2)(1)());

  // ************another way*************^^^^^^^^^^^^^^
  function sumT(a) {
    return function (b) {
      if (b) {
        return sumT(a + b);
      }
      return a;
    };
  }

  console.log("sumT=====", sumT(2)(2)(1)());`;

  const problemSting = `const sum1 = sum(1)
sum1(2) == 3 // true
sum1(3) == 4 // true
sum(1)(2)(3) == 6 // true
sum(5)(-1)(2) == 6 // true`;

  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^sol^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^6

  // lets say we have to do sum(1)(2) then it
  // is easy return a function from function
  // example

  function sum1(num) {
    return function (num2) {
      return num + num2;
    };
  }
  // alert(sum1(1)(2));

  // we can have sum(1)(2)....(n) up to n
  // now pattern here is we need to return function
  // n time (if there is n )
  // we can use recursion for it

  function sum(num) {
    const func = function (num2) {
      return num2 ? sum(num + num2) : num;
    };

    func.valueOf = () => num;
    return func;
  }
  console.log("RETURN", sum(2)(2)(1)());

  // *************************^^^^^^^^^^^^^^
  function sumT(a) {
    return function (b) {
      if (b) {
        return sumT(a + b);
      }
      return a;
    };
  }

  console.log("sumT=====", sumT(2)());

  // *****************************************************************************************

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[600px] mt-8">
        <div className="flex flex-col mt-8 gap-5  p-4 relative text-white  bg-[#29292961] rounded-lg border-gray-400 border border-opacity-20">
          <p>Create a sum(), which makes following possible</p>
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
