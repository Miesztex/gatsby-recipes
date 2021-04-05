import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const RecipesList = ({ recipes = [] }) => {
	return (
		<div className='recipes-list'>
			{recipes.map(item => {
				const { id, text, image, prepTime, cookTime } = item;
				return (
					<Link to={`${text}`} className='recipe' key={id}>
						<GatsbyImage
							image={getImage(image)}
							className='recipe-img'
							alt={text}
						/>
						<h5>{text}</h5>
						<p>
							Prep: {prepTime}min | Cook: {cookTime}min
						</p>
					</Link>
				);
			})}
		</div>
	);
};

export default RecipesList;
