import React, { Component } from 'react';
import { Header, Content, Form, ListItem, Item, Label, Input, CheckBox, Body, Text, Right, Container } from 'native-base';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isRemember : false,
        }
    }

    handleRemember = () => {
        this.setState({
            ...this.state,
            isRemember: !this.state.isRemember,
        });
    }

    signUp = () => {
        console.log("Sign Up");
    }
    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input 
                                secureTextEntry={true}/>
                        </Item>
                        <ListItem>
                            <Body>
                                <Text
                                    onPress={this.signUp}>Sign Up</Text>
                            </Body>
                        </ListItem>
                    </Form>
                </Content>
            </Container>
        )
    }
}

export default SignUp;