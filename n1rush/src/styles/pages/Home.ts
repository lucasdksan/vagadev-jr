import styled, { css } from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import image from '../../assets/img/principal_banner_mobile.jpg';
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
`;
export const BannerImg = styled.div`
    width: 100%;
    height: 460px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background-image: url(${image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;
export const BannerInfo = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    padding: 14px 29px;
    width: 100%;
    height: 210px;
    background-color: rgba(0, 0, 0, 0.65);
`;
export const BannerInfoH1 = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 26px;
    line-height: 30px;
    color: ${theme.colors.main_white};
    margin-bottom: 10px;
`;
export const ValueArea = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: row;
    width: 100%;
    height: 48px;
    margin-bottom: 5px;
`;
export const BannerInfoValue = styled.h2`
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 48px;
    line-height: 48px;
    color: ${theme.colors.main_blue};
`;
export const BannerInfoSubValue = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 28px;
    line-height: 33px;
    color: ${theme.colors.main_blue};
`;
export const BannerInfop = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 19px;
    text-align: right;
    color: ${theme.colors.main_white};
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