import React from 'react';
import { OfertaContainer, Link } from './OfertaElenents';
import { Miasta } from './miasta';

const SubPage = () => {
	return (
		<div>
			<OfertaContainer>
			{Miasta.map((product, index) => {
					return (
						<div>
							<Link href={product.Adres}>{product.Nazwa}</Link>
						</div>
					);
				})}
			</OfertaContainer>
		</div>
	);
}

export default SubPage;
