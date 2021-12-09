import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { css } from '@linaria/core'

const content = css`
	text-transform: uppercase;
`

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Homepage example</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={content}>Yeet</main>
		</div>
	)
}

export default Home
