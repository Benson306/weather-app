import { Picker } from '@react-native-picker/picker'
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

export default function Home() {

  const [ data, setData ] = useState({})
  const [loading, setLoading ] = useState(true);

  const [hourly, setHourly] = useState();

  useEffect(()=>{

    fetch('https://api.weatherapi.com/v1/current.json?key=b0fa03de6eea43e497080000231304&q=Nairobi&aqi=no')
    .then(res => res.json())
    .then(res =>{
      setData(res)
    })

    fetch('https://api.weatherapi.com/v1/forecast.json?key=b0fa03de6eea43e497080000231304&q=Nairobi&days=1&aqi=no&alerts=no')
    .then(res => res.json())
    .then(res =>{
      setHourly(res)
      setLoading(false)
    })

  },[])
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row', marginTop:40, width: 200, justifyContent:'center', alignItems:'center', alignSelf:'center'}}>
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
            <Text style={{color:'white', marginTop: 45, fontSize:18}}>{data.location.localtime.slice(0,10)}</Text>
            <Text style={{color:'gray', fontSize:16}}>{data.location.localtime.slice(11,16)}</Text>
          </View>
          
        </View>
      }

      
        {!loading && <View style={{marginHorizontal:10, marginTop:50, flexDirection:'row', justifyContent:'space-around'}}>
          <View style={{alignItems:'center'}}>
              <MaterialCommunityIcons name="weather-windy" size={47} color="gray" />
              <Text style={{color:'white', marginTop:10, fontWeight:'bold'}}>{data.current.wind_kph} km/h</Text>
              <Text style={{color:'gray'}}>wind</Text>
          </View>

          <View style={{alignItems:'center'}}>
              <Image source={require('../../assets/humidity.png')} style={{height:47, objectFit:'scale-down'}} /> 
              <Text style={{color:'white', marginTop:10, fontWeight:'bold'}}>{data.current.humidity}</Text>
              <Text style={{color:'gray'}}>Humidity</Text>
          </View>

          <View style={{alignItems:'center'}}>
              <MaterialCommunityIcons name="temperature-celsius" size={45} color="#3399ff" />
              <Text style={{color:'white', marginTop:10, fontWeight:'bold'}}>{data.current.temp_c}</Text>
              <Text style={{color:'gray'}}>Temp</Text>
          </View>
      </View>
        }

      <Text style={{color:'white', padding: 20, fontSize:20, fontWeight:'bold', marginTop:20}}>Hourly Forecast</Text>
        {
          !loading &&

          <ScrollView horizontal={true}>
            {
              hourly.forecast.forecastday[0].hour.map( hr =>
                {
                  if(Number(hr.time.slice(11,13)) > Number(data.location.localtime.slice(11,13))){
                    return (
                      <View style={{backgroundColor:'#8c8cd9', height:150, elevation:3, shadowOffset:{width:1, height:1}, shadowColor:'#00b8e6', shadowRadius:2, shadowOpacity:0.3, padding:10, borderRadius:15, marginHorizontal:5, width: 120, alignItems:'center'}}>
                        <Text style={{fontSize:16}}>{hr.time.slice(11,16)}</Text>
                        <Image source={{ uri: `https:${hr.condition.icon}`}} style={{width: 80, height: 80, objectFit:'scale-down'}}/>
                        <Text style={{fontSize:10, textTransform:'capitalize', color:'#030c3b'}}>{hr.condition.text}</Text>
                        <Text style={{color:'gray'}}>{hr.temp_c} ℃</Text>
                      </View>
                    
                    )
                  }
                }
                )
            }
          </ScrollView>
            
        }
        
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#00001a',
        marginTop:0
    },
    dropdown:{
      width:150,
      color:'white',
      borderBottomWidth:1,
      alignSelf:'center'
    }
})