//* impor core
import type { Metadata } from "next";

// * import css
import "./globals.css";

// * import fonts
import { Inter, Noto_Sans, Lobster, Sora } from "next/font/google";

// * components
import Nav from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

const noto = Noto_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-noto",
});

const lobster = Lobster({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-lobster",
});

export const metadata: Metadata = {
    title: "Famsec",
    description: "",
};

const sora = Sora({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-sora",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className="h-full" lang="en">
            <body className={`flex flex-col min-h-full ${sora.className}`}>
                <Nav />
                {children}
                <Footer />
            </body>
        </html>
    );
}
