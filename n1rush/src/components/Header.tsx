import React, { useState, useEffect, useContext } from 'react';
import { useWindowScroll } from 'react-use';

import { Container, 
        ButtonMenu, 
        IconMenu,
        LogoIcon,
        ButtonsArea,
        ButtonsIcon,
        CircleNumber,
        ShoppingContent,
        SectionBuyProducts,
        AreaTitle,
        Title,
        AreaInfo,
        InfoName,
        InfoValue,
        Infos,
        AreaSearch,
        Search,
        ButtonSearch,
        AreaContact,
        ButtonContact,
        IconEmail,
        IconFace,
        IconInst,
        IconWhats,
        IconSearch,
        AreaIcon,
        TextIcon } from '../styles/components/Header';

import { ConfirmedContext } from '../contexts/ConfirmedBuy';
import SideMenu from './SideMenu';
import Menu from './Menu';
import Ops from './Ops';

import menuIcon from '../assets/svgs/icon_hamburguer.svg';
import cancelIcon from '../assets/svgs/iconHamburguerClose.svg';
import paperIcon from '../assets/svgs/paper-plane.svg';
import searchIcon from '../assets/svgs/search-solid.svg';
import shoppingIcon from '../assets/svgs/shopping-bag-solid.svg';
import logoIcon from '../assets/svgs/logo-icon.svg';


const Header = ()=>{
    const { product, unituProducts } = useContext(ConfirmedContext);
    const { y: pageYOffset } = useWindowScroll();
    const [ background, setBackground ] = useState('transparent');
    const [ menuOp, setMenuOp ] = useState(false);
    const [ bagPosition, setBagPosition ] = useState(-300);
    const [ bagOld, setBagOld ] = useState(60);
    const [ contactPosition, setContactPosition ] = useState(-3000);
    const [ contactOld, setContactOld ] = useState(0);
    const [ searchPosition, setSearchPosition ] = useState(-3000);
    const [ resultSearch, setResultSearch ] = useState('');
    const [ searchOld, setSearchOld ] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    useEffect(()=>{
        if(pageYOffset > 160){
            setBackground('#00000085');
        }
        else{
            setBackground('transparent');
        }
    }, [pageYOffset]);
    useEffect(() => {
        function onScroll() {
            setScrollY(window.scrollY);
            setMenuOp(false);
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [scrollY]);
    
    function handelToggle(){
        if(window.toggleActiveMenu) window.toggleActiveMenu();
        setMenuOp(!menuOp);
        (background === 'transparent') && (pageYOffset > 160) ? setBackground('#00000085') : setBackground('transparent');
    }
    function handleOpenBag(){
        setContactOld(0);
        setContactPosition(-3000);
        setSearchOld(0);
        setSearchPosition(-3000);
        const aux = bagOld;
        setBagOld(bagPosition);
        setBagPosition(aux);
    }
    function handleOpenContact(){
        setBagOld(60);
        setBagPosition(-300);
        setSearchOld(0);
        setSearchPosition(-3000);
        const aux = contactOld;
        setContactOld(contactPosition);
        setContactPosition(aux);
    }
    function handleOpenSearch(){
        setBagOld(60);
        setBagPosition(-300);
        setContactOld(0);
        setContactPosition(-3000);
        const aux = searchOld;
        setSearchOld(searchPosition);
        setSearchPosition(aux);
    }
    function handleSearch(){
        console.log(resultSearch);
    }

    return(
        <>
            <Container
                style={{backgroundColor: background}}
            >
                <AreaIcon>
                    <ButtonMenu onClick={handelToggle}>
                        <IconMenu src={menuOp ? cancelIcon :  menuIcon} alt='Menu Icon'/>
                    </ButtonMenu>
                    <LogoIcon src={logoIcon} alt='Logo Icon'/>
                </AreaIcon>
                <ButtonsArea>
                    <ButtonsIcon onClick={handleOpenContact}>
                        <LogoIcon src={paperIcon} alt='Button Icon'/>
                        <TextIcon>CONTATO</TextIcon>
                    </ButtonsIcon>
                    <ButtonsIcon onClick={handleOpenSearch}>
                        <LogoIcon src={searchIcon} alt='Button Icon'/>
                        <TextIcon>BUSCAR</TextIcon>
                    </ButtonsIcon>
                    <ShoppingContent>
                        <ButtonsIcon onClick={handleOpenBag} className='last'>
                            <LogoIcon src={shoppingIcon} alt='Button Icon'/>
                        </ButtonsIcon>
                        {(product !== 0) ? (<CircleNumber>{product}</CircleNumber>) : <div/>}
                    </ShoppingContent>
                </ButtonsArea>
            </Container>
            <SideMenu>
                <Menu/>
            </SideMenu>
            <SectionBuyProducts
                initial={{
                    y: -300,
                    opacity: 0,
                }}
                animate={{
                    y: bagPosition,
                    opacity: [0, 0.2, 0.5, 0.8, 1],
                }}
                transition={{
                    type: 'spring',
                    stiffness: 40,
                }}
            >
                <AreaTitle><Title>Sua Sacola</Title></AreaTitle>
                <AreaInfo>
                    {
                        (product === 0) ? <Ops/> :
                        unituProducts.map((itens)=>{
                            return(
                                <Infos key={itens.name}>
                                    <InfoName>{itens.name}</InfoName>
                                    <InfoValue>{itens.value}</InfoValue>
                                </Infos>
                            );
                        })
                    }
                </AreaInfo>
            </SectionBuyProducts>
            <AreaContact
                initial={{
                    opacity: 0,
                }}
                animate={{
                    x: contactPosition,
                    opacity: [0, 0.2, 0.5, 0.8, 1],
                }}
                transition={{
                    type: 'spring',
                    stiffness: 40,
                }}
            >
                <ButtonContact href="tel:2122982332" target='_blank'><IconWhats/></ButtonContact>
                <ButtonContact href='https://www.instagram.com/agencian1/' target='_blank'><IconInst/></ButtonContact>
                <ButtonContact href='https://www.facebook.com/search/top?q=agencia%20n1' target='_blank'><IconFace/></ButtonContact>
                <ButtonContact href="mailto:contato@agencian1.com.br" target='_blank'><IconEmail/></ButtonContact>
            </AreaContact>
            <AreaSearch
                initial={{
                    opacity: 0,
                }}
                animate={{
                    x: searchPosition,
                    opacity: [0, 0.2, 0.5, 0.8, 1],
                }}
                transition={{
                    type: 'spring',
                    stiffness: 40,
                }}
            >
                <Search 
                    placeholder="Nome do Jogo" 
                    type="text"
                    value={resultSearch}
                    onChange={(e)=>{setResultSearch(e.target.value);}}
                />
                <ButtonSearch onClick={handleSearch}>
                    <IconSearch/>
                </ButtonSearch>
            </AreaSearch>
        </>
    );
}

export default Header;