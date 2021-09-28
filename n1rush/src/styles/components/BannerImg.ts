import styled from 'styled-components';
import { motion } from 'framer-motion';

import theme from '../colors/themes';

interface ContainerProps{
    backgroundImage: string;
}

export const Container = styled(motion.div)<ContainerProps>`
    width: 100%;
    height: 460px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-clip: border-box;
    @media(min-width: 500px){
        height: 600px;
    }
    @media(min-width: 700px){
        background-size: cover;
        background-position: center;
        flex-direction: column;
        height: 100%;
    }
`;
export const BannerInfo = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    padding: 14px 29px;
    width: 100%;
    height: 210px;
    background-color: rgba(0, 0, 0, 0.65);
    @media(min-width: 500px){
        height: 260px;
    }
    @media(min-width: 700px){
        background-color: transparent;
        width: 400px;
        margin-right: 18%;
    }
    @media(min-width: 900px){
        margin-right: 19%;
    }
`;
export const BannerInfoH1 = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 26px;
    line-height: 30px;
    color: ${theme.colors.main_white};
    margin-bottom: 10px;
    @media(min-width: 500px){
        font-size: 35px;
    }
    @media(min-width: 700px){
        font-size: 40px;
    }
`;
export const ValueArea = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: row;
    width: 100%;
    height: 48px;
    margin-bottom: 5px;
    @media(min-width: 500px){
        height: 55px;
    }
    @media(min-width: 700px){
        height: 70px;
    }
`;
export const BannerInfoValue = styled.h2`
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 48px;
    line-height: 48px;
    color: ${theme.colors.main_blue};
    @media(min-width: 500px){
        font-size: 55px;
        line-height: 55px;
    }
    @media(min-width: 700px){
        font-size: 65px;
        line-height: 65px;
    }
`;
export const BannerInfoSubValue = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 28px;
    line-height: 33px;
    color: ${theme.colors.main_blue};
    @media(min-width: 500px){
        font-size: 35px;
        line-height: 40px;
    }
    @media(min-width: 700px){
        margin-top: 10px;
        font-size: 28px;
        line-height: 33px;
    }
`;
export const BannerInfop = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 19px;
    text-align: right;
    color: ${theme.colors.main_white};
    @media(min-width: 500px){
        font-size: 14px;
        line-height: 19px;
    }
    @media(min-width: 700px){
        font-size: 16px;
        line-height: 155%;
    }
`;