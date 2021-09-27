import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineWhatsApp, AiOutlineMail, AiOutlineSearch } from 'react-icons/ai'

import theme from '../colors/themes';

const stylesIcons = css`
    font-size: 35px;
    color: ${theme.colors.main_white};
    &:hover{
        color: ${theme.colors.main_blue};
    }
`;

export const Container = styled(motion.header)`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    width: 100%;
    height: 60px;
    padding: 16px 13px 10px 18px;
    background-color: transparent;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
`;
export const ButtonMenu = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    width: 30px;
    background-color: transparent;
    border: 0 none;
    outline: 0;
`;
export const IconMenu = styled.img`
    width: 100%;
    height: 100%;
`; 
export const LogoIcon = styled.img`
    width: 110px;
    height: 24px;
    color: ${theme.colors.main_white};
`;
export const ButtonsArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 115px;
`;
export const ButtonsIcon = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 25px;
    height: 24px;
`;
export const ShoppingContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;
export const CircleNumber = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 23px;
    height: 23px;
    background-color: ${theme.colors.main_blue};
    border-radius: 50%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    color: ${theme.colors.main_white};
    margin-left: -10px;
    margin-top: -5px;
`;
export const SectionBuyProducts = styled(motion.div)`
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
`;
export const AreaTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30px;
    padding: 5px;
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
    justify-content: space-around;
    width: 100%;
    height: 170px;
    flex-direction: row;
`;
export const Infos = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    height: 100px;
    flex-direction: column;
    border: 1px solid ${theme.colors.main_white};
    background-color: ${theme.colors.main_blue};
    padding: 15px;
    border-radius: 10px;
`;
export const InfoName = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    color: ${theme.colors.main_white};
`;
export const InfoValue = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    line-height: 21px;
    color: ${theme.colors.main_white};
`;
export const AreaSearch = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.main_dark_blue};
    width: 100%;
    padding: 10px 25px;
    flex-direction: row;
    height: 60px;
    border-radius: 0px 0px 15px 15px;
    position: fixed;
    top: 60px;
    z-index: 100;
    right: 0;
`;
export const Search = styled.input`
    height: 35px;
    width: 80%;
    border: 0 none;
    outline: 0;
    border-radius: 10px 0px 0px 10px;
    padding: 10px;
    color: ${theme.colors.main_dark_blue};
`;
export const ButtonSearch = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 40px;
    background-color: ${theme.colors.main_blue};
    border-radius: 0px 10px 10px 0px;
    border: 0 none;
    outline: 0;
    &:hover{
        cursor: pointer;
        background-color: ${theme.colors.main_white};
    }
`;
export const AreaContact = styled(motion.div)`
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
`;
export const IconWhats = styled(AiOutlineWhatsApp)`${stylesIcons}`;
export const IconEmail = styled(AiOutlineMail)`${stylesIcons}`;
export const IconInst = styled(AiOutlineInstagram)`${stylesIcons}`;
export const IconFace = styled(AiOutlineFacebook)`${stylesIcons}`;
export const IconSearch = styled(AiOutlineSearch)`${stylesIcons}`;