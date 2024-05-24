import {View, Text} from 'react-native'
import React, {useEffect} from 'react'
import {styles} from '../theme/app.theme'
import {StackScreenProps} from '@react-navigation/stack'
import {RootStackParams} from '../navigator/StackNavigator'

interface Props extends StackScreenProps<RootStackParams, 'ProfileScreen'> {}

export const ProfileScreen = ({navigation, route}: Props) => {
  const params = route.params

  useEffect(() => {
    navigation.setOptions({
      title: params.profileName,
    })
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ID: {params.id}</Text>
      <Text style={styles.title}>Nombre: {params.profileName}</Text>
    </View>
  )
}
