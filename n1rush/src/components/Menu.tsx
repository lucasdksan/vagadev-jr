import React from "react";

import { Container,
        AreaButtons,
        Button,
        ButtonElement,
        SectionsButtons,
        TitleSection,
         } from '../styles/components/Menu';

const Menu = ()=>{
    return(
        <Container>
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

export default Menu;