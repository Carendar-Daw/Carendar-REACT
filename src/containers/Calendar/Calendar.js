import React from 'react'
import { WrapperMenu} from './Calendar.styled';
import Cosa from "@Components/Calendar/Cosa/Cosa";
import Calendarapp from "@Components/Calendar/Calendar/Calendarapp";

const Calendar = () => {
    return (

        <WrapperMenu>
            <Cosa/>
            <Calendarapp/>
        </WrapperMenu>
    )
}

export default Calendar;
