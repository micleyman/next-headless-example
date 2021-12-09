import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Homepage example</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>Yeet</main>
		</div>
	)
}

export default Home
