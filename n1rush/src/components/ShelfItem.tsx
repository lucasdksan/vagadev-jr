import React from 'react';

import { Container,
        AreaImg,
        ImgGame,
        AreaInfo,
        BuyButton,
        InfoName,
        InfoValue,
        Infos } from '../styles/components/ShelfItem';

interface ShelfProps {
    image: string;
    title: string;
    value: string;
}

const ShelfItem:React.FC <ShelfProps> = ({ image, title, value })=>{
    return(
        <Container>
            <AreaImg>
                <ImgGame src={image} alt='Game Image'/>
            </AreaImg>
            <AreaInfo>
                <Infos>
                    <InfoName>{title}</InfoName>
                    <InfoValue>{value}</InfoValue>
                </Infos>
                <BuyButton>COMPRAR</BuyButton>
            </AreaInfo>
        </Container>
    );
}

export default ShelfItem;