import React from 'react'
import { WrapperMenu, IteamMenu } from './Dashboard.styled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Content } from '../Styles/Style/Style.styled';
const Dashboard = () => {
    return (
        <Content>
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
        </Content>
    )
}

export default Dashboard;
