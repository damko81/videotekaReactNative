import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getUsername } from '../../screen/Login/Action';
import { loadMovies } from '../Movie/Action';

export default function LoadMoviesForm() {

  const [disc,setDisc]=useState('');  
  const [isReadOnly,setIsReadOnly]=useState(false);
  const [isUserLogedIn,setIsUserLogedIn]=useState(false);

  useEffect( () => {
    (async()=>{
        var text=await getUsername();
        setIsUserLogedIn(text===undefined?false:true);
        setIsReadOnly(text===undefined?true:false);
    })()
  }, [])

  const handleInputChange=(key,value)=>{
    if(key=='disc')setDisc(value);
  };

  const handleLoadMovies=()=>{

    loadMovies(disc); // Shranimo v backend DB.
    setIsReadOnly(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Load Movies</Text>
      <View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.taskMovie}>Disc</Text>
                    <TextInput style={[styles.discMovieInput,{backgroundColor:isReadOnly?'#758AA2':'#00000000'}]} 
                            placeholder='Disc' 
                            name="disc" 
                            value={disc} 
                            onChangeText={value=>handleInputChange('disc',value)} 
                            placeholderTextColor='gray'
                            readOnly={isReadOnly}
                    />
                </View>
      </View>
      <View style={styles.inputWrapper}>
        <TouchableOpacity disabled={isReadOnly} onPress={handleLoadMovies} style={[styles.loadMoviesButton,{backgroundColor:isReadOnly?'#758AA2':'#1FAA59'}]}>
            <Text style={styles.loadMoviesButtonText}>
                {isReadOnly && isUserLogedIn?'MOVIES SUCCESSFULLY LOADED':'LOAD MOVIES'}
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#120E43',
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      position:'absolute',
      bottom:50,
      left:0,
      right:0
    },
    heading: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 10,
      textAlign: 'center',
    },
    taskMovie: {
      color: 'white',
      marginLeft: 5,
      marginBottom: 5,
    },
    taskMovieInput: {
      color: 'white',
      borderColor: '#3944F7',
      borderWidth: 1,
      borderRadius: 5,
      marginTop: 1,
      paddingHorizontal: 20,
      paddingVertical: 1,
    },
    discMovieInput: {
        color: 'white',
        borderColor: '#3944F7',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 1,
        marginLeft: 5,
        width:50,
        paddingVertical: 1,
      },
    inputWrapper: {
      marginHorizontal: 10,
      marginVertical: 10,
    },
    selectInputWrapper: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    selectInputField: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      margin: 10,
      padding: 10,
      borderRadius: 5,
      borderWidth: 1,
    },
    loadMoviesButtonText: {
        color:'white',
        textAlign:'center',
        fontWeight:"bold"
    },
    loadMoviesButton: {
        backgroundColor:'#1FAA59', 
        marginLeft:5,
        paddingVertical:15,
        borderRadius:5
    }
  });