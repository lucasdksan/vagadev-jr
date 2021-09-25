import React from 'react';

import { Container, 
        Banner, 
        BannerImg, 
        BannerInfo,
        BannerInfoH1,
        BannerInfoSubValue,
        BannerInfoValue,
        BannerInfop,
        ValueArea,
        NavTitle,
        SlideNavTitle,
        SliderNav,
        SliderNavButtons,
        NumberBlock,
        ButtonArea,
        ButtonNavigation,
        IconMenu,
        MiddleBanner,
        ShelfArea,
        ShelfTitleIcon,
        TitleAreaShelf,
        TitleShelf,
        ShelfElementArea,
        ShelfButton,
        LeftArrow,
        RightArrow } from '../styles/pages/Home';

import Header from '../components/Header';
import Footer from '../components/Footer';
import MiddleBannerArea from '../components/MiddleBannerArea';
import ShelfItem from '../components/ShelfItem';

import leftButton from '../assets/svgs/angle-left-solid.svg';
import rightButton from '../assets/svgs/angle-right-solid.svg';
import cubeIcon from '../assets/icons/cube.png';

import middleData from '../data/MiddleData';
import shelfData from '../data/ShelfData';

const Home = ()=>{
    return(
        <>
            <Header/>
            <Container>
                <Banner>
                    <BannerImg>
                        <BannerInfo>
                            <BannerInfoH1>MORTAL KOMBAT</BannerInfoH1>
                            <ValueArea>
                                <BannerInfoValue>R$ 299</BannerInfoValue>
                                <BannerInfoSubValue>,99</BannerInfoSubValue>
                            </ValueArea>
                            <BannerInfop>
                                Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.
                            </BannerInfop>
                        </BannerInfo>
                    </BannerImg>
                    <SliderNav>
                        <SlideNavTitle>
                            <NavTitle>MORTAL KOMBAT</NavTitle>
                        </SlideNavTitle>
                        <SliderNavButtons>
                            <NumberBlock>
                                1 / 2
                            </NumberBlock>
                            <ButtonArea>
                                <ButtonNavigation><IconMenu src={leftButton} alt='left arrow'/></ButtonNavigation>
                                <ButtonNavigation><IconMenu src={rightButton} alt='right arrow'/></ButtonNavigation>
                            </ButtonArea>
                        </SliderNavButtons>
                    </SliderNav>
                </Banner>
                <MiddleBanner>
                    {
                        middleData.map((itens)=>{
                            return(
                                <MiddleBannerArea 
                                    key={itens.key}
                                    image={itens.image}
                                    title={itens.text}
                                />
                            );
                        })
                    }
                </MiddleBanner>
                <ShelfArea>
                    <TitleAreaShelf>
                        <ShelfTitleIcon src={cubeIcon} alt='Icon cubes'/>
                        <TitleShelf>Produtos em destaque</TitleShelf>
                    </TitleAreaShelf>
                    <ShelfElementArea>
                        <ShelfButton><LeftArrow/></ShelfButton>
                        <ShelfItem 
                            key={shelfData[0].key}
                            title={shelfData[0].text}
                            value={shelfData[0].value}
                            image={shelfData[0].image}
                        />
                        <ShelfButton><RightArrow/></ShelfButton>
                    </ShelfElementArea>
                </ShelfArea>
            </Container>
            <Footer/>
        </>
    );
}

export default Home;