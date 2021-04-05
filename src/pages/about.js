import React from 'react';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import RecipesList from '../components/RecipesList';

const About = ({ data }) => {
	const {
		allContentfulRecipe: { nodes: recipes },
	} = data;
	return (
		<Layout>
			<main className='page'>
				<section className='about-page'>
					<article>
						<h2>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Reiciendis, nihil.
						</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
							distinctio cupiditate amet fugiat ut molestias quod, nam quia
							expedita architecto?
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
							asperiores?
						</p>
						<Link to='contact' className='btn'>
							contact
						</Link>
					</article>
					<StaticImage
						src='../assets/images/about.jpeg'
						alt='salt in bowl'
						className='about-img'
						placeholder='blurred'
					/>
					<section className='featured-recipes'>
						<h5>Look at this Awesomesauce!</h5>
						<RecipesList recipes={recipes} />
					</section>
				</section>
			</main>
		</Layout>
	);
};

export const query = graphql`
	{
		allContentfulRecipe(
			sort: { fields: text }
			filter: { featured: { eq: true } }
		) {
			nodes {
				content {
					tags
				}
				prepTime
				id
				text
				image {
					gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
					title
				}
			}
		}
	}
`;

export default About;
