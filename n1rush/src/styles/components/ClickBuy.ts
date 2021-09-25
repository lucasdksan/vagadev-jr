import styled from 'styled-components';
import theme from '../colors/themes';

export const Container = styled.section`
    background-color: rgba(8, 65, 84, 0.62);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    padding: 0px 15px;
`;
export const Card = styled.div`
    width: 100%;
    height: 500px;
    background: ${theme.colors.main_white};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`;
export const FirstBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
`;
export const ButtonCancel = styled.button`
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0 none;
    outline: 0;
    background-color: transparent;
    padding: 6px 6px;
`;
export const CancelIcon = styled.img`
    width: 100%;
    height: 100%;
`;
export const TargetInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    height: 95px;
    padding: 16px 8px 0px 8px;
`;
export const Line = styled.span`
    width: 50px;
    height: 0px;
    border: 1px solid #084154;
`;
export const AreaInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;
export const Title = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    color: ${theme.colors.main_dark_blue};
`;
export const ImgMario = styled.img`
    height: 270px;
    width: 210px;
`;