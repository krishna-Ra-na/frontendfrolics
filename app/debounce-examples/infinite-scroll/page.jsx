"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import "./style.css";
import { RiArrowDownWideFill } from "react-icons/ri";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";
import _ from "lodash";

SyntaxHighlighter.registerLanguage("javascript", js);

export default function Infinitescroll() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  useEffect(() => {
    loadMoreItems();

    const handleObserver = _.debounce((entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    }, 6000);

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    });

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, []);

  useEffect(() => {
    if (page > 1) {
      loadMoreItems();
    }
  }, [page]);
  const loadMoreItems = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
    );
    const newItems = await response.json();
    console.log("newitems", newItems);
    setItems((prevItems) => [...prevItems, ...newItems]);
  };
  const codeString = `const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  useEffect(() => {
    loadMoreItems();

    const handleObserver = _.debounce((entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    }, 6000);

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    });

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, []);

  useEffect(() => {
    if (page > 1) {
      loadMoreItems();
    }
  }, [page]);
  const loadMoreItems = async () => {
    const response = await fetch(
      \`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10\`
    );
    const newItems = await response.json();
    console.log("newitems", newItems);
    setItems((prevItems) => [...prevItems, ...newItems]);
  };`;
  return (
    <>
      <div className="flex  mt-8">
        <div className="flex flex-col w-full mt-8   p-4 relative   bg-[#29292961] rounded-lg border-gray-400 border border-opacity-20">
          <h2>Infinite Scroll</h2>
          <div className="flex flex-col items-center mt-5">
            {items.map((item) => (
              <div
                key={item.id}
                className="item p-3 bg-[#353535] my-3 text-center w-[80%]"
              >
                <h2>{item.title}</h2>
              </div>
            ))}
          </div>
          <div ref={loader} className="loading text-center p-5 text-[#888]">
            Loading more items...
          </div>

          {/* <SyntaxHighlighter language="javascript" style={docco}>
            {problemSting}
          </SyntaxHighlighter> */}
        </div>
        <div className="flex mt-8 flex-col gap-5  p-4 relative text-white  bg-[#29292961] rounded-lg border-gray-400 border border-opacity-20">
          <h2>Code</h2>
          <SyntaxHighlighter language="javascript" style={docco}>
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
}
