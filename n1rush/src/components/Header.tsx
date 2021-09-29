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
        AreaSearch,
        Search,
        ButtonSearch,
        IconSearch,
        AreaIcon,
        TextIcon } from '../styles/components/Header';

import { ConfirmedContext } from '../contexts/ConfirmedBuy';
import SectionBuyProducts from './SectionBuyProducts';
import SideMenu from './SideMenu';
import Menu from './Menu';

import menuIcon from '../assets/svgs/icon_hamburguer.svg';
import cancelIcon from '../assets/svgs/iconHamburguerClose.svg';
import paperIcon from '../assets/svgs/paper-plane.svg';
import searchIcon from '../assets/svgs/search-solid.svg';
import shoppingIcon from '../assets/svgs/shopping-bag-solid.svg';
import logoIcon from '../assets/svgs/logo-icon.svg';
import AreaContact from './AreaContact';
import MenuD from './MenuD';


const Header = ()=>{
    const { product } = useContext(ConfirmedContext);
    const { y: pageYOffset } = useWindowScroll();
    const [ background, setBackground ] = useState('transparent');
    const [ menuOp, setMenuOp ] = useState(false);
    const [ bagPosition, setBagPosition ] = useState(-3000);
    const [ bagOld, setBagOld ] = useState(60);
    const [ contactPosition, setContactPosition ] = useState(-3000);
    const [ contactOld, setContactOld ] = useState(0);
    const [ searchPosition, setSearchPosition ] = useState(-3000);
    const [ resultSearch, setResultSearch ] = useState('');
    const [ searchOld, setSearchOld ] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const [ opacityAnimate, setOpacityAnimate ] = useState([0]);

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
        setBagPosition(-3000);
        setSearchOld(0);
        setSearchPosition(-3000);
        const aux = contactOld;
        setContactOld(contactPosition);
        setContactPosition(aux);
    }
    function handleOpenSearch(){
        setBagOld(60);
        setBagPosition(-3000);
        setContactOld(0);
        setContactPosition(-3000);
        const aux = searchOld;
        setSearchOld(searchPosition);
        setSearchPosition(aux);
    }
    function handleAdaptation(value: number){
        if(value > 9){
            return '+9';
        } else {
            return value;
        }
    }
    function handleSearch(){
        console.log(resultSearch);
    }
    function handlerOpenMenuDes(){
        setOpacityAnimate([0, 0.2, 0.5, 0.8, 1]);
    }

    return(
        <>
            <Container
                style={{backgroundColor: background}}
            >
                <AreaIcon>
                    <ButtonMenu onClick={handelToggle}>
                        <IconMenu src={menuOp ? cancelIcon : menuIcon} alt='Menu Icon'/>
                    </ButtonMenu>
                    <ButtonMenu className='button-desk'
                        onFocus={handlerOpenMenuDes}
                        onClick={handlerOpenMenuDes}
                    >
                        <IconMenu 
                            src={menuIcon} 
                            alt='Menu Icon'
                        />
                        <MenuD opacityAnimate={opacityAnimate}/>
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
                        {
                            ( product !== 0 ) ? (
                                <CircleNumber>
                                    {handleAdaptation(product)}
                                </CircleNumber>
                            ) : <div/>
                        }
                    </ShoppingContent>
                </ButtonsArea>
            </Container>
            <SideMenu>
                <Menu/>
            </SideMenu>
            <SectionBuyProducts bagPosition={bagPosition}/>
            <AreaContact contactPosition={contactPosition}/>
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