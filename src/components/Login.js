import React, { Component } from 'react';
import { Header, Content, Form, ListItem, Item, Label, Input, CheckBox, Body, Text, Right, Container } from 'native-base';
import { Toast } from 'native-base';

class Login extends Component {
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

    forgotPassword = () => {
        console.log("Forgot");
    }

    signIn = () => {
        console.log("Sign In");
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
                            <CheckBox 
                                checked={this.state.isRemember} 
                                color="green"
                                onPress={this.handleRemember}/>
                            <Body>
                                <Text
                                    onPress={this.handleRemember}>Remember me</Text>
                            </Body>
                            <Right>
                                <Text
                                    onPress={this.signIn}>Sign In</Text>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Text
                                    onPress={this.forgotPassword}>Forgot Password?</Text>
                            </Body>
                        </ListItem>
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

export default Login;