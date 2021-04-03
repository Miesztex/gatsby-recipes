import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
	return (
		<Layout>
			<main className='page'>
				<section className='contact-page'>
					<article className='contact-info'>
						<h3>Want to get in touch?</h3>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
							tempora maiores at suscipit vero? Deserunt enim assumenda natus?
						</p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
						placeat.
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum modi
							illum dolor neque hic obcaecati culpa ipsam sunt ut saepe.
						</p>
					</article>
					<article>
						<form className='form contact-form'>
							<div className='form-row'>
								<label htmlFor='name'>your name</label>
								<input type='text' name='name' id='name' />
							</div>
							<div className='form-row'>
								<label htmlFor='email'>your name</label>
								<input type='email' name='email' id='email' />
							</div>
							<div className='form-row'>
								<label htmlFor='message'>your message</label>
								<textarea name='message' id='message' />
							</div>
							<button type='submit'>Submit</button>
						</form>
					</article>
				</section>
			</main>
		</Layout>
	);
};

export default Contact;
