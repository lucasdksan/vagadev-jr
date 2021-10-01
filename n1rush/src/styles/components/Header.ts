import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { AiOutlineSearch } from 'react-icons/ai'

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
    @media(min-width: 700px){
        justify-content: space-around;
    }
    @media(min-width: 1000px){
        height: 80px;
        padding: 30px 13px 20px 18px;
    }
`;
export const ButtonMenu = styled(motion.button)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    width: 30px;
    background-color: transparent;
    border: 0 none;
    outline: 0;
    cursor: pointer;
    @media (min-width: 1000px) {
        display: none;
    }
`;
export const AreaIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 160px;
    > .button-desk{
        display: none;
        @media (min-width: 1000px) {
            display: block;
            margin-right: 40px;
        }
    }
    > .area-desk{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    @media(min-width: 500px){
        width: 220px;
    }
`;
export const IconMenu = styled.img`
    width: 100%;
    height: 100%;
    margin-right: 28px;
    @media(min-width: 500px){
        margin-right: 80px;
    }
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
    @media(min-width: 700px){
        width: 360px;
        justify-content: space-around;
    }
    @media(min-width: 1000px){
        width: 480px;
    }
`;
export const TextIcon = styled.h2`
    display: none;
    @media(min-width: 700px){
        display: block;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: ${theme.colors.main_white};
    }
`;
export const ButtonsIcon = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 25px;
    height: 24px;
    &:hover{
        cursor: pointer;
    }
    @media(min-width: 700px){
        width: 150px;
        border-right: 1px solid ${theme.colors.main_white};
        padding: 0px 25px 0px 0px;
    }
`;
export const ShoppingContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    @media(min-width: 700px){
        >.last{
            width: 50px;
        }
        > a{
            border-right: none;
            padding-left: 30px;
            @media(min-width: 1000px){
                padding-left: 5px;
            }
        }
    }
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
export const AreaSearch = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.main_dark_blue};
    width: 100%;
    padding: 10px 25px;
    flex-direction: row;
    height: 80px;
    border-radius: 0px 0px 15px 15px;
    position: fixed;
    top: 60px;
    z-index: 100;
    right: 0;
    @media(min-width: 700px){
        height: 100px;
        padding: 10px 150px;
    }
    @media(min-width: 900px){
        width: 70%;
        border-radius: 0px 0px 0px 20px;
    }
    @media(min-width: 1000px){
        top: 80px;
    }
`;
export const Search = styled.input`
    height: 35px;
    width: 80%;
    border: 0 none;
    outline: 0;
    border-radius: 10px 0px 0px 10px;
    padding: 10px;
    color: ${theme.colors.main_dark_blue};
    @media(min-width: 700px){
        height: 50px;
    }
`;
export const ButtonSearch = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 35px;
    background-color: ${theme.colors.main_blue};
    border-radius: 0px 10px 10px 0px;
    border: 0 none;
    outline: 0;
    transition: linear 0.5s;
    @media(min-width: 700px){
        height: 50px;
        width: 80px;
    }
`;
export const IconSearch = styled(AiOutlineSearch)`${stylesIcons}`;