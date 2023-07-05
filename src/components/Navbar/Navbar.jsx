import React from 'react';
import { Nav, NavIcon, NavLink } from './NavbarElements';

function NavBar({ toggle }) {
	return (
		<>
			<Nav>
				<NavLink to='/'>InnovateMedia</NavLink>
				<NavIcon onClick={toggle}>
					<p>Menu</p>
				</NavIcon>
			</Nav>
		</>
	);
}

export default NavBar;
