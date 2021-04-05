import React from 'react';
import getTags from '../utils/getTags';
import { Link } from 'gatsby';

const TagsList = ({ recipes }) => {
	const allTags = getTags(recipes);
	return (
		<div className='tag-container'>
			<h4>recipes</h4>
			<div className='tags-list'>
				{allTags.map((tag, idx) => {
					const [text, value] = tag;
					return (
						<Link to={`/${text}`} key={idx}>
							{text}({value})
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default TagsList;
