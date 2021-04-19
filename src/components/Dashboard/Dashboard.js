import React from 'react'
import { WrapperMenu, IteamMenu, Title, Card, ImgCard } from './Dashboard.styled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = () => {
    return (

        <WrapperMenu>
            <IteamMenu>
                <Card>
                    <ImgCard src='../../../public/assets/images/images/calendar.svg' />
                    <Title>Calendar</Title>
                </Card>
            </IteamMenu>
            <IteamMenu>
                <Card>
                    <ImgCard src='../../../public/assets/images/images/calendar.svg' />
                    <Title>Cosas</Title>
                </Card>
            </IteamMenu><IteamMenu>
                <Card>
                    <ImgCard src='../../../public/assets/images/images/calendar.svg' />
                    <Title>Cosas</Title>
                </Card>
            </IteamMenu><IteamMenu>
                <Card>
                    <ImgCard src='../../../public/assets/images/images/calendar.svg' />
                    <Title>Cosas</Title>
                </Card>
            </IteamMenu><IteamMenu>
                <Card>
                    <ImgCard src='../../../public/assets/images/images/calendar.svg' />
                    <Title>Cosas</Title>
                </Card>
            </IteamMenu><IteamMenu>
                <Card>
                    <ImgCard src='../../../public/assets/images/images/calendar.svg' />
                    <Title>Cosas</Title>
                </Card>
            </IteamMenu>
        </WrapperMenu>
    )
}

export default Dashboard;
