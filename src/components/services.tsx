import Heading from "./heading";

const content = {
    heading: {
        title: "Our Services",
        subTitle: "Our Awesome Services",
        desc: "We understand that protecting your loved ones is of utmost importance. That's why we are dedicated to providing comprehensive solutions tailored to your family's unique needs.",
    },
    services: [
        {
            title: "Lorem Ipsum Dolor Sit Amet",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel bibendum.",
        },
        {
            title: "Lorem Ipsum Dolor Sit Amet",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel bibendum.",
        },
        {
            title: "Lorem Ipsum Dolor Sit Amet",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel bibendum.",
        },
        {
            title: "Lorem Ipsum Dolor Sit Amet",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel bibendum.",
        },
        {
            title: "Lorem Ipsum Dolor Sit Amet",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel bibendum.",
        },
        {
            title: "Lorem Ipsum Dolor Sit Amet",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel bibendum.",
        },
    ],
};

function SparkleIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
            />
        </svg>
    );
}

export default function Services() {
    return (
        <div className="py-20 bg-light">
            <div className="container px-4 mx-auto">
                <div className="max-w-xl mx-auto text-center mb-20">
                    {content.heading.subTitle && (
                        <Heading text={content.heading.subTitle} />
                    )}
                    {content.heading.title && (
                        <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5">
                            {content.heading.title}
                        </h2>
                    )}
                    {content.heading.desc && (
                        <p className="text-body leading-relaxed">
                            {content.heading.desc}
                        </p>
                    )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-14 ">
                    {content.services.map((service, idx) => (
                        <div key={idx} className="flex space-x-10">
                            <div className="w-14 shrink-0">
                                <span className="inline-flex items-center justify-center p-2 w-[70px] h-[70px] rounded-lg bg-white shadow-2xl">
                                    <SparkleIcon />
                                </span>
                            </div>
                            <div>
                                {service.title && (
                                    <h3 className="text-heading text-md font-bold mb-3">
                                        {service.title}
                                    </h3>
                                )}
                                {service.desc && (
                                    <p className="text-body leading-relaxed">
                                        {service.desc}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
