const path = require('path');
const slugify = require('slugify');

exports.createPages = async ({ graphql, actions: { createPage } }) => {
	const result = await graphql(`
		query GetRecipes {
			allContentfulRecipe {
				nodes {
					content {
						tags
					}
				}
			}
		}
	`);

	result.data.allContentfulRecipe.nodes.forEach(item => {
		item.content.tags.forEach(tag => {
			const slug = slugify(tag, { lower: true });
			createPage({
				path: `/tags/${slug}`,
				component: path.resolve(`src/templates/tag-template.js`),
				context: {
					tag: tag,
				},
			});
		});
	});
};
