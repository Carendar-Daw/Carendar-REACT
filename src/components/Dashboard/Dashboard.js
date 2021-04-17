import React from 'react'
import { WrapperMenu, IteamMenu } from './Dashboard.styled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = () => {
    return (

        <WrapperMenu>
            <IteamMenu>
                <FontAwesomeIcon className={'icon'} icon={'calendar-alt'} />
            </IteamMenu>
            <IteamMenu>
                <FontAwesomeIcon className={'icon'} icon={'calendar-alt'} />
            </IteamMenu>
            <IteamMenu>
                <FontAwesomeIcon className={'icon'} icon={'calendar-alt'} />
            </IteamMenu>
            <IteamMenu>
                <FontAwesomeIcon className={'icon'} icon={'calendar-alt'} />
            </IteamMenu>
            <IteamMenu>
                <FontAwesomeIcon className={'icon'} icon={'calendar-alt'} />
            </IteamMenu>
            <IteamMenu>
                <FontAwesomeIcon className={'icon'} icon={'calendar-alt'} />
            </IteamMenu>
        </WrapperMenu>
    )
}

export default Dashboard;
