import { useRouter } from 'next/router'

function Offer() {
    const router = useRouter();
    const { id } = router.query;
    console.log(router);
    return(
        <div>
            <h1>Offer</h1>
            <p>Offer id: {id}</p>
        </div>
    )
}

export default Offer;