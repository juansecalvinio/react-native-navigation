import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {styles} from './ProfileCard.styles'

interface Props {
  content: string
  onPress?: () => void
}

export const ProfileCard = ({content, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.profileCard}>
      <View>
        <Text>{content}</Text>
      </View>
    </TouchableOpacity>
  )
}
