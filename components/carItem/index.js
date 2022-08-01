import React from 'react'
import {  Text, View, ImageBackground } from 'react-native';
import styles from './styles.js'
import StyledButton from '../stylesButton/index.js';
import carData from '../carsList/cars.js';

const CarItem = (props) => {

const {image, taglineCTA} = props;

  return (
        <View style={styles.carContainer}>

<ImageBackground source={props.image} style={styles.image} />

<View style={styles.titles}> 
  <Text style={styles.title}> {props.name} </Text>
  <Text style={styles.subtitle}> {props.description} 
<Text style={styles.subtitleCTA}> {props.taglineCTA}</Text> 
</Text>
</View>

<View style={styles.buttonContainer}>
<StyledButton type="primary" content="Custom order" function={()=>{}}/>

<StyledButton type="secondary" content="Existing Inventory" function={()=>{}}/>
</View>


{/* <StatusBar style="auto"/> */}

        </View>
  )
}

export default CarItem