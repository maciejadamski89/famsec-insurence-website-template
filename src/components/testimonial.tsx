import test from "node:test";
import Button from "./button";
import Heading from "./heading";
import Image from "next/image";

const content = {
    heading: {
        title: "Customer says ...",
        subTitle: "Hear What Our Customers Say",
        desc: "From heartwarming testimonials to glowing reviews, these voices reflect the trust and confidence our customers place in us. Let their words speak volumes about the extraordinary experiences that await you with",
        cta: "Read More",
    },
    testimonials: [
        {
            img: "/testimonials/img1.webp",
            name: "Jane Cooper",
            title: "Customer - Dallas, TX",
            testimony:
                "With Family Home Security, I feel at ease knowing my family and home are protected 24/7. The system is user-friendly, and their customer support is fantastic!",
        },
        {
            img: "/testimonials/img2.webp",
            name: "Alisa Richardson",
            title: "Customer - Miami, FL",
            testimony:
                "Installing Family Home Security was the best decision we made for our family's safety. Their quick response during emergencies gave us peace of mind.",
        },
        {
            img: "/testimonials/img3.webp",
            name: "Davon McKenny",
            title: "Customer - Seattle, WA",
            testimony:
                "After moving to a new neighborhood, I felt vulnerable. Thanks to Family Home Security, I can now sleep soundly, knowing our home is well-protected.",
        },
    ],
};

function ChatBubbleIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
        </svg>
    );
}

export default function Testimonial() {
    return (
        <section className="py-20 bg-light">
            <div className="container px-4 mx-auto">
                <div className="lg:flex justify-between items-center">
                    <div className="lg:w-4/12 lg:pr-24 mb-10 lg:mb-0">
                        <Heading text={content.heading.title} />
                        <h2 className="font-bold text-2xl lg:text-4xl mb-5">
                            {content.heading.subTitle}
                        </h2>
                        <p className="text-body font-relaxed mb-10">
                            {content.heading.desc}
                        </p>
                        <Button text={content.heading.cta} variant="primary" />
                    </div>
                    <div className="lg:w-8/12">
                        <div className="md:flex w-full space-x-0 md:space-x-6 items-end">
                            <div className="md:w-6/12 mb-6 md:mb-0">
                                {content.testimonials.map(
                                    (testimonial, idx) => {
                                        if (idx === 2) return null;
                                        return (
                                            <div
                                                key={idx}
                                                className={`bg-white p-7 rounded-lg w-full ${
                                                    idx === 1 ? "" : "mb-6"
                                                }`}
                                            >
                                                <div className="flex space-x-4 items-center mb-4">
                                                    <div className="relative">
                                                        <Image
                                                            src={
                                                                testimonial.img
                                                            }
                                                            alt={
                                                                testimonial.name
                                                            }
                                                            width={100}
                                                            height={100}
                                                            className="object-cover h-14 w-14 rounded-full"
                                                        />
                                                        <span className="absolute -top-2 -right-2 w-7 h-7 bg-primary rounded-full flex items-center justify-center text-white">
                                                            <ChatBubbleIcon />
                                                        </span>
                                                    </div>
                                                    <div className="leading-3">
                                                        <strong className="block text-heading text-lg">
                                                            {testimonial.name}
                                                        </strong>
                                                        <span className="text-sm">
                                                            {testimonial.title}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="text-heading leading-relaxed">
                                                        &quot;
                                                        {testimonial.testimony}
                                                        &quot;
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                            <div className="md:w-6/12">
                                <div>
                                    <div
                                        className="w-16 h-16 hidden md:block bg-greenLight rounded-full mb-6 aos-init aos-animate"
                                        data-aos="fade-up"
                                        data-aos-delay={300}
                                    />
                                    <div
                                        className="bg-white p-7 rounded-lg w-full mb-6 aos-init aos-animate"
                                        data-aos="fade-up"
                                        data-aos-delay={400}
                                    >
                                        <div className="flex space-x-4 items-center mb-4">
                                            <div className="relative">
                                                <Image
                                                    src={
                                                        content.testimonials[2]
                                                            .img
                                                    }
                                                    alt="Image"
                                                    width={100}
                                                    height={100}
                                                    className="object-cover h-14 w-14 rounded-full"
                                                />
                                                <span className="text-white absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                                                    <ChatBubbleIcon />
                                                </span>
                                            </div>
                                            <div className="leading-3">
                                                <strong className="block text-heading text-lg">
                                                    Davon McKenny
                                                </strong>
                                                <span className="text-sm">
                                                    Customer - Seattle, WA
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-heading leading-relaxed">
                                                &quot;
                                                {
                                                    content.testimonials[2]
                                                        .testimony
                                                }
                                                &quot;
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-purpleLight hidden md:inline-block w-10 h-10 lg:w-24 lg:h-24 rounded-2xl rounded-bl-[200px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
