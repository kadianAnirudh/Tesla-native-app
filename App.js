import { grey } from '@mui/material/colors';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarsList from './components/carsList/index.js'
// import { pic1 } from './teslaAssets/images/Model3.jpeg'
import Header from './components/Header/index.js'
// const image1 = { }

export default function App() {
  return (
    
    <View style={styles.container}>
      <Header/>
      <CarsList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


  
});
