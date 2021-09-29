import React, { useEffect, useState } from 'react';

import { Container,
        AreaButtons,
        Button,
        ButtonElement,
        SectionsButtons,
        TitleSection,
        Triangle } from '../styles/components/MenuD';

interface MenuProps{
    confirmed: boolean;
    hoverConfirmed: boolean;
}

const MenuD:React.FC <MenuProps> = ({ confirmed, hoverConfirmed })=>{
    const [ opacityAnimate, setOpacityAnimate ] = useState(0);

    useEffect(()=>{
        if(confirmed && hoverConfirmed){
            setOpacityAnimate(1);
        } else if(confirmed && !hoverConfirmed){
            setOpacityAnimate(1);
        } else if(!confirmed && !hoverConfirmed){
            setOpacityAnimate(0);
        } else if(!confirmed && hoverConfirmed){
            setOpacityAnimate(1);
        } else {
            setOpacityAnimate(0);
        }
    },[confirmed, hoverConfirmed]);

    const container = {
        hidden: { opacity: 0 },
        visible: {
          opacity: opacityAnimate,
          transition: {
            delayChildren: 0.8,
            staggerChildren: 0.2,
            when: 'beforeChildren'
          }
        }
    };

    return(
        <Container
            initial = 'hidden'
            animate = 'visible'
            variants = {container}
            onHoverEnd = {()=>setOpacityAnimate(0)}
        >
            <Triangle/>
            <SectionsButtons>
                <TitleSection>Luta</TitleSection>
                <AreaButtons>
                    <ButtonElement><Button>Mortal Kombat</Button></ButtonElement>
                    <ButtonElement><Button>Smash Bros</Button></ButtonElement>
                    <ButtonElement><Button>Killer Instict</Button></ButtonElement>
                    <ButtonElement><Button>DBZ Kakarot</Button></ButtonElement>
                </AreaButtons>
            </SectionsButtons>
            <SectionsButtons>
                <TitleSection>Ação / Aventura</TitleSection>
                <AreaButtons>
                    <ButtonElement><Button>GTA V</Button></ButtonElement>
                    <ButtonElement><Button>Tomb Raider</Button></ButtonElement>
                    <ButtonElement><Button>HALO</Button></ButtonElement>
                    <ButtonElement><Button>Call of Duty</Button></ButtonElement>
                </AreaButtons>
            </SectionsButtons>
            <SectionsButtons>
                <TitleSection>Corrida</TitleSection>
                <AreaButtons>
                    <ButtonElement><Button>NEED FOR SPEED</Button></ButtonElement>
                    <ButtonElement><Button>Forza Horizon</Button></ButtonElement>
                </AreaButtons>
            </SectionsButtons>
        </Container>
    );
}

export default MenuD;