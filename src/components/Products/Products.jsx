import React from 'react';
import {
	ProductsContainer,
	ProductsHeading,
	ProductsWrapper,
	ProductsCard,
	ProductsImg,
	ProductsInfo,
	ProductsTitle,
	ProductsDesc,
	ProductsPrice,
	ProductsButton,
	BestOfferBadge,
} from './ProductsElements';

function Products({ heading, data }) {
	return (
		<ProductsContainer>
			<ProductsHeading>{heading}</ProductsHeading>
			<ProductsWrapper>
				{data.map((product, index) => {
					return (
						
						<ProductsCard key={index}>
							{/* {index === 1 && <BestOfferBadge>Najszęsciej wybierana</BestOfferBadge>} */}
							<ProductsImg src={product.img} alt={product.alt} />
							<ProductsInfo>
								<ProductsTitle>{product.name}</ProductsTitle>
								<ProductsDesc>{product.desc1}</ProductsDesc>
								<ProductsDesc>{product.desc2}</ProductsDesc>
								<ProductsDesc>{product.desc3}</ProductsDesc>
								<ProductsPrice>{product.price}</ProductsPrice>
								<ProductsButton>{product.button}</ProductsButton>
							</ProductsInfo>
						</ProductsCard>
					);
				})}
			</ProductsWrapper>
		</ProductsContainer>
	);
}

export default Products;
