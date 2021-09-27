import React from 'react';

import { BannerInfo,
        BannerInfoH1,
        BannerInfoSubValue,
        BannerInfoValue,
        BannerInfop,
        Container,
        ValueArea } from '../styles/components/BannerImg';

interface BannerProps {
    name: string;
    text: string;
    valueF: string;
    valueS: string;
    image: string;
}

const BannerImg:React.FC <BannerProps>= ({ name, image, text, valueF, valueS })=>{
    return(
        <Container
            backgroundImage={image}
        >
            <BannerInfo>
                <BannerInfoH1>{name}</BannerInfoH1>
                <ValueArea>
                    <BannerInfoValue>{valueF}</BannerInfoValue>
                    <BannerInfoSubValue>{valueS}</BannerInfoSubValue>
                </ValueArea>
                <BannerInfop>
                    {text}
                </BannerInfop>
            </BannerInfo>
        </Container>
    );
}

export default BannerImg;