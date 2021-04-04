import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';

const About = () => {
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
				</section>
			</main>
		</Layout>
	);
};

export default About;
