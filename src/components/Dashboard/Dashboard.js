import React from 'react'
import { WrapperMenu, IteamMenu, Title } from './Dashboard.styled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = () => {
    return (

        <WrapperMenu>
            <IteamMenu>
                <FontAwesomeIcon className={'icon'} icon={'calendar-alt'} />
                <Title>Cosas</Title>
            </IteamMenu>
            <IteamMenu>
                <FontAwesomeIcon className={'icon'} icon={'calendar-alt'} />
                <Title>Cosas</Title>
            </IteamMenu><IteamMenu>
                <FontAwesomeIcon className={'icon'} icon={'calendar-alt'} />
                <Title>Cosas</Title>
            </IteamMenu><IteamMenu>
                <FontAwesomeIcon className={'icon'} icon={'calendar-alt'} />
                <Title>Cosas</Title>
            </IteamMenu><IteamMenu>
                <FontAwesomeIcon className={'icon'} icon={'calendar-alt'} />
                <Title>Cosas</Title>
            </IteamMenu><IteamMenu>
                <FontAwesomeIcon className={'icon'} icon={'calendar-alt'} />
                <Title>Cosas</Title>
            </IteamMenu>
        </WrapperMenu>
    )
}

export default Dashboard;
