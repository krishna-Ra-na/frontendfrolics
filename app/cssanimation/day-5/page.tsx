// @ts-nocheck

"use client"

import { useEffect } from 'react';
import './style.css';
import { RiArrowDownWideFill } from "react-icons/ri";



export default function Day5() {
    useEffect(() => {
        // Check if the script is already appended
        if (!document.querySelector(`script[src="/day5-script.js"]`)) {
            const script = document.createElement('script');
            script.src = '/day5-script.js'; // Path relative to the public folder
            script.async = true;
            document.body.appendChild(script);
        }

        return () => {
            // Optionally, remove the script when the component is unmounted
            const script = document.querySelector(`script[src="/day5-script.js"]`);
            if (script) {
                document.body.removeChild(script);
            }
        };
    }, []);
    return (
        <>
            <div className="flex flex-col  justify-center min-h-[600px] mt-8">
                <div className="flex h-[500px] items-center justify-center -mt-8 relative bg-[#29292961] rounded-lg border-gray-400 border border-opacity-20 ">
                    <div className="wrapper text-center">
                        <h1 className="text name heading"></h1>
                        <p className="text name subheading"></p>
                    </div>
                </div>
            </div>
        </>
    )
}