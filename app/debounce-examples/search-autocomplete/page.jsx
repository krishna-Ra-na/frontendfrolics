"use client";

import { useCallback, useEffect, useState } from "react";
import "./style.css";
import { RiArrowDownWideFill } from "react-icons/ri";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";
import _ from "lodash";

SyntaxHighlighter.registerLanguage("javascript", js);

export default function Searchautocomplete() {
  const [searchquery, setSearchquery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const fetchSuggestions = useCallback(
    _.debounce(
      (searchTerm) => fetchSuggestionsFromAPI(searchTerm, setSuggestions),
      2500
    ),
    []
  );

  useEffect(() => {
    fetchSuggestions(searchquery);
  }, [searchquery, fetchSuggestions]);

  const fetchSuggestionsFromAPI = async (searchTerm, setSuggestions) => {
    if (searchTerm.length > 0) {
      try {
        const response = await fetch(
          // `https://jsonplaceholder.typicode.com/users?name_like=${searchTerm}`
          `https://www.omdbapi.com/?apikey=ef5a070&s=${searchTerm}&type=movie`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch suggestions");
        }
        const data = await response.json();
        const { Search } = data;
        setSuggestions(Search);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }
  };

  const codeString = `const [searchquery, setSearchquery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const fetchSuggestions = useCallback(
    _.debounce(
      (searchTerm) => fetchSuggestionsFromAPI(searchTerm, setSuggestions),
      2500
    ),
    []
  );

  useEffect(() => {
    fetchSuggestions(searchquery);
  }, [searchquery, fetchSuggestions]);

  const fetchSuggestionsFromAPI = async (searchTerm, setSuggestions) => {
    if (searchTerm.length > 0) {
      try {
        const response = await fetch(
          // \`https://jsonplaceholder.typicode.com/users?name_like=\${searchTerm}\`
          \`https://www.omdbapi.com/?apikey=ef5a070&s=\${searchTerm}&type=movie\`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch suggestions");
        }
        const data = await response.json();
        const { Search } = data;
        setSuggestions(Search);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }
  };`;
  return (
    <>
      <div className="flex flex-col  mt-8">
        <div className="flex flex-col w-full mt-8   p-4 relative   bg-[#29292961] rounded-lg border-gray-400 border border-opacity-20">
          <input
            type="text"
            placeholder="Search Movies....."
            className="text-black p-2"
            value={searchquery}
            onChange={(e) => setSearchquery(e.target.value)}
          />

          <div className="grid gap-3 grid-cols-4 mt-6">
            {suggestions.map((movie, index) => {
              return (
                <div
                  key={index}
                  className="p-3 w-[200] bg-[#454545a6] rounded-lg"
                >
                  <img
                    src={movie.Poster}
                    alt="movie poster"
                    width={400}
                    height={400}
                  />
                  <div className="mov_details  flex-col justify-center mt-3 items-center text-center">
                    <li className="list-none p-2 bg-[#ffffff21] border border-[#f2f2f23b] rounded-md">
                      {movie.Title}
                    </li>
                    <span className="mt-4 inline-block text-sm">
                      Year: {movie.Year}
                    </span>
                  </div>
                </div>
              );
            })}
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
