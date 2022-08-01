import React from 'react'
import {  Text, View, ImageBackground, Pressable } from 'react-native';
import styles from './styles.js'

const StyledButton = (props) => {

const type = props.type;

const backgroundColor = type === 'primary' ? 'black' : 'white';
const textColor = type === 'primary' ? 'white' : 'black';
const borderColor = type === 'primary' ? 'black ' : 'white';

  return (
<View style={styles.container}>
<Pressable
style={[styles.button, {backgroundColor}]}
onPress={props.function}
>
<Text style={[styles.text, {color: textColor}]}> {props.content} </Text>
</Pressable>
</View>
  )
}

export default StyledButton