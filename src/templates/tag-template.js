import React from 'react';
import { graphql } from 'gatsby';
import RecipesList from '../components/RecipesList';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const TagTemplate = ({ data, pageContext }) => {
	const recipes = data.allContentfulRecipe.nodes;
	return (
		<Layout>
			<SEO title={pageContext.tag} />
			<main className='page'>
				<h2>Tag: {pageContext.tag}</h2>
				<div className='tag-recipes'>
					<RecipesList recipes={recipes} />
				</div>
			</main>
		</Layout>
	);
};

export const query = graphql`
	query GetRecipeByTag($tag: String = "") {
		allContentfulRecipe(
			filter: { content: { tags: { eq: $tag } } }
			sort: { fields: text, order: ASC }
		) {
			nodes {
				text
				cookTime
				prepTime
				image {
					gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
				}
			}
		}
	}
`;

export default TagTemplate;
