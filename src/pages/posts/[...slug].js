import { useRouter } from 'next/router'

function Post() {
    const router = useRouter();
    const { slug } = router.query;
    console.log(router);
    return(
        <div>
            <h1>Offer</h1>

        </div>
    )
}

export default Post;