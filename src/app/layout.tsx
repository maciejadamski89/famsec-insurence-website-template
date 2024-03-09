//* impor core
import type { Metadata } from "next";

// * import css
import "./globals.css";

// * import fonts
import { Sora } from "next/font/google";

// * components
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Fill metadata if you want to use as webpage.Here For showcase is not necessary.
export const metadata: Metadata = {
    title: "Famsec",
    description: "Insurance for your family",
};

// * font setup
const sora = Sora({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-sora",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className="h-full" lang="en">
            <body className={`flex flex-col min-h-full ${sora.className}`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
