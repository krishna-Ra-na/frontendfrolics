"use client";

import { useEffect, useLayoutEffect } from "react";
import "./style.css";
import { RiArrowDownWideFill } from "react-icons/ri";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";

SyntaxHighlighter.registerLanguage("javascript", js);

export default function Falt() {
  const codeString = `function flat(arr, depth = 1) {
    let result = [];

    if (arr.length === 0) {
      return result;
    }

    arr.forEach((element, index) => {     

      if (Array.isArray(element)) {
        if (depth > 0) {
          result = [...result, ...flat(element, depth - 1)];
        } else {
          result = [...result, flat(element)];
        }
      } else {
        
        result.push(element);
      }      
    });

    return result;
  }

  // Test the function
  console.log(flat([1, [2, [3, [4]], 5]], 2));
  
  
  // ***********************with console.log to understand better**********************
  function flat(arr, depth = 1) {
    let result = [];
    console.log(
      \`Starting flat with arr: \${JSON.stringify(arr)} and depth: \${depth}\`
    );

    if (arr.length === 0) {
      console.log(\`Array is empty, returning: \${JSON.stringify(result)}\`);
      return result;
    }

    arr.forEach((element, index) => {
      console.log(
        \`Processing element at index \${index}: \${JSON.stringify(element)}\`
      );

      if (Array.isArray(element)) {
        console.log(\`Element is an array. Current depth: \${depth}\`);
        if (depth > 0) {
          console.log(\`Flattening element with depth \${depth - 1}\`);
          result = [...result, ...flat(element, depth - 1)];
          console.log("result inside211", result);
        } else {
          console.log(\`Appending nested array as depth is 0\`);
          result = [...result, flat(element)];
        }
      } else {
        console.log(
          \`Element is not an array. Adding to result: \${JSON.stringify(
            element
          )}\`
        );
        result.push(element);
      }

      console.log(\`Result after processing element at index \${index}: \${JSON.stringify(result
        )}\`
      );
    });

    console.log(
      \`Final result for arr: \${JSON.stringify(
        arr
      )} with depth: \${depth} is: \${JSON.stringify(result)}\`
    );
    return result;
  }

  // Test the function
  console.log(flat([1, [2, [3, [4]], 5]], 2));`;

  const problemSting = `const arr = [1, [2], [3, [4]]];
flat(arr)
flat(arr, 1)
flat(arr, 2)`;

  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^solution^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^6
  function flat(arr, depth = 1) {
    let result = [];
    console.log(
      `Starting flat with arr: ${JSON.stringify(arr)} and depth: ${depth}`
    );

    if (arr.length === 0) {
      console.log(`Array is empty, returning: ${JSON.stringify(result)}`);
      return result;
    }

    arr.forEach((element, index) => {
      console.log(
        `Processing element at index ${index}: ${JSON.stringify(element)}`
      );

      if (Array.isArray(element)) {
        console.log(`Element is an array. Current depth: ${depth}`);
        if (depth > 0) {
          console.log(`Flattening element with depth ${depth - 1}`);
          result = [...result, ...flat(element, depth - 1)];
          console.log("result inside211", result);
        } else {
          console.log(`Appending nested array as depth is 0`);
          result = [...result, flat(element)];
        }
      } else {
        console.log(
          `Element is not an array. Adding to result: ${JSON.stringify(
            element
          )}`
        );
        result.push(element);
      }

      console.log(
        `Result after processing element at index ${index}: ${JSON.stringify(
          result
        )}`
      );
    });

    console.log(
      `Final result for arr: ${JSON.stringify(
        arr
      )} with depth: ${depth} is: ${JSON.stringify(result)}`
    );
    return result;
  }

  // Test the function
  console.log(flat([1, [2, [3, [4]], 5]], 2));

  // **************************************end solution***************************************************

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[600px] mt-8">
        <div className="flex flex-col mt-8 gap-5  p-4 relative text-white  bg-[#29292961] rounded-lg border-gray-400 border border-opacity-20">
          <p>
            There is already Array.prototype.flat() in JavaScript (ES2019),
            which reduces the nesting of Array. Could you manage to implement
            your own one? <br /> Here is an example to illustrate
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
