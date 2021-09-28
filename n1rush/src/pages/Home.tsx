import React, { useState } from 'react';

import { Container, 
        Banner,
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
import BannerImg from '../components/BannerImg';
import AllShelf from '../components/AllShelf';

import leftButton from '../assets/svgs/angle-left-solid.svg';
import rightButton from '../assets/svgs/angle-right-solid.svg';
import cubeIcon from '../assets/icons/cube.png';

import middleData from '../data/MiddleData';
import shelfData from '../data/ShelfData';
import bannerData from '../data/BannerData';

const Home = ()=>{
    const [ numberBar, setNumberBar ] = useState(1);

    function handleNextBanner(){
        setNumberBar(1)
    }
    function handlePreviousBanner(){
        setNumberBar(2);
    }
    function selectBanner(value: number){
        let width = window.innerWidth;
        if(width >= 700){
            return bannerData[value].imageD;
        } else {
            return bannerData[value].imageM;
        }
    }
    console.log(window.screen.width);
    return(
        <>
            <Header/>
            <Container>
                <Banner>
                    <BannerImg
                        key={bannerData[(numberBar-1)].key}
                        name={bannerData[(numberBar-1)].name}
                        image={selectBanner(numberBar-1)}
                        text={bannerData[(numberBar-1)].text}
                        valueF={bannerData[(numberBar-1)].valueF}
                        valueS={bannerData[(numberBar-1)].valueS}
                    />
                    <SliderNav>
                        <SlideNavTitle>
                            <NavTitle>MORTAL KOMBAT</NavTitle>
                        </SlideNavTitle>
                        <SliderNavButtons>
                            <NumberBlock>
                                {numberBar} / 2
                            </NumberBlock>
                            <ButtonArea>
                                <ButtonNavigation onClick={handleNextBanner}><IconMenu src={leftButton} alt='left arrow'/></ButtonNavigation>
                                <ButtonNavigation onClick={handlePreviousBanner}><IconMenu src={rightButton} alt='right arrow'/></ButtonNavigation>
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
                    <AllShelf/>
                </ShelfArea>
            </Container>
            <Footer/>
        </>
    );
}

export default Home;