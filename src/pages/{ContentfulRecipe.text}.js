import React from 'react';
import { graphql } from 'gatsby';

const RecipeTemplate = data => {
	console.log(data);
	return <div>{/* <h4>{params.text}</h4> */}</div>;
};

// variable is auto created from template title
export const query = graphql`
	query getSingleRecipe($text: String) {
		contentfulRecipe(text: { eq: $text }) {
			text
			cookTime
		}
	}
`;
export default RecipeTemplate;
