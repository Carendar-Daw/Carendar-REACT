import React from 'react';
import { WrapperPrices, WrapperAlignBottom } from './TotalPrice.styled';

const TotalPrice = () => {
  return (
    <WrapperPrices>
      <WrapperAlignBottom>
        <h2><strong>Subtotal:</strong> 192.56</h2>
        <h1><strong>Total:</strong> 200.56</h1>
      </WrapperAlignBottom>
    </WrapperPrices>
  );
};

export default TotalPrice;
