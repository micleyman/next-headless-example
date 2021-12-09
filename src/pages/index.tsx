import type { GetStaticProps } from 'next'
import Head from 'next/head'
import client from '../lib/sanity-client'
import { css } from '@linaria/core'

const content = css`
	text-transform: uppercase;
`

const homepageQuery = `*\[_type == "homepage"\][0] {
  title,
  subtitle
}`

interface Props {
	data: {
		homepage: {
			title: string
			subtitle: string
		}
	}
}

const Home = ({ data }: Props) => {
	const { homepage } = data

	return (
		<div>
			<Head>
				<title>Homepage example</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<h1>
					<span className="text-primary">{homepage.title[0]}</span> {homepage.title[1]}
				</h1>
				<h2>{homepage.subtitle}</h2>
			</main>
		</div>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const homepage = await client.fetch(homepageQuery)

	const data = { homepage }
	return {
		props: {
			data
		},
		revalidate: 1
	}
}

export default Home
