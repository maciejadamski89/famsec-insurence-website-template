import Image from "next/image";
import NextLink from "next/link";
import { ArrowRightIcon } from "./arrow-right-icon";
import Link from "./link";

const content = {
    about: {
        logo: "",
        desc: "From heartwarming testimonials to glowing reviews, these voices reflect the trust and confidence our customers place in us. Let their words speak volumes about the extraordinary experiences that await you with",
        cta: {
            href: "#",
            label: "Learn More",
        },
    },
    links: [
        {
            heading: "Company",
            links: [
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
                    label: "Careers",
                },
                {
                    href: "#",
                    label: "Contact",
                },
            ],
        },
        {
            heading: "Resources",
            links: [
                {
                    href: "#",
                    label: "Blog",
                },
                {
                    href: "#",
                    label: "Suppor",
                },
                {
                    href: "#",
                    label: "Terms & Conditions",
                },
                {
                    href: "#",
                    label: "Privacy policy",
                },
            ],
        },
    ],
    contact: {
        heading: "Contact",
        desc: "We are here to answer any questions you may have about our service. Reach out to us and we'll respond as soon as we can.",
        address: {
            email: "famsec@gmail.com",
            phone: "(555) 123-4567",
            street: "23 Main Street, Cityville, State, Zip Code",
        },
    },
    copyright:
        "Copyright 2023. Designed with 💚 by dataglit.ch. All rights reserved.",
};

function AtSymbolIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-primary"
        >
            <path
                strokeLinecap="round"
                d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
            />
        </svg>
    );
}

function PhoneIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-primary"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
        </svg>
    );
}

function MapPinIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-primary"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
        </svg>
    );
}

export default function Footer() {
    return (
        <footer role="contentinfo" className="pt-20 pb-10 bg-white">
            <div className="container px-4 mx-auto">
                <div className="block lg:flex gap-20 mb-10">
                    <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
                        <NextLink
                            href="/"
                            className="mg-4 inline-block text-primary text-2xl font-bold mb-4"
                        >
                            Famsec
                        </NextLink>
                        <p className="text-body leadinig-relaxed">
                            {content.about.desc}
                        </p>
                    </div>
                    <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
                        <div className="grid grid-cols-2 gap-10">
                            {content.links.map((link, idx) => (
                                <div key={idx}>
                                    <h3 className="font-semibold text-heading mb-5">
                                        {link.heading}
                                    </h3>
                                    <ul className="p-0 m-0">
                                        {link.links.map((item, idx) => (
                                            <li key={idx} className="text-body">
                                                <Link
                                                    href={item.href}
                                                    label={item.label}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12">
                        <h3 className="font-semibold text-heading mb-5">
                            {content.contact.heading}
                        </h3>
                        <p className="text-body leading-relaxed mb-7">
                            {content.about.desc}
                        </p>
                        <ul>
                            <li className="flex items-start space-x-3 mb-5">
                                <AtSymbolIcon />
                                <div>
                                    <span className="text-body font-medium">
                                        {content.contact.address.email}
                                    </span>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3 mb-5">
                                <PhoneIcon />
                                <div>
                                    <span className="text-body font-medium">
                                        {content.contact.address.phone}
                                    </span>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3 mb-5">
                                <MapPinIcon />
                                <div>
                                    <span className="text-body font-medium">
                                        {content.contact.address.street}
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center pt-10 border-t border-gray-200 text-body">
                    <p>{content.copyright}</p>
                </div>
            </div>
        </footer>
    );
}
