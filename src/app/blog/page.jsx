import Link from "next/link";

export const metadata = {
    title: "Blog",
    description: "Blog content goes here...",
};

const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: {
            revalidate: 60,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    return response.json();
};

const Blog = async () => {
    const posts = await getData();

    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Blog;
