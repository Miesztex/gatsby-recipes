import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import TagsList from './TagsList';
import RecipesList from './RecipesList';

const AllRecipes = () => {
	const {
		allContentfulRecipe: { nodes: recipes },
	} = useStaticQuery(query);
	return (
		<section className='recipes-container'>
			<TagsList recipes={recipes} />
			<RecipesList recipes={recipes} />
		</section>
	);
};

const query = graphql`
	{
		allContentfulRecipe(sort: { fields: text }) {
			nodes {
				content {
					tags
				}
				prepTime
				id
				image {
					gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
					title
				}
				text
			}
		}
	}
`;

export default AllRecipes;
