import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    logo : {
width : 100,
height : 20,
resizeMode : 'contain'
    }, 
    menu : {
width : 25,
height : 25
    }, 
    container : {
position : 'fixed',
top : 50,
zIndex : 100,
flexDirection : 'row',
justifyContent : 'space-between',
alignItems : 'center',
width : '100%',
paddingHorizontal: 20
    }
})

export default styles 