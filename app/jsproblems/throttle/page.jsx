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

export default function Throttle() {
  const [count, setCount] = useState(0);

  // Use useCallback to memoize the throttled function
  const handleClick = useCallback(
    throttle(() => {
      console.log(`Button clicked at ${new Date().toLocaleTimeString()}`);
      setCount((prevCount) => prevCount + 1);
    }, 4000), // 1 second delay
    [] // Dependency array
  );

  const codeString = `function throttle(func, wait) {
    let timer = null;
    let lastArgs = null;

    return function throttled(...args) {
      if (!timer) {
        // initially it will be null and we will call func.apply
        func.apply(this, args);
        timer = setTimeout(() => {
          if (lastArgs) {
            // initially it is null, so no execution
            func.apply(this, lastArgs);
            lastArgs = null;
          }
          timer = null; // though it will start accepting function but only after \`wait\` is over
        }, wait);
      } else {
        // till then it will keep discarding function calls made within \`wait\` period
        lastArgs = args;
        return;
      }
    };
  }`;

  const problemSting = `let currentTime = 0
const run = (input) => {
  currentTime = 0
  const calls = []
  const func = (arg) => {
     calls.push(\`\${arg}@\${currentTime}\`)
  }
  const throttled = throttle(func, 3)
  input.forEach((call) => {
     const [arg, time] = call.split('@')
     setTimeout(() => throttled(arg), time)
  })
  return calls
}
expect(run(['A@0', 'B@2', 'C@3'])).toEqual(['A@0', 'C@3'])`;

  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^solution^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^6
  function throttle(func, wait) {
    let timer = null;
    let lastArgs = null;

    return function throttled(...args) {
      if (!timer) {
        // initially it will be null and we will call func.apply
        func.apply(this, args);
        timer = setTimeout(() => {
          if (lastArgs) {
            // initially it is null, so no execution
            func.apply(this, lastArgs);
            lastArgs = null;
          }
          timer = null; // though it will start accepting function but only after `wait` is over
        }, wait);
      } else {
        // till then it will keep discarding function calls made within `wait` period
        lastArgs = args;
        return;
      }
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
              Button clicked {count} times.(throttle in action wait is 4sec)
            </p>
          </div>
          <p>
            Throttling is a common technique used in Web Application, in most
            cases using lodash solution would be a good choice. <br /> could you
            implement your own version of basic throttle()? <br />
            In case you forgot, throttle(func, delay) will return a throttled
            function, which will invoke the func at a max frequency no matter
            how throttled one is called. <br /> Here is an example. <br />{" "}
            Before throttling we have a series of calling like <br />─ A ─ B ─ C
            ─ ─ D ─ ─ ─ ─ ─ ─ E ─ ─ F ─ G <br />
            After throttling at wait time of 3 dashes <br />─ A ─ ─ ─ C ─ ─ ─D ─
            ─ ─ ─ E ─ ─ ─ G <br />
            Be aware that <br /> call A is triggered right way because not in
            waiting time <br /> function call B is swallowed because B, C is in
            the cooling time from A, and C is latter. <br /> notes <br /> please
            follow above spec. the behavior is not exactly the same as
            lodash.throttle()
            <br />
            because window.setTimeout and window.clearTimeout are not accurate
            in browser environment, they are replaced to other implementation
            when judging your code. They still have the same interface, and
            internally keep track of the timing for testing purpose. <br />{" "}
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
