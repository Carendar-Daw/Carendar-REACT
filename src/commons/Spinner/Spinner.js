import React from 'react';
import {
  Animation, InnerOne, InnerTwo, InnerThree, Center
} from './Spinner.styled';

const Spinner = () => (
    <Center>
        <Animation>
            <InnerOne />
            <InnerTwo />
            <InnerThree />
        </Animation>
    </Center>

);

export default Spinner;
