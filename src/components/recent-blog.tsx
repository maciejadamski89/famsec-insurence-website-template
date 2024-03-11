"use client";
import { useRef, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Heading from "./heading";
import Link from "next/link";
import Image from "next/image";

function ChevronLeftIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
    );
}

function ChevronRightIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
    );
}

const contnet = {
    heading: {
        title: "Our Writeups",
        subTitle: "Our Latest Articles",
        desc: "We are dedicated to staying at the forefront of our industry and keeping our valued community informed about the latest trends, insights, and innovations.",
    },
    posts: [
        {
            link: "#_",
            img: "/recent-blog/img1.webp",
            title: "10 Essential Tips for Protecting Your Home from Burglaries",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam hic neque, optio quo, cum iste at veritatis eveniet nostrum officiis earum dolor iure ad dolorem? Blanditiis velit in explicabo modi. ",
            author: {
                img: "/recent-blog/author1.webp",
                name: "John Doe",
                title: "CEO, Company Name",
            },
        },
        {
            link: "#_",
            img: "/recent-blog/img2.webp",
            title: "10 Essential Tips for Protecting Your Home from Burglaries",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam hic neque, optio quo, cum iste at veritatis eveniet nostrum officiis earum dolor iure ad dolorem? Blanditiis velit in explicabo modi. ",
            author: {
                img: "/recent-blog/author1.webp",
                name: "John Doe",
                title: "CEO, Company Name",
            },
        },
        {
            link: "#_",
            img: "/recent-blog/img3.webp",
            title: "10 Essential Tips for Protecting Your Home from Burglaries",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam hic neque, optio quo, cum iste at veritatis eveniet nostrum officiis earum dolor iure ad dolorem? Blanditiis velit in explicabo modi. ",
            author: {
                img: "/recent-blog/author1.webp",
                name: "John Doe",
                title: "CEO, Company Name",
            },
        },
        {
            link: "#_",
            img: "/recent-blog/img1.webp",
            title: "10 Essential Tips for Protecting Your Home from Burglaries",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam hic neque, optio quo, cum iste at veritatis eveniet nostrum officiis earum dolor iure ad dolorem? Blanditiis velit in explicabo modi. ",
            author: {
                img: "/recent-blog/author1.webp",
                name: "John Doe",
                title: "CEO, Company Name",
            },
        },
        {
            link: "#_",
            img: "/recent-blog/img2.webp",
            title: "10 Essential Tips for Protecting Your Home from Burglaries",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam hic neque, optio quo, cum iste at veritatis eveniet nostrum officiis earum dolor iure ad dolorem? Blanditiis velit in explicabo modi. ",
            author: {
                img: "/recent-blog/author1.webp",
                name: "John Doe",
                title: "CEO, Company Name",
            },
        },
        {
            link: "#_",
            img: "/recent-blog/img3.webp",
            title: "10 Essential Tips for Protecting Your Home from Burglaries",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam hic neque, optio quo, cum iste at veritatis eveniet nostrum officiis earum dolor iure ad dolorem? Blanditiis velit in explicabo modi. ",
            author: {
                img: "/recent-blog/author1.webp",
                name: "John Doe",
                title: "CEO, Company Name",
            },
        },
    ],
};
export default function RecentBlog() {
    const [slideIndex, setSlideIndex] = useState(0);
    const [isEnd, setIsEnd] = useState(null);
    const [isBeginning, setIsBeginning] = useState(null);
    const sliderRef = useRef<any>(null);

    useState(() => {
        setIsEnd(sliderRef.current?.swiper.isEnd);
        setIsBeginning(sliderRef.current?.swiper.isBeginning);
    });

    const prevHandler = () => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    };

    const nextHandler = () => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    };

    return (
        <section className="py-20 bg-light overflow-x-hidden">
            <div className="container px-4 mx-auto">
                <div className="lg:flex justify-between items-center mb-10">
                    <div className="lg:w-5/12 mb-10 lg:mb-0">
                        <Heading text={contnet.heading.title} />
                        <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5">{contnet.heading.subTitle}</h2>
                        <p className="text-body font-relaxed">{contnet.heading.desc}</p>
                    </div>
                    <div className="lg:w-5/12 text-left lg:text-right">
                        <div className="inline-flex ml-auto space-x-3">
                            <div
                                onClick={prevHandler}
                                className={`${
                                    isBeginning === true ? "opcaity-30 cursor-auto" : "opacity-100 hover:bg-primary"
                                } group transition-all duration-300 ease-in-out rounded-full w-12 h-12 bg-primary/10 inline-flex items-center justify-center p-2 cursor-pointer text-white`}
                            >
                                <ChevronLeftIcon />
                            </div>
                            <div
                                onClick={nextHandler}
                                className={`${
                                    isEnd === true ? "opcaity-30 cursor-auto" : "opacity-100 hover:bg-primary"
                                } group transition-all duration-300 ease-in-out rounded-full w-12 h-12 bg-primary/90 inline-flex items-center justify-center p-2 cursor-pointer text-white`}
                            >
                                <ChevronRightIcon />
                            </div>
                        </div>
                    </div>
                </div>
                <Swiper
                    spaceBetween={20}
                    breakpoints={{
                        640: {
                            width: 640,
                            slidesPerView: 1,
                        },
                        768: {
                            width: 768,
                            slidesPerView: 2,
                        },
                        968: {
                            width: 968,
                            slidesPerView: 2,
                        },
                    }}
                    ref={sliderRef}
                    speed={700}
                    onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex)}
                    className="z-50 py-32 mb-24 relative flex items-stretch !overflow-visible before:content-[''] before:z-50 before:py-32 before:right-full before:w-screen before:absolute before:-top-5 before:-bottom-5 before:bg-light"
                >
                    <div className="flex">
                        {contnet.posts.map((post, idx) => (
                            <SwiperSlide key={idx} className="overflow-visible h-full">
                                <div className="p-5 rounded-lg bg-white relative mt-10">
                                    <Link href={post.link} className="relative -mt-10 overflow-hidden rounded-lg flex flex-col gap-y-2">
                                        <Image src={post.img} width={782} height={467} alt="img1" />
                                        <h2 className="text-heading text-lg font-bold leading-7 my-4">{post.title}</h2>
                                        <p className="text-body font-relaxed relative mb-8">{post.desc}</p>
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-shrink-0">
                                                <Image
                                                    src={post.author.img}
                                                    width={50}
                                                    height={50}
                                                    alt="author"
                                                    className="rounded-full w-14 h-14 object-cover"
                                                />
                                            </div>
                                            <div className="leading-5">
                                                <span className="text-primary">{post.author.name}</span>
                                                <span className="block text-sm">{post.author.title}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
                <div className="mx-auto flex items-center justify-center"></div>
                <div className="mx-auto flex items-center justify-center aos-init aos-animate" data-aos="fade-up" data-aos-delay={400}>
                    <a
                        className=" duration-300 transition-all ease-in-out py-3 px-6 flex border rounded-full space-x-3 items-center hover:border-gray-400"
                        href="#_"
                    >
                        To view all posts
                        <strong className="text-primary pl-1 font-semibold">click here</strong>
                        <span className="text-gray-300">|</span>
                        <span className="bg-primary rounded-full w-8 h-8 flex items-center justify-center">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 24 24"
                                className="w-6 h-6 text-white"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}
