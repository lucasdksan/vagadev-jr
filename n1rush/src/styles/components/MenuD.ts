import styled from 'styled-components';
import { motion } from 'framer-motion';

import theme from '../colors/themes';

export const Container = styled(motion.nav)`
    display: none;
    @media(min-width: 1000px){
        position: relative;
        z-index: 10;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width: 560px;
        height: 250px;
        padding: 35px 30px;
        background-color: ${theme.colors.main_dark_blue};
        box-shadow: 10px 10px 1px ${theme.colors.main_blue};
        border-radius: 5px;
        border: 2px solid ${theme.colors.main_blue};
        position: relative;
        top: 34px;
        left: -35px;
    }
`;
export const SectionsButtons = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
`;
export const TitleSection = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 16px;
    line-height: 19px;
    margin-left: 20px;
    margin-bottom: 5px;
    color: ${theme.colors.main_white};
`;
export const AreaButtons = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 100%;
    list-style: none;
`;
export const ButtonElement = styled.li`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    padding: 7px 16px 7px 16px;
    width: 100%;
    height: 36px;
    margin-bottom: 5px;
    border-radius: 5px;
    &:hover{
        background-color: ${theme.colors.main_blue};
        cursor: pointer;
    }
`;
export const Button = styled.a`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;    
    line-height: 16px;
    color: ${theme.colors.main_white};
    text-decoration: none;
`;
export const Triangle = styled.div`
    width: 0; 
    height: 0; 
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid ${theme.colors.main_blue};
    position: absolute;
    top: -15px;
`;