import React from 'react'
import {View, Text} from 'react-native'
import {StackScreenProps} from '@react-navigation/stack'
import {styles} from '../theme/app.theme'
import {LinkButton} from '../components/LinkButton'

interface Props extends StackScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1Screen</Text>
      <LinkButton
        text='Ir a Página 2'
        onPress={() => navigation.navigate('Page2')}
      />
      <View>
        <Text style={styles.title}>Navegar con argumentos: </Text>
        <LinkButton
          text='Lionel Messi'
          onPress={() =>
            navigation.navigate('ProfileScreen', {
              id: 'db08c857-86d6-4d1e-be5f-6807e548137b',
              personName: 'Lionel Messi',
            })
          }
        />
        <LinkButton
          text='Lionel Scaloni'
          onPress={() =>
            navigation.navigate('ProfileScreen', {
              id: '18acfce6-16a0-4a1c-990b-3814e96f3ce8',
              personName: 'Lionel Scaloni',
            })
          }
        />
      </View>
    </View>
  )
}
