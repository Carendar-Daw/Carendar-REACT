import React from "react";
import NewComponent from "@NewRute/NewComponent";
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

const HolaMundo = () => {
    return (
        <div>
            <h1>Hola mundo✨</h1>
            <NewComponent />
            <DatePicker />
        </div>
    );
};

export default HolaMundo;