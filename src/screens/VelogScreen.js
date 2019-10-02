import React, { Component } from 'react';
import { Container } from 'native-base';

import { WebView } from 'react-native';

class VelogScreen extends Component {

    static navigationOptions = {
        //To hide the ActionBar/NavigationBar
        header: null,
    };
    
    _onMessage = (data) => {
        console.log(data.natvieEvent.data);
    }

    _onLoadend = () => {
        console.log('Loaded');
    }

    _onError = (err) => {
        console.log('Error', err);
    }

    render(){
        return(
            <Container>
                <WebView
                  source={{uri: 'https://velog.io'}}
                  onMessage={this._onMesasge}
                  onLoadend={this._onLoadend}
                  onError={this._onError}>

                </WebView>
            </Container>
        );
    }
}

export default VelogScreen;