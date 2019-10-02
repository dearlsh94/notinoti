import React, { Component } from 'react';
import { Container, Text } from 'native-base';

import Login from '../components/Login';

class SignUpScreen extends Component {
    render() {
        return (
            <Container>
                <Container style={styles.logoContainer}>
                    <Text>Logo</Text>
                </Container>
                <Container style={styles.LoginContainer}>
                    <Login></Login>
                </Container>
            </Container>
        )
    }
}

const styles = {
    logoContainer: {
        flex: 1,
        backgroundColor: 'yellow',
    },
    LoginContainer: {
        flex: 2,
        backgroundColor: 'green',
    },
}

export default SignUpScreen;