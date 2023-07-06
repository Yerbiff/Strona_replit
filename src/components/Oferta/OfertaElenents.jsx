import styled from 'styled-components';
import FeaturePic from '../../images/offer.webp';
export const OfertaContainer = styled.div`
	/* width: 100vw; */
	min-height: 100vh;
	padding: 5rem calc((100vw - 1300px) / 2);
	background: #151717;
	color: #fff;
	// display:flex;
`;
export const MiastaContainer= styled.div`
	display:flex;
	overflow-x: scroll;
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
export const OfertaTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const OfertaDescription = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const OfertaList = styled.ul`
  list-style-type: none;
  margin-bottom: 20px;
  flex-basis: 50%;
  text-align:Left;
`;
export const OfertaListPorady = styled.ul`
  list-style-type: none;
  margin-bottom: 20px;
  flex-basis: 50%;
  text-align:Right;
  
`;
export const OfertaListBledy = styled.ul`
  list-style-type: none;
  margin-bottom: 20px;
  flex-basis: 50%;
`;

export const OfertaListItem = styled.li`
  margin-bottom: 10px;
`;

export const OfertaCTA = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background-color: #ff9900;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e68a00;
  }
`;
export const ImageContainer = styled.div`
  flex: 1;
  margin-left: 80px;
  text-align: Right;
`;
export const ImageContainerLeft = styled.div`
  flex: 1;
  margin-right: 80px;
  text-align: Right;
`;
export const Image = styled.img`
  max-width: 100%;
  width: 800px;
  height: 400px;
  border-radius: 2%; 
`;
export const FirstContainer = styled.div`
  display: flex;
`;

export const TextContainer = styled.div`
  width: 50%
`;
export const FeatureContainer = styled.div`
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
		url(${FeaturePic});
	height: 200vh;
	max-height: 1200px;
	background-position: center;
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #fff;
	text-align: center;
	padding: 0 1rem;
  height: 100vh;
	background-position: center;
	background-size: cover;
	h1 {
		font-size: clamp(3rem, 5vw, 5rem);
	}

	p {
		margin-bottom: 1rem;
		font-size: clamp(1rem, 3vw, 2rem);
	}
`;

