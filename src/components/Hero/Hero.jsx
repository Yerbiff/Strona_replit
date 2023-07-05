import React from 'react';
import {
	HeroContainer,
	HeroContent,
	HeroItems,
	HeroH1,
	HeroP,
	HeroBtn,
} from './HeroElements';

function Hero() {
	return (
		<HeroContainer>
			<HeroContent>
				<HeroItems>
					<HeroH1>Zdobądź uwagę milionów!</HeroH1>
					<HeroP>Dotrzyj do swojej docelowej publiczności.</HeroP>
					<a href="/oferta"><HeroBtn>Zobacz ofertę</HeroBtn></a>
				</HeroItems>
			</HeroContent>
		</HeroContainer>
	);
}

export default Hero;
