import { Link } from 'gatsby';
import React from 'react';
import logo from '../assets/images/logo.svg';
import { FaAlignJustify } from 'react-icons/fa';
const Navbar = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	return (
		<nav className='navbar'>
			<div className='nav-center'>
				<div className='nav-header'>
					<Link to='/'>
						<img src={logo} alt='simply recipes' />
					</Link>
					<button className='nav-btn' onClick={() => setIsOpen(!isOpen)}>
						<FaAlignJustify />
					</button>
				</div>
				<div className={`nav-links ${isOpen && 'show-links'}`}>
					<Link
						to='/'
						className='nav-link'
						activeClassName='active-link'
						onClick={() => setIsOpen(false)}>
						home
					</Link>
					<Link
						to='/recipes'
						className='nav-link'
						activeClassName='active-link'
						onClick={() => setIsOpen(false)}>
						recipes
					</Link>
					<Link
						to='/tags'
						className='nav-link'
						activeClassName='active-link'
						onClick={() => setIsOpen(false)}>
						tags
					</Link>
					<Link
						to='/about'
						className='nav-link'
						activeClassName='active-link'
						onClick={() => setIsOpen(false)}>
						about
					</Link>
					<div className='nav-link contact-link'>
						<Link
							to='/contact'
							className='btn'
							onClick={() => setIsOpen(false)}>
							contact
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
