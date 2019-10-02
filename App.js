import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { Component, useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import AppNavigator from './src/navigation/AppNavigator';
import * as Push from './src/shared/push-noti';

import { Provider } from 'mobx-react';
import RootStore from './src/store/RootStore';

import { initFirebase } from './src/shared/firebase';

export default class App extends Component {
  state = {
    isLoadingComplete: false,
    setLoadingComplete: false
  };

  async componentWillMount() {
    try {
      await Promise.all([
        Asset.loadAsync([
          require('./assets/images/robot-dev.png'),
          require('./assets/images/robot-prod.png'),
        ]),
        Font.loadAsync({
          // This is the font that we are using for our tab bar
          ...Ionicons.font,
          // We include SpaceMono because we use it in HomeScreen.js. Feel free to
          // remove this if you are not using it in your app
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
          Roboto: require('native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        }),
        Push.registerForPushNotificationsAsync()
      ]);
      this.setState({ isLoadingComplete: true });
    } catch (error) {
      console.log('error loading icon fonts', error);
    }
  }

  componentDidMount() {
    initFirebase();
  }

  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <Text>Loading...</Text>
      );
    }
    else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <Provider rootStore={RootStore}>
              <AppNavigator />
            </Provider>
        </View>
      );
    }
  }
}

/* block default App function code
export default function App(props) {
  const [isLoadingComplete, setLoadingComplete ] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
      </View>
    );
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    }),
    Push.registerForPushNotificationsAsync(), // if run on virtual device, block this line
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});