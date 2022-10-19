import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({ offers }) {
  console.log({offers})
  return (
    <div className={styles.container}>
      <h2>Offers</h2>
      <main className={styles.main}>
        {offers && offers.map((offer) =>
          <div key={offer.id} className={styles.offersContainer}>
              <div className={styles.cover}>
                <img src={offer.cover} alt='' ></img>
              </div>
              <div>
              <h3>{offer.name}</h3>
              <p>{offer.street}, {offer.city}</p>
              </div>
          </div>
        )}
      </main>

    </div>
  )
}


export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/offers');
  const data = await response.json();

  return{
    props: {
      offers: data
    }
  }
}
