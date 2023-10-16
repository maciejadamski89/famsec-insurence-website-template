import NextLink from "next/link";
import { ArrowRightIcon } from "./arrow-right-icon";

type LinkProps = {
    href: string;
    label: string;
};

export default function Link({ href, label }: LinkProps) {
    return (
        <NextLink
            href={href}
            className="group flex items-center py-2 duration-300 transition-all ease-in-out hover:text-primary"
        >
            <span className="">{label}</span>
            <span className="left-0 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-2">
                <ArrowRightIcon />
            </span>
        </NextLink>
    );
}
