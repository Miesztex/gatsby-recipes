import React from 'react';
import getTags from '../utils/getTags';
import { Link } from 'gatsby';
import slugify from 'slugify';

const TagsList = ({ recipes }) => {
	const allTags = getTags(recipes);
	return (
		<div className='tag-container'>
			<h4>recipes</h4>
			<div className='tags-list'>
				{allTags.map((tag, idx) => {
					const [text, value] = tag;
					const slug = slugify(text, { lower: true });
					return (
						<Link to={`/tags/${slug}`} key={idx}>
							{text}({value})
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default TagsList;
