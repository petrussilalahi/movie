import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    screen: {
      padding: 20,
      flex: 1,
      justifyContent: 'center',
      paddingTop: 20,
      backgroundColor: '#ecf0f1',
    },
  
    entry: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: '#dcdcdc',
  
      borderBottomWidth: 1,
      padding: 0,
      justifyContent: 'space-between',
    },
    touchableItem: {
      borderWidth: 2,
      borderColor: '#5D8AA8',
      padding: 5,
      borderRadius: 4,
      marginHorizontal: 10
    },
    textStyle: {
      flexShrink: 1,
      width: 260,
      marginLeft: 5,
      marginTop: 10,
      marginBottom: 30,
      fontSize: 20,
      fontWeight: 'bold',
  
      color: '#222',
    },
  
    image: {
      width: 80,
      height: 120,
      borderRadius: 10,
    },
    imageStyle: {
      position: 'absolute',
      padding: 10,
      margin: 5,
      height: 30,
      width: 30,
      top: 5,
      left: 0,
      bottom: 0,
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'center',
    },
    textinput: {
      paddingVertical: 0,
    },
  
    imageStyleBook: {
      position: 'absolute',
      padding: 10,
      margin: 5,
      height: 30,
      width: 30,
      top: 0,
      right: 0,
      bottom: 0,
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'center',
    },
    sectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: 0.5,
      borderColor: '#000',
      height: 50,
      borderRadius: 5,
      margin: 10,
    },
  });