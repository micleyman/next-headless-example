import sanityClient from '@sanity/client'

export default sanityClient({
	projectId: '51jzb6zj',
	dataset: 'development',
	useCdn: process.env.NEXT_PUBLIC_NODE_ENV === 'production'
})
