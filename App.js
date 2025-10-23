import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import RootStack from './screens/RootStack'
import LogContext from './contexts/LogContext';

function App() {
  return (
  <NavigationContainer>
    <LogContext.Provider value='테스트입니다.'>
    <RootStack />  
    </LogContext.Provider>
  </NavigationContainer>
  );
}
export default App