// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import withLinaria from 'next-linaria'

/**
 * @type {import('next').NextConfig}
 */
const config = withLinaria({
	reactStrictMode: true,
	linaria: {
		cacheDirectory: '.next/cache/linaria',
		sourceMap: process.env.NODE_ENV === 'production'
	}
})

export default config
