import React from 'react';
import {
  Animation, InnerOne, InnerTwo, InnerThree,
} from './Spinner.styled';

const Spinner = () => (
  <Animation>
    <InnerOne />
    <InnerTwo />
    <InnerThree />
  </Animation>
);

export default Spinner;
