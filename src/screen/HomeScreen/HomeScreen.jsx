import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Movie } from '../../components/Movie'

export default function HomeScreen() {
  return (
    <SafeAreaView>
        <View style={styles.container}>
            <Text style={styles.introText}>Hello, 👋 Here Is Your VIDEOTECA</Text>
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
         borderRadius:5
    },
    container:{
      marginHorizontal:10
    }
})