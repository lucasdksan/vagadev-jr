import React from 'react';

import { Container,
        ImageArea,
        ImgProduct,
        InfoArea,
        ButtonText,
        BuyButton,
        Title,
        Value } from '../styles/components/ShelfItem';

interface ShelfProps {
    image: string;
    title: string;
    value: string;
}

const ShelfItem:React.FC <ShelfProps> = ({ image, title, value })=>{
    return(
        <Container>
            <ImageArea>
                <ImgProduct src={image} alt='Image Product'/>
            </ImageArea>
            <InfoArea>
                <Title>{title}</Title>
                <Value>{value}</Value>
                <BuyButton><ButtonText>COMPRAR</ButtonText></BuyButton>
            </InfoArea>
        </Container>
    );
}

export default ShelfItem;