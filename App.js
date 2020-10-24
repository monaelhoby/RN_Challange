import React from 'react';
import { StyleSheet, Platform, SafeAreaView, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font'

import Navigator from './src/route/index'


const fetchFonts = () => {
  return Font.loadAsync({
    'ArbFONTS': require('./src/fonts/ArbFONTS-The-Sans-Plain.otf'),
  });
};



export default function App() {

  
  const [fontLoaded, setFontLoaded] = React.useState(false);



  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }

  return (
    <SafeAreaView style={styles.droidSafeArea} forceInset={{ top: 'never',  bottom: 'never' }}>
      <Navigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 25 : 0
},
});
