import React from 'react';
import Lottie from 'react-lottie';

import { Container, Text } from '../styles/components/Ops';

import Animation from '../assets/animation/sleepy-cat.json';

const Ops = ()=>{
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Animation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return(
        <Container>
            <Lottie
                options={defaultOptions}
                height={'100%'}
                width={120}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0px 0px 10px 10px',
                }}
            />
            <Text>OOPS!!!!</Text>
            <Text>Sua sacola está vazia!</Text>
        </Container>
    );
}

export default Ops;