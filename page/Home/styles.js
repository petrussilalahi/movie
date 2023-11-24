import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    boxView: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      flexDirection: 'column',
      margin: 1
    },
    text: {
      alignItems: 'stretch',
      justifyContent: 'center',
      marginTop: 10,
      marginBottom: 0,
      fontSize: 20,
      fontWeight: 'bold',
    },
    textAdult:{
      fontSize: 10,
      color: 'gray',
      fontWeight: 'bold',
      marginBottom: 5,
    },
    images:{ width: 100, height: 100, borderRadius: 4, objectFit:'contain' },
    textTitle: {
      fontSize: 17,
      fontWeight: 'bold',
    },
    textRelease:{
      fontSize: 10,
      color: 'gray',
      fontWeight: 'bold',
      marginBottom: 5,
    }
  });