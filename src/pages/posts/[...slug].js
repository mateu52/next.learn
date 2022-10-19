import { useRouter } from 'next/router'
import Link from 'next/link';

function Post( {post}) {
    const router = useRouter();
    const { slug } = router.query;
    console.log({post});
    return(
        <div>
            <h1>Post: {post.id}</h1>
            <p>{post.body}</p>
        <div>
            <Link href="/posts">
                <a>Back to posts</a>
            </Link>
        </div>
        </div>
    )
}

export async function getServerSideProps({params}) {
    const postId = params.slug;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data = await response.json();
    
    return {
        props:{
            post: data
        }
    }
}

export default Post;