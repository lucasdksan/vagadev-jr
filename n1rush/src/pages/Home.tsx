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
        IconMenu } from '../styles/pages/Home';

import Header from '../components/Header';

import leftButton from '../assets/svgs/angle-left-solid.svg';
import rightButton from '../assets/svgs/angle-right-solid.svg';

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
            </Container>
        </>
    );
}

export default Home;