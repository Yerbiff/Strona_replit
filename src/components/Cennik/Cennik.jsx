import React from 'react';
import Products from '..//Products/Products';
import {productDataTwo } from '..//Products/data';

const Cennik = () => {
	return (
		<div>
			<Products heading='Dobierz plan do swoich potrzeb' data={productDataTwo} />
		</div>
	);
}

export default Cennik;
