import Link from "next/link";
import Image from "next/image";
import Heading from "./heading";
import Button from "./button";

const content = {
    text: {
        heading: "Welcome to FamSec",
        subHeading: "Protecting Families, Securing Futures",
        description:
            "We understand that protecting your loved ones is of utmost importance. That's why we are dedicated to providing comprehensive solutions tailored to your family's unique needs. Our expert team is committed to creating a solid foundation of security and peace of mind for you and your loved ones.",
    },
    images: {
        img1: "/hero/img1.webp",
        img2: "/hero/img2.webp",
        img3: "/hero/img3.webp",
        img4: "/hero/img4.webp",
        img5: "/hero/img5.webp",
    },
};

export default function Hero() {
    return (
        <header>
            <section className="py-20">
                <div className="container px-4 mx-auto">
                    <div className="lg:flex justify-between items-center">
                        <div className="lg:w-5/12 mb-10 lg:mb-0">
                            {content.text.heading && (
                                <Heading text={content.text.heading} />
                            )}
                            {content.text.subHeading && (
                                <h1 className="text-4xl lg:text-5xl font-bold text-heading mb-7">
                                    {content.text.subHeading}
                                </h1>
                            )}
                            {content.text.description && (
                                <p className="leading-relaxed text-body mb-10">
                                    {content.text.description}
                                </p>
                            )}
                            <div className="flex space-x-3">
                                <Button variant="primary" text="Get Started" />
                                <Button
                                    variant="secondary"
                                    text="How it works ?"
                                />
                            </div>
                        </div>
                        <div className="lg:w-6/12 space-y-2">
                            <div className="flex space-x-2 items-stretch">
                                <div className="w-8/12">
                                    {content.images.img1 && (
                                        <Image
                                            src={content.images.img1}
                                            alt="img1"
                                            width={397}
                                            height={406}
                                            className="object-cover h-full w-full rounded-2xl "
                                        />
                                    )}
                                </div>
                                <div className="w-4/12 self-end space-y-2">
                                    <div className="grid grid-cols-2 gap-2">
                                        {content.images.img2 && (
                                            <Image
                                                src={content.images.img2}
                                                alt="img2"
                                                width={437}
                                                height={437}
                                                className="object-cover h-full w-full rounded-2xl"
                                            />
                                        )}
                                        <div className="bg-yellowLight rounded-2xl rounded-tr-[200px] "></div>
                                    </div>
                                    {content.images.img3 && (
                                        <Image
                                            src={content.images.img3}
                                            alt="img3"
                                            width={374}
                                            height={392}
                                            className="object-cover h-full w-full rounded-2xl"
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <div className="w-4/12">
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="bg-greenLight rounded-2xl rounded-bl-[200px]"></div>
                                        {content.images.img4 && (
                                            <Image
                                                src={content.images.img4}
                                                alt="img4"
                                                width={394}
                                                height={394}
                                                className="object-cover h-full w-full rounded-2xl"
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="w-5/12">
                                    {content.images.img5 && (
                                        <Image
                                            src={content.images.img5}
                                            alt="img5"
                                            width={397}
                                            height={406}
                                            className="object-cover h-full w-full rounded-2xl"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
}
