import Link from "next/link";
import "./header.css";

const TheHeader = () => {
    return (
        <header className="header">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
        </header>
    );
};

export default TheHeader;
