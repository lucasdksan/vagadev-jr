import styled from 'styled-components';
import theme from '../colors/themes';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
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