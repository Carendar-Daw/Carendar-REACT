import React, { useEffect, useState } from 'react';
import { WrapperPie, Title, SubTitle } from './productsStadistics.styled';

const productsStatiscs = ({ products, loadingSpinner }) => {
    const [isData, setIsData] = useState(false);

    useEffect(() => {
        if (products) setIsData(true);
    }, [loadingSpinner]);

    return (
        <WrapperPie>
            <Title>Products</Title>
            {isData ?
                (
                    <>
                        <SubTitle>Your products stadistics</SubTitle>
                        <p>Has gastado {products} $ en productos.</p>
                    </>
                ) : (
                    <p>Choose some date...</p>
                )}

        </WrapperPie>
    );
};

export default productsStatiscs;
