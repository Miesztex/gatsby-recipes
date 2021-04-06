import React from 'react';
import { graphql, Link } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { BsClockHistory, BsClock, BsPeople } from 'react-icons/bs';
import slugify from 'slugify';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
const RecipeTemplate = ({ data }) => {
	const {
		text,
		cookTime,
		content: { tags, instructions, ingredients, tools },
		prepTime,
		servings,
		description: { description },
		image,
	} = data.contentfulRecipe;
	return (
		<Layout>
			<SEO title={text} description={description} />
			<main className='page'>
				<div className='recipe-page'>
					<section className='recipe-hero'>
						<GatsbyImage image={getImage(image)} alt={text} />
						<article className='recipe-info'>
							<h2>{text}</h2>
							<p>{description}</p>
							<div className='recipe-icons'>
								<article>
									<BsClock />
									<h5>prep time</h5>
									<p>{prepTime} min.</p>
								</article>
								<article>
									<BsClockHistory />
									<h5>cook time</h5>
									<p>{cookTime} min.</p>
								</article>
								<article>
									<BsPeople />
									<h5>servings </h5>
									<p>{servings}</p>
								</article>
							</div>
							<p className='recipe-tags'>
								Tags:{' '}
								{tags.map((tag, idx) => {
									const slug = slugify(tag, { lower: true });
									return (
										<Link to={`/tags/${slug}`} key={idx}>
											{tag}
										</Link>
									);
								})}
							</p>
						</article>
					</section>
					<section className='recipe-content'>
						<article>
							<h4>instructions</h4>
							{instructions.map((item, idx) => (
								<div key={idx} className='single-instruction'>
									<header>
										<p>step {idx + 1}</p>
										<div></div>
									</header>
									<p>{item}</p>
								</div>
							))}
						</article>
						<article className='second-column'>
							<div>
								<h4>Ingredients</h4>
								{ingredients.map((item, idx) => (
									<p className='single-ingredient' key={idx}>
										{item}
									</p>
								))}
							</div>
							<div>
								<h4>Tools</h4>
								{tools.map((item, idx) => (
									<p className='single-tool' key={idx}>
										{item}
									</p>
								))}
							</div>
						</article>
					</section>
				</div>
			</main>
		</Layout>
	);
};

// variable is auto created from template title
export const query = graphql`
	query getSingleRecipe($text: String) {
		contentfulRecipe(text: { eq: $text }) {
			text
			cookTime
			content {
				ingredients
				instructions
				tags
				tools
			}
			description {
				description
			}
			prepTime
			servings
			image {
				gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
			}
		}
	}
`;
export default RecipeTemplate;
