import React from 'react';
import { OfertaContainer,Image,ImageContainer,ImageContainerLeft,FeatureContainer,FirstContainer,TextContainer, Link,OfertaDescription,OfertaCTA,OfertaList,OfertaListPorady,OfertaListBledy,OfertaListItem,OfertaTitle,MiastaContainer } from './OfertaElenents';
import { Miasta } from './miasta';
import ImgMistakes from '../../images/mistakes.jpg';
import ImgAdvice from '../../images/advice.jpg';
import ImgSocial from '../../images/social.jpg';

const Oferta = ({miasto}) => {
	return (
		<div>
			<FeatureContainer>
			<OfertaTitle>Nasza oferta  </OfertaTitle>
				<OfertaDescription>
					Jesteśmy agencją social mediową <b>{miasto}</b> specjalizującą się w tworzeniu skutecznych strategii marketingowych i kampanii reklamowych w mediach społecznościowych. Oferujemy kompleksowe rozwiązania, które pomogą Ci zwiększyć zasięg marki, angażować użytkowników i osiągać zamierzone cele biznesowe.
				</OfertaDescription>
			</FeatureContainer>
			<OfertaContainer>
				
			<FirstContainer>
					<TextContainer>
					<OfertaTitle>Nasza oferta <b>{miasto}</b> </OfertaTitle>
					<OfertaList>
						<OfertaListItem>
						Profesjonalne zarządzanie profilami w mediach społecznościowych zapewni przewage  <b>{miasto}</b> (Facebook, Instagram, Twitter, LinkedIn itp.)
						</OfertaListItem>
						<OfertaListItem>
						Tworzenie unikalnych treści i grafik, które przyciągają uwagę i budują świadomość marki
						</OfertaListItem>
						<OfertaListItem>
						Analiza i optymalizacja działań w mediach społecznościowych w celu maksymalizacji efektów
						</OfertaListItem>
						<OfertaListItem>
						Kampanie reklamowe targeted na wybrane grupy docelowe
						</OfertaListItem>
						<OfertaListItem>
						Monitoring i raportowanie wyników działań, aby dostarczyć Ci klarowne informacje o osiągniętych rezultatach
						</OfertaListItem>
					</OfertaList>
					</TextContainer>
					<ImageContainer>
						<Image src={ImgSocial} alt="Obrazek" />
					</ImageContainer>
				</FirstContainer>
				
				<FirstContainer>
				<ImageContainerLeft>
						<Image src={ImgAdvice} alt="dwie osoby przy komputerze" />
				</ImageContainerLeft>
					<TextContainer>
						<OfertaListPorady>
						<OfertaTitle>Porady dla początkujących w social mediach:</OfertaTitle>
							<OfertaListItem>
							Wybierz odpowiednie platformy społecznościowe dla swojej marki.
							</OfertaListItem>
							<OfertaListItem>
							Twórz wartościowe treści, które angażują i przyciągają uwagę Twojej publiczności.
							</OfertaListItem>
							<OfertaListItem>
							Zdefiniuj swoje cele i strategię przed rozpoczęciem działań w mediach społecznościowych.
							</OfertaListItem>
							<OfertaListItem>
							Regularnie monitoruj i analizuj wyniki swoich działań, aby dostosować swoją strategię.
							</OfertaListItem>
							<OfertaListItem>
							Bądź aktywny i odpowiadaj na komentarze oraz wiadomości od swoich obserwatorów.
							</OfertaListItem>
						</OfertaListPorady>
					</TextContainer>
					
				</FirstContainer>
				<FirstContainer>
					<TextContainer>
						<OfertaListBledy>
						<OfertaTitle>Wprowadzenie do najczęstszych błędów popełnianych przez klientów <b>{miasto}</b>:</OfertaTitle>
							<OfertaListItem>
							Brak spójności wizualnej i głosu marki na różnych platformach społecznościowych.
							</OfertaListItem>
							<OfertaListItem>
							Publikowanie niewystarczająco angażujących treści, które nie przyciągają uwagi.
							</OfertaListItem>
							<OfertaListItem>
							Zbyt duża liczba samych promocyjnych postów, bez wartościowych informacji.
							</OfertaListItem>
							<OfertaListItem>
							Brak regularności w publikowaniu treści.
							</OfertaListItem>
							<OfertaListItem>
							Brak monitorowania i analizy wyników działań, co utrudnia optymalizację strategii.
							</OfertaListItem>
							
						</OfertaListBledy>
					</TextContainer>
					
					<ImageContainer>
						<Image src={ImgMistakes} alt="starszy pan popełnił błąd" />
					</ImageContainer>
            	</FirstContainer>
				
				
				<OfertaDescription>
					Działamy również w:
				</OfertaDescription>
				<MiastaContainer>
					{Miasta.map((product, index) => {
								return (
									<Link href={product.Adres}>{product.Nazwa}</Link>
								);
							})}
				</MiastaContainer>
					
				
			</OfertaContainer>
		</div>
	);
}

export default Oferta;
