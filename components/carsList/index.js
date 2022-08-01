import React from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList } from 'react-native';
import styles from './styles.js'
import carData from './cars.js'
import CarItem from '../carItem/index.js'

const CarsList = () => {
  return (
    <>
    {/* <FlatList data={carData} renderItem={({item})=> <CarItem car={item}/> }/> */}
        <CarItem name={carData[0].name} description={carData[0].tagline} taglineCTA={carData[0].taglineCTA} image={carData[0].image}/>
        <CarItem name={carData[1].name} description={carData[1].tagline} taglineCTA={carData[1].taglineCTA} image={carData[1].image}/>
        <CarItem name={carData[2].name} description={carData[2].tagline} taglineCTA={carData[2].taglineCTA} image={carData[2].image}/>
        <CarItem name={carData[3].name} description={carData[3].tagline} taglineCTA={carData[3].taglineCTA} image={carData[3].image}/>
       
        </>
  )
}

export default CarsList