import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {StackNavigator} from './StackNavigator'
import {SettingsScreen} from '../settings/SettingsScreen'

const Drawer = createDrawerNavigator()

export function SidenavBasic () {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='StackNavigator' component={StackNavigator} />
      <Drawer.Screen name='SettingsScreen' component={SettingsScreen} />
    </Drawer.Navigator>
  )
}
