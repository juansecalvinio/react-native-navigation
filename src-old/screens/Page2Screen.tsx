import React from 'react'
import {View, Text} from 'react-native'
import {styles} from '../theme/app.theme'
import {StackScreenProps} from '@react-navigation/stack'
import {LinkButton} from '../components/LinkButton'

interface Props extends StackScreenProps<any, any> {}

export const Page2Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page2Screen</Text>
      <LinkButton
        text='Ir a Página 3'
        onPress={() => navigation.navigate('Page3')}
      />
      <LinkButton text='Atrás' onPress={() => navigation.pop()} />
    </View>
  )
}
