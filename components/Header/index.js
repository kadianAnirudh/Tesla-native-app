import React from 'react'
import styles from './styles.js'
import { View, Image } from 'react-native'


const Header = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../../teslaAssets/images/logo.png')}/>
        <Image style={styles.menu} source={require('../../teslaAssets/images/menu.png')}/>
    </View>

  )
}

export default Header