/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: 'Simply Recipes',
		description: 'Nice and clean recipes site',
		author: '@miesztex',
		person: { name: 'mieszko', age: 24 },
		simpleData: ['item1', 'item2'],
		complexData: [
			{ name: 'mieszko', age: 24 },
			{ name: 'kinga', age: 25 },
		],
	},
	plugins: [
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `nysdrfb6guw4`,
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`,
			},
		},
		{
			resolve: `gatsby-plugin-webfonts`,
			options: {
				fonts: {
					google: [
						{
							family: 'Montserrat',
							variants: ['400'],
						},
						{
							family: 'Inconsolata',
							variants: ['400', '500', '600', '700'],
						},
					],
				},
			},
		},
	],
};
