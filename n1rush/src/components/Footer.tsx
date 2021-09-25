import React from 'react';

import { Container,
        FirstBlock,
        LogoImg,
        SecondBlock,
        AreaText,
        Text } from '../styles/components/Footer';

import logoFooter from '../assets/icons/logo_header 1.png';

const Footer = ()=>{
    return(
        <Container>
            <FirstBlock>
                <LogoImg
                    src={logoFooter}
                    alt='Footer logo'
                />
            </FirstBlock>
            <SecondBlock>
                <AreaText>
                    <Text>Agência N1 - Todos os direitos reservados</Text>
                </AreaText>
            </SecondBlock>
        </Container>
    );
}

export default Footer;