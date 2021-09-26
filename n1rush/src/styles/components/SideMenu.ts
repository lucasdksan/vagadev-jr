import styled from 'styled-components';

export const Container = styled.div`
    z-index: 10;
    position: fixed;
    right: 0;
    width: 100%;
    height: 100%;
    transform: translateX(100%);
    transition: .5s transform  cubic-bezier(0.5, 0, 0, 1);
    &.open{
        transform: translateX(0);
    }
    @media (min-width: 1024px) {
        &.scrollOpen{
            transform: translateX(0);
        }
        &.scrollOpen .active--close{
            display: none;
        }
    }
`;