import styled from 'styled-components';

export const OfertaContainer = styled.div`
	/* width: 100vw; */
	min-height: 100vh;
	padding: 5rem calc((100vw - 1300px) / 2);
	background: #151717;
	color: #fff;
	display:flex;
`;
export const Link = styled.a`
	color: #fff;
	text-decoration: none;
	transition: color 0.3s ease;
	padding: 10px;
	// margin: 10px;

	&:hover {
		color: #23c4b7;
	}
`;
