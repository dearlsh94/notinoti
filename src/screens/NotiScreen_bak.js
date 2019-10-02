import React, { Component } from 'react';

import { Container, Content, Item, ListItem, CheckBox, Body, Button, Text, Input, Textarea, Left, Right, Label } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import moment from 'moment';

import DateTimePicker from 'react-native-modal-datetime-picker';

export default class NotiScreen extends Component {
  
    static navigationOptions = {
        title: 'Noti',
    };

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: '',
            chosenDate: 'what time noti you?',
            isVisible: false,
            isSendNow: false,
        };

        // for focus ref
        this.refTitle = React.createRef();
        this.refContent = React.createRef();
    }

    
    render() {

        return (
            <Container style={styles.notiContainer}>
                <Grid>
                    <Col>
                        <Row style={styles.titleInput}>
                        <Content>
                            <Item floatingLabel>
                            <Label>Title</Label>
                                <Input 
                                    name="title" />
                            </Item>
                        </Content>
                        </Row>
                        <Row>
                        <Container 
                            style={styles.contentArea}>
                            <Label>Content</Label>
                            <Textarea
                                name="content"
                                placeholder="content"
                                rowSpan="10"
                                bordered
                                ref={ref => {
                                this.refContent = ref;
                                }}>
                            </Textarea>
                        </Container>
                        </Row>
                        <Row>
                        <Content>
                            <ListItem>
                                <Left>
                                    <Text>즉시 전송</Text>
                                </Left>
                                <Right>
                                    <Switch 
                                        value={this.state.isSendNow}
                                        onValueChange={this.switchSendNow} />
                                </Right>
                            </ListItem>
                            {/*
                            <ListItem>
                                <Left>
                                    <Body>
                                        <Text>스케쥴 등록</Text>
                                    </Body>
                                </Left>
                                <Right>
                                    <CheckBox checked={true} color="red"/>
                                </Right>
                            </ListItem>
                            */}
                        </Content>
                        </Row>
                        <Row>
                        <Col>
                            <Button block light
                                onPress={this.showPicker}>
                                <Text> 시간 선택 </Text>
                            </Button>
                            <Content>
                            <DateTimePicker
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
                        </Col>
                        </Row>
                    </Col>
                </Grid>
            </Container>
        );
    }
}

//const styles = require('../css/styles.js');
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