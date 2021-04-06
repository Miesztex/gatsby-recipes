import React from 'react';
import { graphql, Link } from 'gatsby';
import slugify from 'slugify';

import Layout from '../components/Layout';
import getTags from '../utils/getTags';

const Tags = ({ data }) => {
	const allTags = getTags(data.allContentfulRecipe.nodes);
	return (
		<Layout>
			<main className='page'>
				<section className='tags-page'>
					{allTags.map((tag, idx) => {
						const [text, value] = tag;
						const slug = slugify(text, { lower: true });
						return (
							<Link to={`/tags/${slug}`} key={idx} className='tag'>
								<h5>{text}</h5>
								<p>{value} recipe</p>
							</Link>
						);
					})}
				</section>
			</main>
		</Layout>
	);
};

export const query = graphql`
	{
		allContentfulRecipe {
			nodes {
				content {
					tags
				}
			}
		}
	}
`;

export default Tags;
