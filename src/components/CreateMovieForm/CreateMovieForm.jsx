import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react'

export default function CreateMovieForm() {
  const [name,setName]=useState();
  const [rating,setRating]=useState();
  const [director,setDirector]=useState();
  const [stars,setStars]=useState();
  const [disc,setDisc]=useState();
  const [duration,setDuration]=useState();
  const [description,setDescription]=useState();
  const [selectedGenre,setSelectedGenre]=useState();
  const [mode,setMode]=useState();
  const [show,setShow]=useState();
  const [date,setDate]=useState(new Date());
  const [dateString,setDateString]=useState();

  const handleInputChange=(key,value)=>{
    if(key=='name')setName(value);
    else if(key=='description')setDescription(value);
    else if(key=='rating')setRating(value);
    else if(key=='director')setDirector(value);
    else if(key=='stars')setStars(value);
    else if(key=='disc')setDisc(value);
    else if(key=='duration')setDuration(value);
  };
  const handleSelectGenre=(genre)=>{
    setSelectedGenre(genre);
  };
  const onDateChange=(event,selectedDate)=>{
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth(); 
    const day= selectedDate.getDate();
    const  dateString = `${day}-${month}-${year}`;
    setDate(selectedDate);
    setDateString(dateString);

    if(mode=='date'){
        setShow(false);
    }

  };
  const handleOpenDateTimePicker=()=>{
    setMode('date');
    setShow(true);
  }; 
  const handleCreateMovie=()=>{
    const movieData={
        name,
        description,
        rating,
        director,
        stars,
        duration,
        disc,
        genre:selectedGenre,
        date:date
    }
    console.log(movieData);
  };  
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Create Movie
      </Text>
      <View>
        <View style={styles.inputWrapper}>
            <Text style={styles.taskMovie}>Movie Name</Text>
            <TextInput style={styles.taskMovieInput} 
                       placeholder='Name' 
                       name="name" 
                       value={name} 
                       onChangeText={value=>handleInputChange('name',value)} 
                       placeholderTextColor='gray'
            />
        </View>
        <View style={styles.inputWrapper}>
            <Text style={styles.taskMovie}>Movie Description</Text>
            <TextInput style={styles.taskMovieInput} 
                       placeholder='Description' 
                       name="description" 
                       value={description} 
                       onChangeText={value=>handleInputChange('description',value)} 
                       placeholderTextColor='gray'
            />
        </View>
        <View style={styles.inputWrapper}>
            <Text style={styles.taskMovie}>Select Genre</Text>
            <View style={styles.genreContainer}>
                <TouchableOpacity 
                    onPress={()=>handleSelectGenre('sci')}
                    style={[
                        styles.button,
                        {
                           backgroundColor:selectedGenre==="sci"?'#00D841':'#120E43',
                           borderColor:"#00D841"
                        }
                    ]}>
                    <Text 
                        style={[
                            styles.sciGenre,
                            styles.genreText,
                            {color:selectedGenre==="sci"?'white':'#00D841'}
                        ]}>
                        Sci
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={()=>handleSelectGenre('hor')}
                    style={[
                        styles.button,
                        {
                           backgroundColor:selectedGenre==="hor"?'#FF6263':'#120E43',
                           borderColor:"#FF6263"
                        }
                    ]}>
                    <Text 
                        style={[
                            styles.horGenre,
                            styles.genreText,
                            {color:selectedGenre==="hor"?'white':'#FF6263'}
                        ]}>
                        Hor 
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={()=>handleSelectGenre('act')}
                    style={[
                        styles.button,
                        {
                           backgroundColor:selectedGenre==="act"?'#F48E2C':'#120E43',
                           borderColor:"#F48E2C"
                        }
                    ]}>
                    <Text 
                        style={[
                            styles.actGenre,
                            styles.genreText,
                            {color:selectedGenre==="act"?'white':'#F48E2C'}
                        ]}>
                        Act
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={()=>handleSelectGenre('adv')}
                    style={[
                        styles.button,
                        {
                           backgroundColor:selectedGenre==="adv"?'#4BCFFA':'#120E43',
                           borderColor:"#4BCFFA"
                        }
                    ]}>
                    <Text 
                        style={[
                            styles.advGenre,
                            styles.genreText,
                            {color:selectedGenre==="adv"?'white':'#4BCFFA'}
                        ]}>
                        Adv
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={()=>handleSelectGenre('drm')}
                    style={[
                        styles.button,
                        {
                           backgroundColor:selectedGenre==="drm"?'#A4B0BD':'#120E43',
                           borderColor:"#A4B0BD"
                        }
                    ]}>
                    <Text 
                        style={[
                            styles.drmGenre,
                            styles.genreText,
                            {color:selectedGenre==="drm"?'white':'#A4B0BD'}
                        ]}>
                        Drm
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.deadlineButton}>
                <View style={styles.inputWrapper}>
                    <Text style={styles.taskMovie}>Date</Text>
                    <TouchableOpacity onPress={()=>handleOpenDateTimePicker()} style={styles.datePickerButton}>
                        {!show && date && <Text style={styles.datePicker}>{dateString}</Text>}
                    </TouchableOpacity>        
                    {show && (
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        onChange={onDateChange}
                        />
                    )}
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.taskMovie}>Rating</Text>
                    <TextInput style={styles.ratingMovieInput} 
                            placeholder='Rating' 
                            name="rating" 
                            value={rating} 
                            onChangeText={value=>handleInputChange('rating',value)} 
                            placeholderTextColor='gray'
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.taskMovie}>Duration</Text>
                    <TextInput style={styles.durationMovieInput} 
                            placeholder='Duration' 
                            name="duration" 
                            value={duration} 
                            onChangeText={value=>handleInputChange('duration',value)} 
                            placeholderTextColor='gray'
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.taskMovie}>Disc</Text>
                    <TextInput style={styles.discMovieInput} 
                            placeholder='Disc' 
                            name="disc" 
                            value={disc} 
                            onChangeText={value=>handleInputChange('disc',value)} 
                            placeholderTextColor='gray'
                    />
                </View>
            </View>
            <View style={styles.deadlineButton}>
                <View style={styles.inputWrapper}>
                    <Text style={styles.taskMovie}>Director</Text>
                    <TextInput style={styles.directorMovieInput} 
                            placeholder='Director' 
                            name="director" 
                            value={director} 
                            onChangeText={value=>handleInputChange('director',value)} 
                            placeholderTextColor='gray'
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.taskMovie}>Stars</Text>
                    <TextInput style={styles.starsMovieInput} 
                            placeholder='Stars' 
                            name="stars" 
                            value={stars} 
                            onChangeText={value=>handleInputChange('stars',value)} 
                            placeholderTextColor='gray'
                    />
                </View>
            </View>
            <View style={styles.inputWrapper}>
                <TouchableOpacity onPress={handleCreateMovie} style={styles.createMovieButton}>
                    <Text style={styles.createMovieButtonText}>
                        CREATE MOVIE
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
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
    ratingMovieInput: {
        color: 'white',
        borderColor: '#3944F7',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 1,
        width:40,
        paddingVertical: 1,
      },
      durationMovieInput: {
        color: 'white',
        borderColor: '#3944F7',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 1,
        width:65,
        paddingVertical: 1,
      },
      directorMovieInput: {
        color: 'white',
        borderColor: '#3944F7',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 1,
        width:110,
        paddingVertical: 1,
      },
      starsMovieInput: {
        color: 'white',
        borderColor: '#3944F7',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 1,
        width:200,
        paddingVertical: 1,
      },
      discMovieInput: {
        color: 'white',
        borderColor: '#3944F7',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 1,
        width:50,
        paddingVertical: 1,
      },
    inputWrapper: {
      marginHorizontal: 10,
      marginVertical: 10,
    },
    genreText: {
      color: 'white',
      marginRight: 5,
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
    selectedDateContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
    },
    selectedDateText: {
      flex: 1,
      marginRight: 10,
      padding: 8,
      backgroundColor: '#f0f0f0',
      borderRadius: 5,
    },
    deadlineButton: {
      flexDirection: 'row',
      width:100,
      justifyContent: 'space-between',
    },
    datePickerButton: {
      borderWidth: 1,
      borderRadius: 5,
      padding: 5,
      width:80,
      borderColor: '#3944F7',
    },
    datePicker: {
      color: 'white',
    },
    genreContainer: {
      flexDirection: 'row'
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
    button: {
      margin: 10,
      padding: 10,
      borderRadius: 5,
      borderWidth: 1,
    },
    createMovieButtonText: {
        color:'white',
        textAlign:'center',
        fontWeight:"bold"
    },
    createMovieButton: {
        backgroundColor:'#1FAA59',
        paddingVertical:15,
        borderRadius:5
    }
  });