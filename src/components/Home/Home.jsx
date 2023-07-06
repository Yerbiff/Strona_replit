import React from 'react';
import Feature from '..//Feature/Feature';
import Hero from '..//Hero/Hero';
import { FirstContainer, TextContainer, Title, Content, SectionTitle , List, ListItem, Image,ImageContainer, ItemImage, ItemContent, ItemTitle } from './HomeElements';
import ImgCreativity from '../../images/creativity.webp';
import ImgInnovation from '../../images/innovation.webp';
import ImgPartnership from '../../images/partnership.webp';
import ImgResults from '../../images/results.webp';
import SocialMedia from '../../images/social_media.webp';


const Home = () => {
	return (
        <div>
            {/* <Products heading='Choose your favourite' data={productData} /> */}
            <Hero />
            <FirstContainer>
                <TextContainer>
                    <Title>InnovateMedia - Twój partner w skutecznej komunikacji w mediach społecznościowych!</Title>
                    <Content>Jesteśmy agencją specjalizującą się w innowacyjnych strategiach marketingowych,
                        które zapewniają naszym klientom wyjątkowe rezultaty. Nasze doświadczenie w obszarze mediów społecznościowych,
                        kreatywności i technologii pozwala nam tworzyć unikalne kampanie, które przyciągają uwagę, budują marki i angażują publiczność.</Content>
                </TextContainer>
                <ImageContainer>
                    <Image src={SocialMedia} alt="Obrazek" />
                </ImageContainer>
            </FirstContainer>
            <Feature /> 
            <FirstContainer>
                <TextContainer>
                    <SectionTitle>Dlaczego warto wybrać InnovateMedia?</SectionTitle>
                    <List>
                        <ListItem><ItemImage src={ImgCreativity} alt="Obrazek 1" /> <ItemContent><ItemTitle>Kreatywność na najwyższym poziomie:</ItemTitle> Nasz zespół składa się z utalentowanych twórców, projektantów i copywriterów, którzy tworzą unikalne treści, wizualizacje i kampanie. Zainspirujemy Twoją markę i zapewnimy jej unikalną tożsamość w świecie mediów społecznościowych. </ItemContent></ListItem>
                        <ListItem><ItemImage src={ImgInnovation} alt="Obrazek 1" /> <ItemContent><ItemTitle>Innowacyjne podejście:</ItemTitle> Jesteśmy zawsze na bieżąco z najnowszymi trendami i narzędziami w dziedzinie social media. Stosujemy najnowsze strategie, analizy danych i narzędzia reklamowe, aby zapewnić Ci konkurencyjną przewagę i osiągnąć zamierzone cele. </ItemContent> </ListItem>
                        <ListItem><ItemImage src={ImgPartnership} alt="Obrazek 1" /> <ItemContent><ItemTitle>Skuteczne rezultaty:</ItemTitle> Naszym priorytetem jest dostarczenie realnych wyników dla naszych klientów. Dzięki naszemu zaangażowaniu, strategii dopasowanej do Twoich potrzeb i pomiarom efektywności, możemy skutecznie zwiększyć zasięg Twojej marki, zaangażowanie użytkowników i konwersje.</ItemContent></ListItem>
                        <ListItem><ItemImage src={ImgResults} alt="Obrazek 1" /> <ItemContent><ItemTitle>Partnerstwo i zaangażowanie:</ItemTitle> Jesteśmy Twoim partnerem, gotowym wesprzeć Cię na każdym etapie. Nasz zespół będzie śledzić trendy, analizować dane i dostosowywać strategie, aby zawsze utrzymywać Twoją markę na czele. </ItemContent></ListItem>
                    </List>
                    {/* <Button>Dołącz do InnovateMedia</Button> */}
                    {/* <Content>Skontaktuj się z nami już dziś, aby zacząć skuteczną podróż komunikacyjną w erze social media.</Content> */}
                </TextContainer>
           </FirstContainer>
        </div>
	);
}

export default Home;
