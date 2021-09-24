import React from 'react';

import { MiddleBanner,
        MiddleBannerImg,
        RectInfo,
        RectInfoLine,
        RectInfoTitle  } from '../styles/components/MiddleBannerArea';

interface MiddleProps {
    image: string;
    title: string;
}

const MiddleBannerArea: React.FC<MiddleProps>  = ({ image, title })=>{
    return(
        <MiddleBanner>
            <MiddleBannerImg src={image} alt='Image Middle Banner'/>
            <RectInfo>
                <RectInfoTitle>{title}</RectInfoTitle>
                <RectInfoLine/>
            </RectInfo>
        </MiddleBanner>
    );
}

export default MiddleBannerArea;