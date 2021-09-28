import React from 'react';

import { Container } from '../styles/components/AllShelf';

import ShelfItem from './ShelfItem';

import shelfData from '../data/ShelfData';

const AllShelf = ()=>{
    return(
        <Container>
            {
                shelfData.map((item)=>{
                    return(
                        <ShelfItem
                            key={item.key}
                            title={item.text}
                            value={item.value}
                            image={item.image}
                        />
                    );
                })
            }
        </Container>
    );
}

export default AllShelf;