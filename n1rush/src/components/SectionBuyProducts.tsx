import React, { useContext } from 'react';

import { AreaInfo, 
         InfoImage, 
         SectionInfo, 
         Container, 
         AreaTitle,
         InfoName,
         InfoValue,
         Infos,
         Title } from '../styles/components/SectionBuyProducts';

import { ConfirmedContext } from '../contexts/ConfirmedBuy';
import Ops from './Ops';

interface SectionProps {
    bagPosition: number;
}

const SectionBuyProducts:React.FC <SectionProps>= ({ bagPosition })=>{
    const { product, unituProducts } = useContext(ConfirmedContext);

    return(
        <Container
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
                                <InfoImage src={itens.image}/>
                                <SectionInfo>
                                    <InfoName>{itens.name}</InfoName>
                                    <InfoValue>{itens.value}</InfoValue>
                                </SectionInfo>
                            </Infos>
                        );
                    })
                }
            </AreaInfo>
        </Container>
    );
}

export default SectionBuyProducts;