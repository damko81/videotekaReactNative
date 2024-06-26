import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import {useNavigation} from '@react-navigation/native';
import { deleteMovie } from '../Movie/Action';
import { getUsername } from '../../screen/Login/Action';

export default function MovieCard({item,type}) {

  const navigation = useNavigation();
  const [visible,setVisible]=useState(true);
  const [isUserLogedIn,setIsUserLogedIn]=useState(false);

  useEffect( () => {
    (async()=>{
        var text=await getUsername();
        setIsUserLogedIn(text===undefined?false:true);
    })()
}, [])

  const handleDelete=(id)=>{
    deleteMovie(id); // Brisanje v BE bazi
    global.movies = global.movies.filter(movie => movie.id != id); //Brisanje globalnega seznama FE
    setVisible(false); // skrivanje pobrisanega na enakem tabu
  }

  const deleteDialog = (id) =>
    Alert.alert(
      "Confirm Operation",
      "Are you sure you want to delete this movie?",
      [{ text: "Cancel",
         onPress: () => console.log('Cancel Pressed'),
         style: 'cancel'
       },
       { text: "Yes",
         onPress: () => handleDelete(id)
       }
      ]
  );
 
  return (
    (visible && <View style={[styles.container,styles[`container_${type}`]]}>
                  <View style={styles.inputView}>
                      <View style={styles.rowContainer}>
                          <Text style={styles.name}>{item.name.substring(0,15)}</Text>
                          <Text style={styles.date}>{item.date}</Text>
                          <Text style={styles.imdb}>{item.rating}</Text>
                          <Text style={styles.duration}>{item.duration}</Text>
                      </View>
                      <View style={styles.rowContainer}>
                          <Text style={styles.disc}>{item.disc}</Text>
                          <Text style={styles.director}>{item.director}</Text>
                          <Text style={styles.stars}>{item.stars.substring(0,15)}</Text>
                      </View>
                  </View>
                  <View>
                      <TouchableOpacity style={styles.edit} onPress={() => {navigation.navigate('UpdateMovie',item);}}>
                          <Icon name="edit" size={24} color="#FBD28B"/>
                      </TouchableOpacity>
                      <TouchableOpacity disabled={!isUserLogedIn} onPress={() => deleteDialog(item.id)}>
                          <Icon name="closecircle" size={24} style={{color:isUserLogedIn?'#DE4839':'#758AA2'}}/>
                      </TouchableOpacity>
                  </View>
              </View>
   )
)
}

const styles = StyleSheet.create({
    container: {
      //flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 15,
      justifyContent: 'space-between',
      backgroundColor: '#120E43',
      borderRadius: 5,
      marginVertical: 5,
    },
    rowContainer: {
        flexDirection: 'row',
    },
    container_COMPLETED: {
      backgroundColor: 'rgba(0, 216, 74, 0.5)',
    },
    container_INPROGRESS: {
      backgroundColor: 'rgba(255, 102, 102, 0.5)',
    },
    createMovieForm:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        marginBottom: 30,
      },
    edit:{marginBottom:10},
    textContainer: {},
    inputView: {},
    name: {color: 'white', marginBottom: 5, fontSize: 17, fontWeight:"bold"},
    genre: {color: 'white', marginLeft: 10, marginBottom: 5, fontSize: 17},
    imdb: {color: 'white', marginLeft: 10, marginBottom: 5, fontSize: 17},
    duration: {color: 'white', marginLeft: 10, marginBottom: 5, fontSize: 17},
    date: {color: 'white', marginLeft: 10, marginBottom: 5, fontSize: 17},
    director: {color: 'white', marginLeft: 10, marginBottom: 5, fontSize: 17},
    stars: {color: 'white', marginLeft: 10, marginBottom: 5, fontSize: 17},
    disc: {color: 'white', fontSize: 17}
  });