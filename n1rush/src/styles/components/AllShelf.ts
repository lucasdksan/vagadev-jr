import styled from 'styled-components';

export const Container = styled.article`
    display: none;
    @media(min-width: 900px){
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: row;
        flex: 1;
        width: 100%;
        height: auto;
    }
`;
