import Image from "next/image";
import Heading from "./heading";
import Button from "./shared/button";

const content = {
    text: {
        subTitle: "Our Solutions",
        title: "From safeguarding your home with state-of-the-art alarm systems",
        desc: "From safeguarding your home with state-of-the-art alarm systems to offering reliable insurance options, we ensure that your family is protected in every aspect of life. With our Family Security Plan, you can rest easy knowing that you've taken the necessary steps to secure a brighter future for your family. Trust us to be your partner in safeguarding what matters most – your family's well-being.",
    },
    features: ["Home Fire Safety", "Emergency Preparedness", "Cybersecurity Solutions", "Identity Theft Protection"],
    cta: {
        primary: {
            href: "#",
            text: "Get Started",
        },
        secondary: {
            href: "#",
            text: "How it works ?",
        },
    },
    images: {
        img1: "/solutions/img1.webp",
        img2: "/solutions/img2.webp",
        img3: "/solutions/img3.webp",
    },
    experience: {
        year: "25+",
        label: "Years of Experience",
    },
};

function CheckIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
    );
}

export default function Solutions() {
    return (
        <section className="py-32 bg-light overflow-x-hidden">
            <div className="container px-4 mx-auto">
                <div className="lg:flex space-x-2 justify-between">
                    <div className="lg:w-6/12 relative mb-10 lg:mb-0 z-10 before:content-[''] before:absolute before:w-screen before:right-1/2 before:rounded-tr-[200px] before:z-[-1] before:rounded-br-3xl before:py-28 before:-top-20 before:bg-white before:-bottom-20">
                        <div className="flex gap-2">
                            <div className="flex flex-col space-y-2">
                                <div>
                                    <Image
                                        src={content.images.img1}
                                        alt="img1"
                                        width={626}
                                        height={640}
                                        className="object-cover h-full w-full rounded-lg"
                                    />
                                </div>

                                <div className="flex justify-end gap-2">
                                    <div className="w-4/12 flex">
                                        <div className="ml-auto">
                                            <div className="bg-greenLight w-10 h-10 lg:w-24 lg:h-24 rounded-2xl rounded-bl-[200px] aos-init aos-animate" />
                                        </div>
                                    </div>
                                    <div className="w-6/12">
                                        <Image
                                            src={content.images.img2}
                                            alt="img2"
                                            width={626}
                                            height={640}
                                            className="object-cover h-full w-full rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-auto">
                                <div className="flex flex-col gap-2">
                                    <div>
                                        <div className="bg-purpleLight w-10 h-10 lg:w-20 lg:h-20 rounded-2xl rounded-tr-[200px] aos-init aos-animate"></div>
                                    </div>
                                    <div>
                                        <Image
                                            src={content.images.img3}
                                            alt="img3"
                                            width={626}
                                            height={640}
                                            className="object-cover h-full w-full rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <div className="p-4 lg:p-10 shadow-2xl rounded-lg bg-white w-full leading-5">
                                            <strong className="block font-bold text-primary text-xl lg:text-5xl">{content.experience.year}</strong>
                                            <span>{content.experience.label}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-5/12 relative z-10">
                        <Heading text={content.text.subTitle} />
                        <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5">{content.text.title}</h2>
                        <p className="text-body text-relaxed mb-10">{content.text.desc}</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4 md:gap-5 mb-10">
                            {content.features.map((feature, idx) => (
                                <li key={idx} className="flex flex-grow items-center space-x-5">
                                    <span className="items-center w-7 h-7 rounded-full bg-primary flex items-cetner justify-center text-white">
                                        <CheckIcon />
                                    </span>
                                    <span className="text-body">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-3 aos-init aos-animate">
                            <Button text="Get Started" variant="primary" />
                            <Button text="Learn more" variant="secondary" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
