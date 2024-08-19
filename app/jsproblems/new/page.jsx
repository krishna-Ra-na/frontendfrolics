/**
 * @param {Function} func
 * @param {number} wait
 */
"use client";

import { useCallback, useEffect, useState } from "react";
import "./style.css";
import { RiArrowDownWideFill } from "react-icons/ri";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";
import _ from "lodash";

SyntaxHighlighter.registerLanguage("javascript", js);

export default function Debounce() {
  const [count, setCount] = useState(0);

  // Use useCallback to memoize the throttled function
  const handleClick = useCallback(
    debounce(() => {
      console.log(`Button clicked at ${new Date().toLocaleTimeString()}`);
      setCount((prevCount) => prevCount + 1);
    }, 2000),
    []
  );

  const codeString = `function debounce(func, wait) {

  // definition: invoke function only when the last function has passed \`wait\` time

  let timerId = null;
  return function debounced(...args) {

    // clear timer (doesn't matter if the execution is going or has completed)
    // 1. nothing will happen in the case when execution has completed
    // 2. it will clear the timer and restart if an ongoing timer was running
    clearTimeout(timerId);

    // call supplied function \`func\` after \`wait\` time
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  }

}`;

  const problemSting = `let currentTime = 0
const run = (input) => {
  currentTime = 0
  const calls = []
  const func = (arg) => {
     calls.push(\`\${arg}@\${currentTime}\`)
  }
  const debounced = debounce(func, 3)
  input.forEach((call) => {
     const [arg, time] = call.split('@')
     setTimeout(() => debounced(arg), time)
  })
  return calls
}
expect(run(['A@0', 'B@2', 'C@3'])).toEqual(['C@5'])`;

  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^solution^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^6
  function debounce(func, wait) {
    // definition: invoke function only when the last function has passed `wait` time

    let timerId = null;
    return function debounced(...args) {
      // clear timer (doesn't matter if the execution is going or has completed)
      // 1. nothing will happen in the case when execution has completed
      // 2. it will clear the timer and restart if an ongoing timer was running
      clearTimeout(timerId);

      // call supplied function `func` after `wait` time
      timerId = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    };
  }
  // **************************************end solution***************************************************

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[600px] mt-8">
        <div className="flex flex-col mt-8 gap-5  p-4 relative text-white  bg-[#29292961] rounded-lg border-gray-400 border border-opacity-20">
          <div className="flex gap-3 justify-start items-center">
            <button
              onClick={handleClick}
              className="bg-slate-500 inline-block rounded-md p-2"
            >
              Click Me
            </button>
            <p>
              Button clicked {count} times.(debounce in action wait is 2sec)
            </p>
          </div>
          <p>
            Debounce is a common technique used in Web Application, in most
            cases using lodash solution would be a good choice. <br />
            could you implement your own version of basic debounce()? <br />
            In case you forgot, debounce(func, delay) will returned a debounced
            function, which delays the invoke.
            <br /> Here is an example. <br /> Before debouncing we have a series
            of calling like <br />
            ─ A ─ B ─ C ─ ─ D ─ ─ ─ ─ ─ ─ E ─ ─ F ─ G <br />
            After debouncing at wait time of 3 dashes <br />
            ─ ─ ─ ─ ─ ─ ─ ─ D ─ ─ ─ ─ ─ ─ ─ ─ ─ G<br /> <br />
            notes <br /> please follow above spec. the behavior might not be
            exactly the same as lodash.debounce()
            <br />
            because window.setTimeout and window.clearTimeout are not accurate
            in browser environment, they are replaced to other implementation
            when judging your code. They still have the same interface, and
            internally keep track of the timing for testing purpose. <br />
            Something like below will be used to do the test.
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
