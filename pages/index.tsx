import type { NextPage } from 'next'
import Head from 'next/head'

import { css } from '@linaria/core'

const content = css`
	text-transform: uppercase;
`

const Home: NextPage = () => {
	return (
		<div className="bg-blue-500">
			<Head>
				<title>Homepage example</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={content}>Yeet</main>
		</div>
	)
}

export default Home
