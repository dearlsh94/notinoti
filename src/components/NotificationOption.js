import React, { Component } from 'react';
import { Container, Content, ListItem, Left, Body, Right, Text, Switch, Button } from 'native-base';

import moment from 'moment';

import DateTimePicker from 'react-native-modal-datetime-picker';

class NotificationOption extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isVisible: false,
            chosenDate: 'what time noti you?',
        }
    }

    handlePicker = (newDate) => {
        this.setState({ 
            ...this.state,
            chosenDate: moment(newDate).format('llll').toString(),
        });
        this.hidePicker();
    }
    showPicker = () => {
        this.setState({
            ...this.state,
            isVisible: true,
        });
    }
    hidePicker = () => {
        this.setState({
            ...this.state,
            isVisible: false,
        });
    }
    switchSendNow = () => {
        this.setState({
            ...this.state,
            isSendNow: !this.state.isSendNow,
        })
    }
    render() {
        return (
            <Container>
                <Content>
                    <ListItem>
                        <Left>
                            <Text>즉시 전송</Text>
                        </Left>
                        <Right>
                            <Switch
                                name="isSendNow"
                                value={this.state.isSendNow}
                                onValueChange={this.switchSendNow} />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Button block light
                            name="btnDtm"
                            onPress={this.showPicker}>
                            <Text> 시간 선택 </Text>
                        </Button>
                        <Content>
                        <DateTimePicker
                            name="dtmPicker"
                            isVisible={this.state.isVisible}
                            is24Hour={false}
                            mode='datetime'
                            onConfirm={this.handlePicker}
                            onCancel={this.hidePicker}
                            />
                            <Body>
                                <Text>{this.state.chosenDate}</Text>
                            </Body>
                        </Content>
                    </ListItem>

                </Content>
            </Container>
        );
    }
}

const styles = {
    notiContainer: {

    },
    titleInput: {
        backgroundColor: 'yellow',
    },
    contentArea: {
        backgroundColor: 'white',
    }
}

export default NotificationOption;