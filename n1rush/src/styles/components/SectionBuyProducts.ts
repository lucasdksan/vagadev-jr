import styled from 'styled-components';
import { motion } from 'framer-motion';

import theme from '../colors/themes';

export const Container = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    flex-direction: column;
    width: 100%;
    height: 200px;
    position: fixed;
    z-index: 100;
    background-color: ${theme.colors.main_dark_blue};
    border: 1px solid ${theme.colors.main_blue};
    border-radius: 0px 0px 20px 20px;
    @media(min-width: 700px){
        height: 280px;
    }
    @media(min-width: 900px){
        justify-content: flex-start;
        padding: 50px;
        width: 40%;
        right: 0px;
        border-radius: 0px;
        height: 100vh;
    }
    @media(min-width: 1000px){
        top: 20px;
    }
`;
export const AreaTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30px;
    padding: 5px;
    margin-bottom: 30px;
`;
export const Title = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 28px;
    color: ${theme.colors.main_white};
`;
export const AreaInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 170px;
    flex-direction: row;
    overflow-x: auto;
    @media(min-width: 900px){
        flex-direction: column;
        justify-content: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`;
export const Infos = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    width: 280px;
    flex-direction: column;
    background-color: ${theme.colors.main_white};
    padding: 15px;
    border-radius: 10px;
    margin: 0px 5px;
    @media(min-width: 900px){
        width: 250px;
        height: 300px;
        margin-bottom: 20px;
        align-items: center;
    }   
`;
export const InfoName = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    color: ${theme.colors.main_dark_blue};
    @media(min-width: 900px){
        margin-bottom: 10px;
        text-align: center;
    }
`;
export const InfoValue = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    line-height: 21px;
    color: ${theme.colors.main_dark_blue};
`;
export const SectionInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;
export const InfoImage = styled.img`
    display: none;
    @media(min-width: 900px){
        display: block;
        width: 180px;
        height: 200px;
        margin-bottom: 15px;
    }
`;
