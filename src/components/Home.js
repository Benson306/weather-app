import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Home() {
  return (
    <View style={styles.container}>
        <Text style={{color:'white'}}>Home</Text>
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#00001a',
        paddingTop:30
    }
})