export const generateMetadata = async ({ params }) => {
    const posts = await getData(params.id);

    return {
        title: `${posts.title}`,
        description: `${posts.title}`,
    };
};

const getData = async (id) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
            next: {
                revalidate: 60,
            },
        }
    );

    return response.json();
};

const Post = async ({ params }) => {
    const post = await getData(params.id);

    return (
        <div>
            <h1>{post.title}</h1>
            <div>{post.body}</div>
        </div>
    );
};

export default Post;
