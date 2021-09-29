import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai'

import theme from '../colors/themes';

const stylesIcons = css`
    font-size: 35px;
    color: ${theme.colors.main_white};
    &:hover{
        color: ${theme.colors.main_blue};
    }
    @media(min-width: 700px){
        font-size: 45px;
    }
`;

export const Container = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${theme.colors.main_dark_blue};
    width: 65%;
    padding: 10px 25px;
    flex-direction: row;
    height: 80px;
    border-radius: 0px 0px 0px 15px;
    position: fixed;
    top: 60px;
    z-index: 100;
    right: 0;
    @media(min-width: 700px){
        height: 100px;
    }
    @media(min-width: 900px){
        width: 250px;
        flex-wrap: wrap;
        height: 180px;
    }
    @media(min-width: 1000px){
        top: 80px;
    }
`;
export const ButtonContact = styled.a`
    text-decoration: none;
    width: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        cursor: pointer;
    }
    @media(min-width: 700px){
        width: 70px;
    }
`;

export const IconWhats = styled(AiOutlineWhatsApp)`${stylesIcons}`;
export const IconEmail = styled(AiOutlineMail)`${stylesIcons}`;
export const IconInst = styled(AiOutlineInstagram)`${stylesIcons}`;
export const IconFace = styled(AiOutlineFacebook)`${stylesIcons}`;