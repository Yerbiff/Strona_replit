import React from 'react';
import Products from '..//Products/Products';
import Feature from '..//Feature/Feature';
import { productData, productDataTwo } from '..//Products/data';
import Hero from '..//Hero/Hero';

const Home = () => {
	return (
        <div>
            {/* <Products heading='Choose your favourite' data={productData} /> */}
            <Hero />
            <Feature />
            <Products heading='Dobierz plan do swoich potrzeb' data={productDataTwo} />
        </div>
	);
}

export default Home;
