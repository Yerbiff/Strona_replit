import styled from 'styled-components';

export const FirstContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: justify;
  min-height: 60vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #151717;
  color: #fff;
`;

export const TextContainer = styled.div`
  width: 50%
`;

export const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #fff;
`;
export const ItemContent = styled.div`
    margin: 0;
    color: #666;
`;
export const List = styled.ul`
  list-style: none;
  display:flex;
  justify-content: center;
  padding: 0;
`;

export const ListItem = styled.li`
  margin: 10px;
  text-align: justify;
`;

export const ItemImage = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 10px;
  border-radius: 2%; 
`;
export const Title = styled.h1`
  font-size: 38px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #fff;
`;

export const Content = styled.p`
  font-size: 22px;
  line-height: 1.5;
  color: #666;
`;

export const ImageContainer = styled.div`
  flex: 1;
  margin-left: 80px;
  text-align: right;
`;
export const ItemTitle = styled.h4`
  color: #fff
  // text-align: left;
`;
export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 2%; 
`;
export const Button= styled.a`
    // display: grid;
    // text-align: justify;
    margin:10px;
    padding: 10px 20px;
    background-color: #23c4b7;
    color: #000;
    border-radius: 4px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s ease;
    
    &:hover {
        background-color: #23c4a7;
        transition: 0.2s ease-out;
		cursor: pointer;
	}
`;
