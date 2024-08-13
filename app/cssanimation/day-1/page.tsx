"use client"

import { useEffect } from 'react';
import './style.css';
import Image from 'next/image';

export default function Day1() {
    useEffect(() => {
        // Check if the script is already appended
        if (!document.querySelector(`script[src="/day1-script.js"]`)) {
            const script = document.createElement('script');
            script.src = '/day1-script.js'; // Path relative to the public folder
            script.async = true;
            document.body.appendChild(script);
        }

        return () => {
            // Optionally, remove the script when the component is unmounted
            const script = document.querySelector(`script[src="/day1-script.js"]`);
            if (script) {
                document.body.removeChild(script);
            }
        };
    }, []);
    return (
        <>

            <div className="wrapper mt-8">
                <div className='phon-svg'>
                    <svg viewBox="0 0 300 610" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect
                            className="svg-lines"
                            x="4.21387"
                            y="1.48523"
                            width="292.735"
                            height="607.139"
                            rx="50"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                        <rect
                            className="svg-lines"
                            x="17.2517"
                            y="14.5638"
                            width="268.645"
                            height="580.938"
                            rx="37"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                        <rect
                            className="svg-lines"
                            x="102.131"
                            y="587.333"
                            width="95.6887"
                            height="2.45312"
                            rx="1.22656"
                            stroke="currentColor"
                        />
                        <path
                            className="svg-lines"
                            d="M298.949 193.635L298.949 266.189"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <path
                            className="svg-lines"
                            d="M2.32666 162.512L2.32666 206.936"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <path
                            className="svg-lines"
                            d="M1.97119 118.943L1.97119 140.265"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                        />
                        <path
                            className="svg-lines"
                            d="M2.32666 221.155L2.32666 265.579"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                    <Image src="/iphone.png" alt="" width={500} height={300} />
                </div>
            </div>
        </>
    )
}