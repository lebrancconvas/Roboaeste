import type { NextPage } from 'next';
import Head from 'next/head'; 
import styles from '../styles/Home.module.css'; 

const Home: NextPage = () => {
  return(
    <>
      <Head>
        <title>Roboaeste | AI Art Gallery</title> 
      </Head>
      <header className={styles.header}> 
        <div>
          <h1>Roboaeste</h1>  
        </div>
        <div>
          <h2>Art Gallery for AI Generated Art</h2> 
        </div>
      </header>
      <section id="art-feed">
        <div>
          Coming Soon... 
        </div>
      </section>
    </>
  )
}

export default Home; 