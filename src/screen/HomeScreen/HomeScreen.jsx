import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Movie } from '../../components/Movie'
import { getMovies } from '../../components/Movie/Action';
import { getUsername } from '../Login/Action';

export default function HomeScreen() {

  global.movies = getMovies() // Globalna spremenljivka seznama filmov, ki bomo iz različnih component urejalli.
  const [username,setUsername]=useState();

  useEffect( () => {(async()=>{
        var text=await getUsername();
        setUsername(text);
    })()
}, [])

  return (
    <SafeAreaView>
        <View style={styles.container}>
            <Text style={styles.introText}>Hello {username}, 👋 Here Is Your VIDEOTECA</Text>
        </View>
        <ScrollView>
          <Movie/>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    introText:{
         color:"white",
         backgroundColor:'#1FAA59',
         padding:20,
         fontSize:16,
         textAlign:"center",
         marginTop:10,
         borderRadius:5,
    },
    container:{
      marginHorizontal:10
    }
})