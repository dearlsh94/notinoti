import React, { Component } from 'react';
import { Container, Header, Left, Body, Title, Right, Content, Button, Text } from 'native-base';
import { observer, inject } from 'mobx-react';

import Notification from '../components/Notification';
import NotificationOption from '../components/NotificationOption';

import { sendPushNotificationsAsync } from '../shared/push-noti';

@observer
class NotiScreen extends Component {

    constructor(props) {
        super(props);
    }

    sendNoti = () => {
        //sendPushNotificationsAsync(notiStore.title, notiStore.conntent);
    }

    render() {

        return (
            <Container>
                <Header>
                    <Left/>
                    <Body>
                        <Title>NotiNoti</Title>
                    </Body>
                    <Right />
                </Header>
                <Container style={styles.NotificationContainer}>
                    <Notification/>
                </Container>
                <Container style={styles.OptionContainer}>
                    <NotificationOption/>
                </Container>
                <Container>
                    <Content>
                        <Button full info last
                            name="btnSend"
                            onPress={this.sendNoti}>
                            <Text>Send</Text>
                        </Button>
                    </Content>
                </Container>
            </Container>
        )
    }
}

const styles = {
    NotificationContainer: {
        flex: 2,
        backgroundColor: 'yellow',
    },
    OptionContainer: {
        flex: 1,
        backgroundColor: 'green',
    },
}

export default NotiScreen;