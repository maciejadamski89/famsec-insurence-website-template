import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "./shared/arrow-right-icon";

const content = {
    stats: [
        {
            number: "99.1%",
            label: "Child Safety Solutions",
        },
        {
            number: "3,912",
            label: "Happy costmers",
        },
        {
            number: "4,5",
            label: "Rating Reviews",
        },
    ],
    getStarted: {
        heading: "Get started with our service?",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        img: "/stats/illustration-woman.svg",
        cta: {
            href: "#",
            label: "Learn more",
        },
    },
};

export default function Stats() {
    return (
        <section className="py-20">
            <div className="container px-4 mx-auto">
                <div className="lg:flex justify-between items-center space-x-0">
                    <div className="w-full lg:w-7/12 mb-20 lg:mb-0">
                        <div className="grid grid-cols-3">
                            {content.stats.map((stat, idx) => (
                                <div key={idx} className="text-center lg:text-left">
                                    <strong className="text-primary text-4xl xl:text-[52px] font-bold block leading-tight">{stat.number}</strong>
                                    <span>{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-5/12">
                        <div className="bg-light py-10 px-7 lg:px-10 !pr-28 md:!pr-32 lg:!pr-40 rounded-lg relative">
                            {content.getStarted.img && (
                                <Image
                                    src={content.getStarted.img}
                                    alt="img"
                                    width={0}
                                    height={0}
                                    className="absolute right-0 lg:right-6 -top-14 w-24"
                                />
                            )}

                            {content.getStarted.heading && <h3 className="text-heading font-bold text-xl mb-3">{content.getStarted.heading}</h3>}

                            {content.getStarted.description && <h3 className="text-md mb-5">{content.getStarted.description}</h3>}

                            {content.getStarted.cta.label && (
                                <button>
                                    <Link
                                        href={content.getStarted.cta.href}
                                        className="group flex items-center py-2 duration-300 transition-all ease-in-out text-primary"
                                    >
                                        <span className="">{content.getStarted.cta.label}</span>
                                        <span className="left-0 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-2">
                                            <ArrowRightIcon />
                                        </span>
                                    </Link>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
