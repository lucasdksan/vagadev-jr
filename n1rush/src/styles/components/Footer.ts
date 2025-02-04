import styled from 'styled-components';
import theme from '../colors/themes';

export const Container = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 68px;
    bottom: 0;
    left: 0;
    right: 0;
`;
export const FirstBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 79px;
    height: 68px;
    background: ${theme.colors.main_dark_blue};
    padding: 20px 20px 20px 16px;
    @media(min-width: 500px){
        width: 200px;
        flex-direction: row;
        justify-content: flex-end;
    }
    @media(min-width: 700px){
        width: 300px;
    }
    @media(min-width: 900px){
        width: 500px;
    }
`;
export const LogoImg = styled.img`
    width: 43px;
    height: 28px;
`; 
export const SecondBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 68px;
    background: ${theme.colors.main_blue};
    padding: 20px 20px 20px 16px;
    @media(min-width: 500px){
        justify-content: flex-start;
    }
`;
export const AreaText = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 200px;
    @media(min-width: 700px){
        width: 300px;
    }
`;
export const Text = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: ${theme.colors.main_white};
    @media(min-width: 700px){
        font-size: 14px;
    }
`;