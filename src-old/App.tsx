import 'react-native-gesture-handler'

import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {StackNavigator} from './navigator/StackNavigator'
import {SidenavBasic} from './navigator/SidenavBasic'

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
      <SidenavBasic />
    </NavigationContainer>
  )
}

export default App
