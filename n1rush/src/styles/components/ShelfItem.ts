import styled from 'styled-components';
import theme from '../colors/themes';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 260px;
    height: 450px;
    background: ${theme.colors.main_white};
    box-shadow: 0px 4px 20px 7px rgba(0, 0, 0, 0.07);
    border-radius: 10px;
`;
export const AreaImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 24px 0px 10px 0px;
    margin-bottom: 10px;
`;
export const ImgGame = styled.img`
    width: 100%;
    height: 100%;
`;
export const AreaInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 140px;
    padding: 15px 24px;
    background-color: ${theme.colors.main_sub_2_white};
    border-top: 2px solid ${theme.colors.main_blue};
`;
export const Infos = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    height: 48px;
    flex-direction: column;
`;
export const InfoName = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: ${theme.colors.main_dark_blue};
`;
export const InfoValue = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
    color: ${theme.colors.main_dark_blue};
`;
export const BuyButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 162px;
    height: 35px;
    background: ${theme.colors.main_blue};
    border-radius: 5px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: ${theme.colors.main_white};
    border: 0 none;
    outline: 0;
    padding: 0px 18px;
`;
export const ImgIconConfirmed = styled.img`
    z-index: 1;
    position: relative;
    top: -23px;
    left: 8px;
    width: 68px;
    height: 79px;
`;
