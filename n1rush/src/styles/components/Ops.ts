import styled from 'styled-components';

import theme from '../colors/themes';

export const Container = styled.div`
    width: 100%;
    height: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 15px;
`;
export const Text = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    color: ${theme.colors.main_white};
`;
