import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function LandingPage({ navigation }) {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/cloudy.png')} />
        <Text style={styles.landingText}>Discover the Weather in Your City</Text>
        <Text style={styles.landingDesc}>Get to know your Weather maps  and radar precipitation forecast</Text>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00001a',
      alignItems: 'center',
      justifyContent: 'center',
    },
    landingText:{
        color:'white',
        fontSize:26,
        textAlign:'center',
        marginHorizontal:26,
        width: 250,
        fontWeight:'bold',
        marginTop: 80
    },
    landingDesc:{
        color:'gray',
        textAlign:'center',
        width: 250,
        marginTop:20
    },
    button:{
        backgroundColor:'#3399ff',
        padding: 18,
        width:280,
        marginTop:60,
        borderRadius:15
    },
    buttonText:{
        color:'white',
        alignSelf:'center'
    }
  });
