import React from 'react';

import { Container,
        Card,
        FirstBlock,
        ButtonCancel,
        CancelIcon,
        AreaInfo,
        Title,
        Line,
        TargetInfo,
        ImgMario } from '../styles/components/ClickBuy';

import cancelIcon from '../assets/icons/close btn.png';
import marioIcon from '../assets/icons/mario_big.png';

const ClickBuy = ()=>{
    return(
        <Container>
            <Card>
                <FirstBlock>
                    <ButtonCancel><CancelIcon src={cancelIcon} alt='Icon Cancel'/></ButtonCancel>
                </FirstBlock>
                <AreaInfo>
                    <Line/>
                    <TargetInfo>
                        <Title>Pedido realizado com sucesso!</Title>
                    </TargetInfo>
                    <Line/>
                </AreaInfo>
                <ImgMario src={marioIcon} alt='Icon Mario'/>
            </Card>
        </Container>
    );
}

export default ClickBuy;