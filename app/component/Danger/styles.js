import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    squareMenu: {
      height: 365,
      justifyContent: 'center'
    },
    animatedButton:{
      height: '60%',
      width: '70%',
      backgroundColor: '#8e2215',
      borderRadius: 100,
      alignSelf: 'center',
      justifyContent: 'center',
      elevation: 15,
    },
    emergencyButton:{
        height: '60%',
        width: '70%',
        borderRadius: 100,
        alignSelf: 'center',
        justifyContent: 'center',
      },
    textHelp:{
      paddingTop: 10,
      color: '#721a10',
      fontSize: 40,
      alignSelf: 'center',
    }
  });
export default styles;