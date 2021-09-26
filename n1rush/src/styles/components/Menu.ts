import styled from 'styled-components';
import theme from '../colors/themes';

export const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    width: 100%;
    height: 100%;
    padding: 90px 30px 20px 30px;
    background-color: ${theme.colors.main_dark_blue};
    > div:last-child{
        border-bottom: none;
    }
`;
export const SectionsButtons = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    padding: 5px 0px 20px 0px;
    margin-bottom: 5px;
    border-bottom: 1px solid ${theme.colors.main_line_cor};
`;
export const TitleSection = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 28px;
    margin-left: 30px;
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
    }
`;
export const Button = styled.a`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: ${theme.colors.main_white};
    text-decoration: none;
`;