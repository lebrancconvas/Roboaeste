import type { NextPage } from 'next';
import Head from 'next/head'; 
import styles from '../styles/Home.module.css'; 
import Navbar from '../components/Navbar'; 

const Home: NextPage = () => {
  return(
    <>
      <Head>
        <link rel="icon" type="image/png" href="./image/icon/icon.png" /> 
        <title>Roboaeste | AI Art Gallery</title> 
      </Head>
      <header className={styles.header}> 
        <div id="navbar">
          <Navbar /> 
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