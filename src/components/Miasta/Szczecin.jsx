import React from 'react';
import Products from '../Products/Products';
import { productData, productDataTwo } from '../Products/data';

const Szczecin = () => {
	return (
		<div>
			<Products heading='Dobierz plan do swoich potrzeb' data={productDataTwo} />
		</div>
	);
}

export default Szczecin;
