import React from 'react';

import { Container, 
        ButtonMenu, 
        IconMenu,
        LogoIcon,
        ButtonsArea,
        ButtonsIcon,
        CircleNumber,
        ShoppingContent } from '../styles/components/Header';

import menuIcon from '../assets/svgs/icon_hamburguer.svg';
import paperIcon from '../assets/svgs/paper-plane.svg';
import searchIcon from '../assets/svgs/search-solid.svg';
import shoppingIcon from '../assets/svgs/shopping-bag-solid.svg';
import logoIcon from '../assets/svgs/logo-icon.svg';

const Header = ()=>{
    return(
        <Container>
            <ButtonMenu>
                <IconMenu src={menuIcon} alt='Menu Icon'/>
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
                    <CircleNumber>2</CircleNumber>
                </ShoppingContent>
            </ButtonsArea>
        </Container>
    );
}

export default Header;