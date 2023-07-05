import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
	background: transparent;
	height: 0px;
	display: flex;
	justify-content: center;
	font-weight: 700;
	position: relative;
`;

export const NavLink = styled(Link)`
	color: #fff;
	font-size: 2rem;
	display: flex;
	height: 80px;
	align-items: center;
	text-decoration: none;
	cursor: pointer;

	@media screen and (max-width: 400px) {
		position: absolute;
		top: 10px;
		left: 25px;
	}
`;

export const NavIcon = styled.div`
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	cursor: pointer;
	color: #fff;

	p {
		transform: translate(-100%, 100%);
		font-weight: bold;
	}
`;
