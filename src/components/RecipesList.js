import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import slugify from 'slugify';

const RecipesList = ({ recipes = [] }) => {
	return (
		<div className='recipes-list'>
			{recipes.map(item => {
				const { id, text, image, prepTime, cookTime } = item;
				const slug = slugify(text, { lower: true });
				return (
					<Link to={`${slug}`} className='recipe' key={id}>
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
