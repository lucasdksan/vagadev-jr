import React, { useState, useEffect, useContext } from 'react';
import { useWindowScroll } from 'react-use';

import { Container, 
        ButtonMenu, 
        IconMenu,
        LogoIcon,
        ButtonsArea,
        ButtonsIcon,
        CircleNumber,
        ShoppingContent } from '../styles/components/Header';

import { ConfirmedContext } from '../contexts/ConfirmedBuy';
import SideMenu from './SideMenu';
import Menu from './Menu';

import menuIcon from '../assets/svgs/icon_hamburguer.svg';
import cancelIcon from '../assets/icons/icon_hamburguer_cancel.png';
import paperIcon from '../assets/svgs/paper-plane.svg';
import searchIcon from '../assets/svgs/search-solid.svg';
import shoppingIcon from '../assets/svgs/shopping-bag-solid.svg';
import logoIcon from '../assets/svgs/logo-icon.svg';


const Header = ()=>{
    const { product } = useContext(ConfirmedContext);
    const { y: pageYOffset } = useWindowScroll();
    const [ background, setBackground ] = useState('transparent');
    const [ menuOp, setMenuOp ] = useState(false);

    useEffect(()=>{
        if(pageYOffset > 160){
            setBackground('#00000085');
        }
        else{
            setBackground('transparent');
        }
    }, [pageYOffset]);
    
    function handelToggle(){
        if(window.toggleActiveMenu) window.toggleActiveMenu();
        setMenuOp(!menuOp);
        (background === 'transparent') && (pageYOffset > 160) ? setBackground('#00000085') : setBackground('transparent');
    }
    
    return(
        <>
            <Container
                style={{backgroundColor: background}}
            >
                <ButtonMenu onClick={handelToggle}>
                    <IconMenu src={menuOp ? cancelIcon :  menuIcon} alt='Menu Icon'/>
                </ButtonMenu>
                <LogoIcon src={logoIcon} alt='Logo Icon'/>
                <ButtonsArea>
                    <ButtonsIcon>
                        <LogoIcon src={paperIcon} alt='Button Icon'/>
                    </ButtonsIcon>
                    <ButtonsIcon>
                        <LogoIcon src={searchIcon} alt='Button Icon'/>
                    </ButtonsIcon>
                    <ShoppingContent>
                        <ButtonsIcon>
                            <LogoIcon src={shoppingIcon} alt='Button Icon'/>
                        </ButtonsIcon>
                        {(product !== 0) ? (<CircleNumber>{product}</CircleNumber>) : <div/>}
                    </ShoppingContent>
                </ButtonsArea>
            </Container>
            <SideMenu>
                <Menu/>
            </SideMenu>
        </>
    );
}

export default Header;