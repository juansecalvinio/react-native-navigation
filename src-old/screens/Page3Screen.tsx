import React from 'react'
import {View, Text} from 'react-native'
import {styles} from '../theme/app.theme'
import {StackScreenProps} from '@react-navigation/stack'
import {LinkButton} from '../components/LinkButton'

interface Props extends StackScreenProps<any, any> {}

export const Page3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page3Screen</Text>
      <LinkButton text='Atrás' onPress={() => navigation.pop()} />
      <LinkButton text='Ir a Inicio' onPress={() => navigation.popToTop()} />
    </View>
  )
}
