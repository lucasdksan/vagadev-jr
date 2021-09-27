import styled, { css } from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import theme from '../colors/themes';

const iconsStyles = css`
    color: ${theme.colors.main_black};
    width: 20px;
    height: 30px;
`;

export const Container = styled.main`
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
    margin-bottom: 100px;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
`;
export const Banner = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    height: 520px;
    @media(min-width: 500px){
        height: 680px;
    }
`;
export const SliderNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 53px;
`;
export const SlideNavTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 18px 22px;
    border-radius: 0px 0px 0px 10px;
    flex: 1;
    height: 100%;
    width: 100%;
    background-color: ${theme.colors.main_blue};
`;
export const NavTitle = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: ${theme.colors.main_white};
`;
export const SliderNavButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px;
    width: 140px;
    height: 100%;
    background-color: ${theme.colors.main_dark_blue};
`;
export const NumberBlock = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: ${theme.colors.main_white};
`;
export const ButtonArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 18px;
    width: 50px;
    flex-direction: row;
`;
export const ButtonNavigation = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0 none;
    background-color: transparent;
    outline: 0;
    width: 10px;
    height: 18px;
`;
export const IconMenu = styled.img`
    width: 100%;
    height: 100%;
`; 
export const MiddleBanner = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px 19px;
    width: 100%;
`;
export const ShelfArea = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    height: 590px;
    padding: 20px;
`;
export const TitleAreaShelf = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    width: 100%;
    height: 20px;
    margin-bottom: 30px;
`;
export const ShelfTitleIcon = styled.img`
    width: 18px;
    height: 18px;
    margin-right: 10px;
`;
export const TitleShelf = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: ${theme.colors.main_dark_blue};
`;
export const ShelfElementArea = styled.article`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    flex: 1;
    width: 100%;
    height: auto;
`;
export const ShelfButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0 none;
    background-color: transparent;
    outline: 0;
    width: 20px;
    height: 30px;
`;

export const LeftArrow = styled(IoIosArrowBack)`${iconsStyles}`;
export const RightArrow = styled(IoIosArrowForward)`${iconsStyles}`;