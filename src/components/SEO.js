import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description }) => {
	const { site } = useStaticQuery(query);
	const metaDesc = description || site.siteMetadata.description;
	return (
		<Helmet
			// app specific
			htmlAttributes={{ lang: 'en' }}
			// page specific
			title={`${title} | ${site.siteMetadata.title}`}
			meta={[
				{
					name: 'description',
					content: metaDesc,
				},
			]}></Helmet>
	);
};

const query = graphql`
	{
		site {
			siteMetadata {
				title
				description
			}
		}
	}
`;
export default SEO;
