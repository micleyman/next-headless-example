const homepage = {
	name: 'homepage',
	title: 'Homepage',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Homepage title',
			type: 'array',
			of: [{ type: 'string' }],
			description:
				'The first field sets the primary part of the title, the second sets the normal colored part.',
			validation: [(Rule) => Rule.required(), (Rule) => Rule.max(2), (Rule) => Rule.min(2)]
		},
		{
			name: 'subtitle',
			title: 'Homepage subtitle',
			type: 'string',
			description: 'Subtitle of the hero section',
			validation: (Rule) => Rule.required()
		}
	]
}

export default homepage
