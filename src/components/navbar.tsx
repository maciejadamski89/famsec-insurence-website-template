"use client";

// * import core
import Link from "next/link";
import { useEffect, useState } from "react";

// * import icon
import { ArrowRightIcon } from "./shared/arrow-right-icon";

const navItems = [
    {
        href: "#",
        label: "Home",
    },
    {
        href: "#",
        label: "How we work",
    },
    {
        href: "#",
        label: "Our mission",
    },
    {
        href: "#",
        label: "About",
    },
    {
        href: "#",
        label: "Contact",
    },
];

const BurgerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

const XMarkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export default function Navbar() {
    // * states
    const [navigationOpen, setNavigationOpen] = useState(false);

    const [dimensions, setDimensions] = useState({
        height: typeof window !== "undefined" ? window.innerHeight : 0,
        width: typeof window !== "undefined" ? window.innerWidth : 0,
    });

    // * handlers
    const mobileMenuHandler = () => {
        setNavigationOpen(!navigationOpen);
    };

    const handleResize = () => {
        if (typeof window !== "undefined") {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        }
    };

    // * effects
    useEffect(() => {
        if (dimensions.width > 1024 && navigationOpen) setNavigationOpen(false);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [dimensions.width, navigationOpen]);

    // * render
    return (
        <>
            <nav className="py-7">
                <div className="container px-4 mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="text-primary font-bold">FamSec</div>
                        <div className="hidden lg:block text-center">
                            <ul className="flex space-x-7">
                                {navItems.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            href={item.href}
                                            className="group flex items-center py-2 duration-300 transition-all ease-in-out hover:text-primary"
                                        >
                                            <span className="">{item.label}</span>
                                            <span className="left-0 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-2">
                                                <ArrowRightIcon />
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <Link href="#" className="px-4 py-4 bg-primary text-white rounded-lg hidden lg:inline-block">
                                Get Started
                            </Link>
                            <button className="lg:hidden" onClick={mobileMenuHandler}>
                                <BurgerIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/*  Mobile menu */}
            {!!navigationOpen && (
                <div className="">
                    <div className="h-screen w-screen z-[999] top-0 fixed bg-black/50" onClick={mobileMenuHandler}></div>
                    <div className="bg-white w-[380px] top-0 right-0 z-[999] h-screen fixed animate-slide-in-right">
                        <div className="h-14 px-10 border-b flex items-center">
                            <button className="flex items-center space-x-1" onClick={mobileMenuHandler}>
                                <XMarkIcon />
                                <span>Close</span>
                            </button>
                        </div>
                        <div className="h-full py-3 px-10 pb-20 overflow-y-scroll scroll-smooth">
                            <ul className="block mb-7">
                                {navItems.map((item) => (
                                    <li key={item.label}>
                                        <Link href={item.href} className="flex items-center py-2">
                                            <span>{item.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
