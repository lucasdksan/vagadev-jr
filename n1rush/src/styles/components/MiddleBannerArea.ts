import styled from "styled-components";
import theme from "../colors/themes";

export const MiddleBanner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-bottom: 10px;
`;
export const MiddleBannerImg = styled.img`
    width: 100%;
    height: 190px;
`;
export const RectInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 12px;
    flex-direction: row;
    border-left: 6px solid ${theme.colors.main_dark_blue};
    background-color: ${theme.colors.main_blue};
    width: 100%;
    height: 30px;
    border-radius: 0px 0px 5px 5px;
`;
export const RectInfoTitle = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: ${theme.colors.main_dark_blue};
`;
export const RectInfoLine = styled.span`
    display: flex;
    flex: 1;
    width: auto;
    min-width: 10px;
    margin: 0px 10px;
    height: 0px;
    border: 1px solid ${theme.colors.main_dark_blue};
`;
