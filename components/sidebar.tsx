"use client"
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { FcHome, FcAbout, FcContacts, FcPrevious } from "react-icons/fc";
import { RiArrowRightDoubleLine, RiArrowLeftDoubleFill } from "react-icons/ri";
// Define a type for your icon names
type IconName = 'FcHome' | 'FcAbout' | 'FcContacts'; // Extend this list with other icon names you use

// Define the type for menu items
interface MenuItem {
    label: string;
    url: string;
    icon: IconName;
}

// Map icon names to components
const iconMapping: Record<IconName, React.ComponentType> = {
    FcHome,
    FcAbout,
    FcContacts,
};

// Define your menu items with the correct type
const menuItems: MenuItem[] = [
    {
        label: 'Home',
        url: '/',
        icon: 'FcHome',
    },
    {
        label: 'Css Animation',
        url: '/cssanimation',
        icon: 'FcAbout',
    },
    {
        label: 'Js Problems',
        url: '/jsproblems',
        icon: 'FcContacts',
    },
    {
        label: 'Debounce Examples',
        url: '/debounce-examples',
        icon: 'FcContacts',
    },
    {
        label: 'Throttle Examples',
        url: '/throttle-examples',
        icon: 'FcContacts',
    },
];
export default function Sidebar() {

    const pathname = usePathname()
    const activeState = 'text-[#eeedf2] bg-[#ffffff0d] shadow-[inset_0_0_0_0.7px_#ffffff1a]';
    const hoverState = 'hover:text-[#fffffff2] hover:bg-[#ffffff0a] hover:shadow-[inset_0_0_0_0.7px_#ffffff1a]';
    const [isExpanded, setIsExpanded] = useState(true);

    // Toggle sidebar width
    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <>
            <div id="sidebar" className={`navbar ${isExpanded ? 'w-64' : 'w-14'
                } h-full bg-[#292929]  min-h-[95vh] max-h-[95vh] sticky transition-all duration-300 ease-in-out  top-5 text-[#eeedf2] flex flex-col rounded-xl overflow-hidden pt-0`} style={{ boxShadow: 'inset 0 0 0 0.4px #ffffff4d' }}>
                <div className="nav__header">
                    <div className="navbar__top cursor-pointer justify-between items-center w-full max-h-12 px-4 py-3 flex">
                        <Link href="/" className={`flex-shrink-0  transition-all duration-300 ease-in-out delay-200 overflow-hidden ${isExpanded ? '' : 'hidden'}`}>FrontendFrolics</Link>
                        <button className="rounded-md flex justify-center items-center w-[1.4rem] h-[1.4rem] relative" onClick={toggleSidebar}>{isExpanded ? <RiArrowLeftDoubleFill className="text-white" /> : <RiArrowRightDoubleLine className="text-white" />}</button>
                    </div>
                    <hr className="border-dashed border-[#fff3]" />
                </div>
                <div className="nav__links px-2 py-2 pb-14">
                    <div className="w-dyn-list">
                        {menuItems.map((item, index) => {
                            const IconComponent = iconMapping[item.icon];
                            return (
                                <div className="w-dyn-items" key={index}>
                                    <div className="w-dyn-item">
                                        <Link href={`${item.url}`} className={`text-[#eeedf2e6]  rounded-md justify-start items-center mb-[0.2em] pt-2 pb-2 pl-[0.6rem] max-w-full transition-bg duration-200 flex relative ${hoverState} ${pathname === item.url ? activeState : ''}`}>
                                            <div className="rounded-md mr-3 overflow-hidden shadow-md z-10  flex justify-center items-center w-[1.4rem] h-[1.4rem] relative">{IconComponent && <IconComponent />}</div>
                                            <div className={`duration-600 ease-in-out transition-opacity delay-300 ${isExpanded ? "opacity-1" : "opacity-0"}`}>{isExpanded && item.label}</div>

                                        </Link>

                                    </div>


                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}