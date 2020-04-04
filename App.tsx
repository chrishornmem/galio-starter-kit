import React from 'react';
import { View, StatusBar } from 'react-native';
import GalioApp from './routes';

const App: React.FC< {}> = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={false} />
      <GalioApp />
    </View>
  );
}

export default App;