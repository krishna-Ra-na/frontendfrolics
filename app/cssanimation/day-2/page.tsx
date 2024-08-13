"use client"

import './style.css';


export default function Day2() {

    return (
        <>

            <div className="flex items-center justify-center min-h-[600px] mt-8">
                <div className="flex -mt-8 items-end relative bg-[#29292961] p-5 rounded-lg border-gray-400 border border-opacity-20 w-[376px] h-[250px]">
                    <div className='absolute top-0 left-0 flex w-full items-center justify-center'>
                        <div className='absolute bg-black border-dashed border border-gray-500 c justify-center items-center inline-block p-2 text-xs rounded-md shadow-sm overflow-hidden'>svg animation <div className="shine"></div></div>
                        <svg viewBox="0 0 288 256" fill="none" aria-hidden="true" className="w-[200px]">
                            <path
                                d="M4 0v112c0 8.837 7.163 16 16 16h248c8.837 0 16 7.163 16 16v112"
                                stroke="currentColor"
                            ></path>
                            <path
                                d="M4 0v112c0 8.837 7.163 16 16 16h248c8.837 0 16 7.163 16 16v112"
                                stroke="url(#line-gradient)"
                            ></path>
                            <defs>
                                <linearGradient id="line-gradient" x1="0%" x2="0%" y1="0%" y2="0%">
                                    <stop stop-color="white" stop-opacity="0"></stop>
                                    <stop stop-color="black" offset="60%"></stop>
                                    <stop stop-color="black" offset="100%" stop-opacity="0"></stop>

                                    <animate
                                        attributeName="y1"
                                        values="0%; 120%"
                                        dur="2s"
                                        repeatCount="indefinite"
                                    />
                                    <animate
                                        attributeName="y2"
                                        values="-20%; 100%"
                                        dur="2s"
                                        repeatCount="indefinite"
                                    />

                                    <animate
                                        attributeName="x1"
                                        values="-20%; 120%"
                                        dur="2s"
                                        repeatCount="indefinite"
                                    />
                                    <animate
                                        attributeName="x2"
                                        values="-40%; 100%"
                                        dur="2s"
                                        repeatCount="indefinite"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className='bg-slate-800 w-full p-5 rounded-lg z-40 absolute bottom-[-20%] right-[-15%] '>
                        <h2>Day 2</h2>
                        <h3>Mastering CSS Animation</h3>
                        <p className='text-xs mt-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam exercitationem excepturi nobis iusto velit libero dolorum cum minima laborum dolore.</p>
                    </div>
                </div>
            </div>
        </>
    )
}