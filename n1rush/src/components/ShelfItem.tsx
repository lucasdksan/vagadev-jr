import React, { useContext, useState } from 'react';

import { Container,
        AreaImg,
        ImgGame,
        AreaInfo,
        BuyButton,
        InfoName,
        InfoValue,
        Infos,
        ImgIconConfirmed } from '../styles/components/ShelfItem';

import { ConfirmedContext } from '../contexts/ConfirmedBuy';
import theme from '../styles/colors/themes';

import marioImg from '../assets/icons/mario_small.png';

interface ShelfProps {
    image: string;
    title: string;
    value: string;
}

const ShelfItem:React.FC <ShelfProps> = ({ image, title, value })=>{
    const { ProductUp, SetProductsListAdd } = useContext(ConfirmedContext);
    const [ confirmedBuy, setConfirmedBuy ] = useState(false);
    const [ buyText, setBuyText ] = useState('COMPRAR');
    const [ background, setBackground ] = useState(theme.colors.main_blue);

    function BuyElement(){
        ProductUp();
        setConfirmedBuy(true);
        SetProductsListAdd({name: title, value, image});
        setBuyText('COMPRADO!');
        setBackground(theme.colors.main_dark_blue);
    }
    
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
                <BuyButton 
                    onClick={BuyElement} 
                    disabled={confirmedBuy}
                    backgroundColor={background}
                >
                    { buyText }
                    { confirmedBuy ? <ImgIconConfirmed src={marioImg}/> : <div/> }
                </BuyButton>
            </AreaInfo>
        </Container>
    );
}

export default ShelfItem;