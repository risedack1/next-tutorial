import Link from "next/link";

const AboutLayout = ({ children }) => {
    return (
        <div>
            <h1>About us</h1>
            <ul>
                <li>
                    <Link href="/about/company">Company</Link>
                    <Link href="/about/team">Team</Link>
                </li>
            </ul>
            {children}
        </div>
    );
};

export default AboutLayout;
