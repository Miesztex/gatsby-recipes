import React from 'react';
import AllRecipes from './AllRecipes';
import Layout from './Layout';

const Recipes = () => {
	return (
		<Layout>
			<main className='page'>
				<AllRecipes />
			</main>
		</Layout>
	);
};

export default Recipes;
