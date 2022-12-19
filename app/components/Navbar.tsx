import type { NextPage } from 'next';
import Image from 'next/image'; 
// import Head from 'next/head'; 
import styles from '../styles/Navbar.module.css'; 

const Navbar: NextPage = () => {
	return(
		<>
			<nav className={styles.nav}> 
				<div className={styles.navbarContainer}>
					<div className={styles.logo}>Roboaeste</div>
					<div className={styles.menu}>
						<a href="#">For You</a>
						<a href="#">Explore</a>
					</div>
					<div className={styles.searchContainer}>
						<input type="text" placeholder="Search" />
						<button>Search</button>
					</div>
					<div className="userBubble"> 
						{/* <Image src" alt="User image" />  */} 
					</div>
				</div>
			</nav>
		</>
	)
};

export default Navbar; 