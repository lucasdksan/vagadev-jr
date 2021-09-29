import React from 'react';

import { ButtonContact, 
        Container, 
        IconEmail, 
        IconFace, 
        IconInst, 
        IconWhats } from '../styles/components/AreaContact';

interface ContactProps {
    contactPosition: number;
}

const AreaContact:React.FC <ContactProps>= ({ contactPosition })=>{

    return(
        <Container
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
            <ButtonContact href="https://wa.me/2122982332?text=Olá, quero ver todo o seu catálogo." target='_blank'><IconWhats/></ButtonContact>
            <ButtonContact href='https://www.instagram.com/agencian1/' target='_blank'><IconInst/></ButtonContact>
            <ButtonContact href='https://www.facebook.com/search/top?q=agencia%20n1' target='_blank'><IconFace/></ButtonContact>
            <ButtonContact href="mailto:contato@agencian1.com.br" target='_blank'><IconEmail/></ButtonContact>
        </Container>
    );
}

export default AreaContact;