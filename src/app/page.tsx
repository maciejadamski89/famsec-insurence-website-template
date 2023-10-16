import Hero from "@/components/hero";
import RecentBlog from "@/components/recent-blog";
import Services from "@/components/services";
import Solutions from "@/components/solutions";
import Stats from "@/components/stats";
import Testimonial from "@/components/testimonial";

export default function Home() {
    return (
        <>
            <Hero />
            <Stats />
            <Services />
            <Solutions />
            <Testimonial />
            <RecentBlog />
        </>
    );
}
