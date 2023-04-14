import { Picker } from '@react-native-picker/picker'
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Home() {

  const [ data, setData ] = useState({})
  const [loading, setLoading ] = useState(true);

  useEffect(()=>{

    fetch('https://api.weatherapi.com/v1/current.json?key=b0fa03de6eea43e497080000231304&q=Kisumu&aqi=no')
    .then(res => res.json())
    .then(res =>{
      setData(res)
      setLoading(false)
      console.log(res)
    })

  },[])
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row', marginTop:10, width: 200, justifyContent:'center', alignItems:'center', alignSelf:'center'}}>
        <View>
          <EvilIcons name="location" size={24} color="#3399ff" />
        </View>
        <View>

            <Picker 
              selectionColor={'white'}
              dropdownIconColor={'gray'}
              dropdownIconRippleColor={'white'}
              style={styles.dropdown}
            >
              <Picker.Item label={'Nairobi'} value={'Nairobi'} key={'Nairobi'}/>
            </Picker>

        </View>
        
      </View>

      <Text style={{color:'white', padding: 20, fontSize:20, fontWeight:'bold', marginBottom:10}}>Today's Report</Text>
      {
        !loading && <View style={{ flexDirection:'row', justifyContent:'space-between', marginHorizontal:30}}>
          <View>
            <Image source={{ uri: `https:${data.current.condition.icon}`}} style={{width: 80, height: 80, objectFit:'scale-down', alignSelf:'center'}}/>
            <Text style={{color:'white', alignSelf:'center', fontWeight:'bold', textTransform:'capitalize'}}>{data.current.condition.text}</Text>
          </View>

          <View style={{alignItems:'flex-end'}}>
            <Text style={{color:'white', marginTop: 50, fontSize:18}}>{data.location.localtime.slice(0,10)}</Text>
            <Text style={{color:'gray', fontSize:16}}>{data.location.localtime.slice(11,16)}</Text>
          </View>
          
        </View>
      }

      
        {!loading && <View style={{marginHorizontal:10, marginTop:50, flexDirection:'row', justifyContent:'space-around'}}>
          <View style={{alignItems:'center'}}>
              <MaterialCommunityIcons name="weather-windy" size={47} color="white" />
              <Text style={{color:'white', marginTop:10, fontWeight:'bold'}}>{data.current.wind_kph} km/h</Text>
              <Text style={{color:'gray'}}>wind</Text>
          </View>

          <View style={{alignItems:'center'}}>
              <Image source={require('../../assets/humidity.png')} style={{height:47, objectFit:'scale-down'}} /> 
              <Text style={{color:'white', marginTop:10, fontWeight:'bold'}}>{data.current.humidity}</Text>
              <Text style={{color:'gray'}}>Humidity</Text>
          </View>

          <View style={{alignItems:'center'}}>
              <MaterialCommunityIcons name="temperature-celsius" size={47} color="#3399ff" />
              <Text style={{color:'white', marginTop:10, fontWeight:'bold'}}>{data.current.temp_c}</Text>
              <Text style={{color:'gray'}}>Temp</Text>
          </View>
      </View>
        }
        
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#00001a',
        marginTop:27
    },
    dropdown:{
      width:150,
      color:'white',
      borderBottomWidth:1
    }
})