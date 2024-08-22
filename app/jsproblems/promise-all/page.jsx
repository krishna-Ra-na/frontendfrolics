"use client";
import { useCallback, useEffect, useState } from "react";
import { RiArrowDownWideFill } from "react-icons/ri";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";

SyntaxHighlighter.registerLanguage("javascript", js);

export default function Promiseallimpletation() {
  const codeString = `function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const results = new Array(iterable.length);
    let unresolved = iterable.length;

    if (unresolved === 0) {
      resolve(results);
      return;
    }

    iterable.forEach(async (item, index) => {
      try {
        const value = await item;
        results[index] = value;
        unresolved -= 1;

        if (unresolved === 0) {
          resolve(results);
        }
      } catch (err) {
        reject(err);
      }
    });
  });
}
  // ******************************************
const p1 = Promise.resolve(3);
  const p2 = Promise.resolve(42);
  const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "foo");
  });

  promiseAll([p1, p2, p3])
    .then((values) => {
      console.log(values); // [3, 42, 'foo']
    })
    .catch((error) => {
      console.error(error);
    });`;

  const problemSting = `// Resolved example.
const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 100);
});

await promiseAll([p0, p1, p2]); // [3, 42, 'foo']

// Rejection example.
const p0 = Promise.resolve(30);
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('An error occurred!');
  }, 100);
});

try {
  await promiseAll([p0, p1]);
} catch (err) {
  console.log(err); // 'An error occurred!'
}
`;

  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^solution^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^6
  function promiseAll(iterable) {
    return new Promise((resolve, reject) => {
      const results = new Array(iterable.length);
      let unresolved = iterable.length;

      if (unresolved === 0) {
        resolve(results);
        return;
      }

      iterable.forEach(async (item, index) => {
        try {
          const value = await item;
          results[index] = value;
          unresolved -= 1;

          if (unresolved === 0) {
            resolve(results);
          }
        } catch (err) {
          reject(err);
        }
      });
    });
  }
  const p1 = Promise.resolve(3);
  const p2 = Promise.resolve(42);
  const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 10000, "foo");
  });

  promiseAll([p1, p2, p3])
    .then((values) => {
      console.log(values); // [3, 42, 'foo']
    })
    .catch((error) => {
      console.error(error);
    });
  // **************************************end solution***************************************************

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[600px] mt-8">
        <div className="flex flex-col mt-8 gap-5  p-4 relative text-white  bg-[#29292961] rounded-lg border-gray-400 border border-opacity-20">
          <div className="flex gap-3 justify-start items-center"></div>
          <p>
            Promise.all() is frequently used when there are multiple concurrent
            API requests and <br /> we want to wait for all of them to have
            completed
            <br />
            to continue with code execution, usually because we depend on data
            from both responses. <br />
            Let's implement our own version of Promise.all(), a promiseAll
            function, <br /> with the difference being the function takes in an
            array instead of an iterable. <br /> Be sure to read the description
            carefully and implement accordingly!
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
