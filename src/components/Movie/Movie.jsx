import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { MovieCard } from '../MovieCard';

export default function Movie() {

    const [selectedGenre,setSelectedGenre]=useState('all');
    const handleSelectGenre=(genre)=>{
          setSelectedGenre(genre);
    }

  return (
            <View style={styles.container}>
                <View>
                    <Text style={[styles.heading]}>Movies</Text>
                    <View style={styles.genreContainer}>
                        <TouchableOpacity
                            onPress={()=>handleSelectGenre("all")}
                            style={
                                    [styles.button,
                                    {
                                        backgroundColor:selectedGenre==='all'?'#120E43':'white',
                                        borderColor:"#120E43"
                                    }
                                    ]
                                }
                            >
                            <Text style={[styles.allGenre,styles.genreText,{color:selectedGenre==='all'?'white':'#120E43'}]}>All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleSelectGenre('sci')}
                            style={[
                            styles.button,
                            {
                                backgroundColor:
                                selectedGenre === 'sci' ? '#00D84A' : 'white',
                                borderColor: '#00D84A',
                            },
                            ]}>
                            <Text
                            style={[
                                styles.sciGenre,
                                styles.genreText,
                                {color: selectedGenre === 'sci' ? 'white' : '#00D84A'},
                            ]}>
                            Sci
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleSelectGenre('hor')}
                            style={[
                            styles.button,
                            {
                                backgroundColor:
                                selectedGenre === 'hor' ? '#FF6263' : 'white',
                                borderColor:'#FF6263'
                            },
                            ]}>
                            <Text
                            style={[
                                styles.horGenre,
                                styles.genreText,
                                {color: selectedGenre === 'hor' ? 'white' : '#FF6263'},
                            ]}>
                            Hor
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleSelectGenre('act')}
                            style={[
                            styles.button,
                            {
                                backgroundColor:
                                selectedGenre === 'act' ? '#F4BE2C' : 'white',
                                borderColor:'#F4BE2C'
                            },
                            ]}>
                            <Text
                            style={[
                                styles.actGenre,
                                styles.genreText,
                                {color: selectedGenre === 'act' ? 'white' : '#F4BE2C'},
                            ]}>
                            Act
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleSelectGenre('adv')}
                            style={[
                            styles.button,
                            {
                                backgroundColor:
                                selectedGenre === 'adv' ? '#4BCFFA' : 'white',
                                borderColor:'#4BCFFA'
                            },
                            ]}>
                            <Text
                            style={[
                                styles.advGenre,
                                styles.genreText,
                                {color: selectedGenre === 'adv' ? 'white' : '#4BCFFA'},
                            ]}>
                            Adv
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleSelectGenre('drm')}
                            style={[
                            styles.button,
                            {
                                backgroundColor:
                                selectedGenre === 'drm' ? '#A4B0BD' : 'white',
                                borderColor:'#A4B0BD'
                            },
                            ]}>
                            <Text
                            style={[
                                styles.drmGenre,
                                styles.genreText,
                                {color: selectedGenre === 'drm' ? 'white' : '#A4B0BD'},
                            ]}>
                            Drm
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        {global.movies.map((movie)=>(movie.genre === selectedGenre || selectedGenre === 'all' ? (<MovieCard item={movie}/>):null))}
                    </View>
                </View>
            </View>
         );
}

const styles = StyleSheet.create({
    sortHeading: {
      fontSize: 20,
      color: 'black',
      marginTop: 10,
      marginBottom: 5,
    },
    genreContainer: {
        flexDirection: 'row',
    },
    button: {
      margin: 7,
      padding: 10,
      borderRadius: 5,
      borderWidth:1
    },
    genreText: {
      fontSize: 17,
    },
    sciGenre: {
      color: '#00D84A',
    },
    horGenre: {
      color: '#FF6263',
    },
    actGenre: {
      color: '#F4BE2C',
    },
    advGenre: {
        color: '#4BCFFA',
    },
    drmGenre: {
        color: '#A4B0BD',
    },
    allGenre: {
      color: '#120E43',
    },
   
    heading: {
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 5,
      color: 'black',
      textAlign: 'center',
      marginTop: 20,
    },
    low: {},
    container: {
      marginHorizontal: 10,
      paddingBottom:85
    },
  });