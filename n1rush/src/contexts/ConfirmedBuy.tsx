import React, { createContext, useState } from 'react';

import ClickBuy from '../components/ClickBuy';

interface ConfirmedProps {
    product: number; 
    ProductUp: () => void; 
    closeConfirmedBuy: ()=> void;
}

export const ConfirmedContext = createContext({} as ConfirmedProps);

const ConfirmedProvider:React.FC <ConfirmedProps> = ({ children, ...rest })=>{
    const [ product, setProduct ] = useState(rest.product ?? 0);
    const [ isConfirmedBuyOpen, setIsConfirmedBuyOpen ] = useState(false);
    function ProductUp(){
        setProduct(1 + product);
        setIsConfirmedBuyOpen(true);
    }
    function closeConfirmedBuy(){
        setIsConfirmedBuyOpen(false);
    }
    return (
        <ConfirmedContext.Provider
            value={{
                product,
                ProductUp,
                closeConfirmedBuy
            }}
        >
            { children }
            { isConfirmedBuyOpen && <ClickBuy/> }
        </ConfirmedContext.Provider>
    );
}

export default ConfirmedProvider;