import styled from 'styled-components';
import theme from '../colors/themes';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 240px;
    height: 423px;
    background: ${theme.colors.main_white};
    box-shadow: 0px 4px 20px 7px rgba(0, 0, 0, 0.07);
    border-radius: 10px;
`;
export const ImageArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 15px 5px;
    width: 100%;
    height: 100%;
`;
export const ImgProduct = styled.img`
    width: 100%;
    height: 100%;
`;
export const InfoArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 150px;
    background: ${theme.colors.main_sub_2_white};
    padding: 15px 24px;
`;
export const Title = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: ${theme.colors.main_dark_blue};
`;
export const Value = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
    color: ${theme.colors.main_dark_blue};
`;
export const BuyButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 162px;
    height: 35px;
    background-color: ${theme.colors.main_blue};
    border-radius: 5px;
    border: 0 none;
    outline: 0;
`;
export const ButtonText = styled.h3`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: ${theme.colors.main_white};
`;