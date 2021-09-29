import styled from 'styled-components';

import theme from '../colors/themes';

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
    @media(min-width: 700px){
        flex-direction: row;
        justify-content: space-between;
        height: 760px;
    }
`;
export const SliderNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 53px;
    @media(min-width: 700px){
        position: absolute;
        width: 400px;
        height: 60px;
        top: 320px;
        right: -170px;
        transform: rotateZ(90deg);
    }
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
    @media(min-width: 700px){
        border-radius: 0px 0px 0px 10px;
    }
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
    @media(min-width: 700px){
        width: 100px;
        height: 100%;
        border-radius: 0px 0px 10px 0px;
    }
`;
export const NumberBlock = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: ${theme.colors.main_white};
    @media(min-width: 700px){
        transform: rotateZ(-90deg);
    }
`;
export const ButtonArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 18px;
    width: 50px;
    flex-direction: row;
    @media(min-width: 700px){
        transform: rotateZ(-90deg);
        height: 20px;
        width: 35px;
    }
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
    cursor: pointer;
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
    @media(min-width: 700px){
        flex-direction: row;
        margin-top: -120px;
    }
    @media(min-width: 900px){
        margin-top: -150px;
    }
`;
export const ShelfArea = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    height: 590px;
    padding: 20px;
    @media(min-width: 900px){
        padding: 60px 40px 0px 40px;
    }
    @media(min-width: 1000px){
        padding: 60px 100px 0px 100px;
    }
    @media(min-width: 1260px){
        padding: 60px 180px 0px 180px;
    }
`;
export const TitleAreaShelf = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    width: 100%;
    height: 20px;
    margin-bottom: 30px;
    @media(min-width: 900px){
        margin-bottom: 0px;
        padding-left: 50px;
    }
    @media(min-width: 1100px){
        margin-bottom: 60px;
    }
`;
export const ShelfTitleIcon = styled.img`
    width: 18px;
    height: 18px;
    margin-right: 10px;
    @media(min-width: 900px){
        width: 22px;
        height: 22px;
    }
`;
export const TitleShelf = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: ${theme.colors.main_dark_blue};
    @media(min-width: 900px){
        font-size: 26px;
    }
`;
export const ShelfElementArea = styled.article`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    flex: 1;
    width: 100%;
    height: auto;
    > .carousel{
        width: 100%;
        > div:first-child button.rec-arrow {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            font-size: 25px;
            box-shadow: none;
            border: 0 none;
            outline: 0;
            border-radius: none;
            background-color: transparent;
            color: ${theme.colors.main_black};
        }
        > div:first-child div.rec-slider-container{
            margin: 0px 0px;
        }
        > div.rec-pagination button.rec-dot_active{
            background-color: ${theme.colors.main_dark_blue};
            border: 0px none;
            box-shadow: none;
        }
    }
    @media(min-width: 900px){
        display: none;
    }
`;