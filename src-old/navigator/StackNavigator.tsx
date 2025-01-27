import {createStackNavigator} from '@react-navigation/stack'
import {Page1Screen} from '../screens/Page1Screen'
import {Page2Screen} from '../screens/Page2Screen'
import {Page3Screen} from '../screens/Page3Screen'
import {ProfileScreen} from '../profile/ProfileScreen'

export type RootStackParams = {
  Page1Screen: undefined
  Page2Screen: undefined
  Page3Screen: undefined
  ProfileScreen: {id: string; profileName: string}
}

const Stack = createStackNavigator<RootStackParams>()

export function StackNavigator () {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: '#ffffff',
        },
      }}>
      <Stack.Screen
        name='Page1'
        options={{title: 'Página 1'}}
        component={Page1Screen}
      />
      <Stack.Screen
        name='Page2'
        options={{title: 'Página 2'}}
        component={Page2Screen}
      />
      <Stack.Screen
        name='Page3'
        options={{title: 'Página 3'}}
        component={Page3Screen}
      />
      <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
    </Stack.Navigator>
  )
}
