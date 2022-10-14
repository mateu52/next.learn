import { useRouter } from 'next/router'

function OfferComments() {
    const router = useRouter();
    const { id, commentId } = router.query;
    console.log(router);
    return(
        <div>
            <h1>Offer</h1>
            <p>Offer id: {id}</p>
            <p>Offer comm: {commentId}</p>

        </div>
    )
}

export default OfferComments;