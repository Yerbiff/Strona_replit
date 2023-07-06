import styled from 'styled-components';

export const ProductsContainer = styled.div`
	/* width: 100vw; */
	min-height: 100vh;
	padding: 5rem calc((100vw - 1300px) / 2);
	background: #151717;
	color: #fff;
`;

export const ProductsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0 auto;
`;

export const ProductsCard = styled.div`
	margin: 0 2rem;
	line-height: 2.3;
	width: 310px;
`;

export const ProductsImg = styled.img`
	height: 300px;
	min-width: 300px;
	max-width: 100%;
	box-shadow: 8px 8px #3b3d3d;
`;

export const ProductsHeading = styled.h1`
	font-size: clamp(2rem, 2.5vw, 3rem);
	text-align: center;
	margin-bottom: 5rem;
`;

export const ProductsTitle = styled.h2`
	font-weight: 400;
	font-size: 1.5rem;
`;

export const ProductsInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 2rem;
	text-align: center;
	height: 65%;
`;


export const ProductsDesc = styled.p`
	margin-bottom: 1rem;
`;

export const ProductsPrice = styled.p`
	margin-bottom: 1rem;
	font-size: 2rem;
`;

export const ProductsButton = styled.button`
	font-size: 1rem;
	padding: 1rem 4rem;
	border: none;
	background: #23c4b7;
	color: #000;
	transition: 0.2s ease-out;

	&:hover {
		background: #3b3d3d;
		transition: 0.2s ease-out;
		cursor: pointer;
		color: #fff;
	}
`;
export const BestOfferBadge = styled.div`
//   position: absolute;
  top: -15px;
//   left: 50%;
//   transform: translateX(-30%);
  background: #23c4b7;
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 2px;
`;