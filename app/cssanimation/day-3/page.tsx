"use client"

import { useEffect, useLayoutEffect } from 'react';
import './style.css';
import { RiArrowDownWideFill } from "react-icons/ri";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';

SyntaxHighlighter.registerLanguage('javascript', js);


export default function Day3() {

    const codeString = `const headers = document.querySelectorAll(".accordion-header");
headers.forEach((header) => {
    header.addEventListener("click", () => {
        if (header.classList.contains("is-open")) {
            header.classList.remove("is-open");
        } else {
            const headersWithIsOpen = document.querySelectorAll(".is-open");
            headersWithIsOpen.forEach((headerWithIsOpen) => {
                headerWithIsOpen.classList.remove("is-open");
            });
            header.classList.add("is-open");
        }
    });
});`;


    // useLayoutEffect(() => {
    //     // Check if the script is already appended
    //     if (!document.querySelector(`script[src="/day3-script.js"]`)) {
    //         const script = document.createElement('script');
    //         script.src = '/day3-script.js'; // Path relative to the public folder
    //         script.async = true;
    //         document.body.appendChild(script);
    //     }

    //     return () => {
    //         // Optionally, remove the script when the component is unmounted
    //         const script = document.querySelector(`script[src="/day3-script.js"]`);
    //         if (script) {
    //             document.body.removeChild(script);
    //         }
    //     };
    // }, []);

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-[600px] mt-8">

                <div className="flex -mt-8 relative bg-[#29292961] rounded-lg border-gray-400 border border-opacity-20 w-[376px] ">
                    <div className="accordion w-full">
                        <div className="accordion-item">
                            <button className="accordion-header ">Section 1 <RiArrowDownWideFill /></button>
                            <div className="accordion-content">
                                <p>This is the content of Section 1.</p>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <button className="accordion-header">Section 2 <RiArrowDownWideFill /></button>
                            <div className="accordion-content">
                                <p>This is the content of Section 2.</p>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <button className="accordion-header">Section 3 <RiArrowDownWideFill /></button>
                            <div className="accordion-content">
                                <p>This is the content of Section 3.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex mt-8  p-4 relative text-white  bg-[#29292961] rounded-lg border-gray-400 border border-opacity-20">
                    <SyntaxHighlighter language="javascript" style={docco}>
                        {codeString}
                    </SyntaxHighlighter>
                </div>

            </div>
        </>
    )
}