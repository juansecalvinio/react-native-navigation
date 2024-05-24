import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './LinkButton.styles';

interface Props {
  text?: string;
  variant?: 'primary' | 'secondary';
  onPress?: () => void;
}

export const LinkButton = ({text, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
