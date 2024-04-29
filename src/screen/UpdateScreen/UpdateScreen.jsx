import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useEffect, useState } from 'react'
import { updateMovie } from '../../components/Movie/Action';
import { getUsername } from '../Login/Action';

  function UpdateScreen({route}) {
 
  const {id,setId} = route.params;  
  const {name} = route.params;
  const [nameNew,setName]=useState(name);
  const {rating} = route.params;
  const [ratingNew,setRating]=useState(rating);
  const {director} = route.params;
  const [directorNew,setDirector]=useState(director);   
  const {stars} = route.params;
  const [starsNew,setStars]=useState(stars);   
  const {disc} = route.params;
  const [discNew,setDisc]=useState(disc);  
  const {duration} = route.params;
  const [durationNew,setDuration]=useState(duration);  
  const {description} = route.params;
  const [descriptionNew,setDescription]=useState(description);  
  const {genre} = route.params;
  const [selectedGenre,setSelectedGenre]=useState(genre); 
  const {date} = route.params;
  const [dateNew,setDate]=useState(new Date());
  const [dateString,setDateString]=useState(date);
  const {uri} = route.params;
  const [uriNew,setUri]=useState(uri);    

  const [mode,setMode]=useState();
  const [show,setShow]=useState();
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

  const handleUpdateMovie=()=>{

    const movieData={
        id,
        name:nameNew,
        description:descriptionNew,
        rating:ratingNew,
        director:directorNew,
        stars:starsNew,
        duration:durationNew,
        disc:discNew,
        genre:selectedGenre,
        date:dateString,
        uri:uriNew
    }

    updateMovie(movieData); // Shranimo v backend DB.
    global.movies = global.movies.filter(movie => movie.id != id); //Brisanje globalnega seznama FE
    global.movies.push(movieData); // Na mobile takoj lokalno prikžemo novi objekt.
    setIsReadOnly(true);
  };

  return (
    <View style={styles.container}>
        <Text style={styles.heading}>
         {name}
        </Text>
        <View>
            <View style={{alignItems:'center',marginTop:20}}>
                <Image style={{width:160,height:160,borderRadius:75}} source={{uri:uriNew}}></Image>
            </View>
            <View style={styles.inputWrapper}>
                <Text style={styles.taskMovie}>Movie Name</Text>
                <TextInput style={[ styles.taskMovieInput,
                                    {backgroundColor:isReadOnly?'#758AA2':'#00000000'}
                                  ]
                                 }  
                            placeholder='Name' 
                            name="name" 
                            value={nameNew} 
                            onChangeText={value=>handleInputChange('name',value)} 
                            placeholderTextColor='gray'
                            readOnly={isReadOnly}
                />
            </View>
            <View style={styles.inputWrapper}>
                <Text style={styles.taskMovie}>Movie Description</Text>
                <TextInput style={[ styles.taskMovieInput,
                                    {backgroundColor:isReadOnly?'#758AA2':'#00000000'}
                                  ]
                                 }
                           placeholder='Description' 
                           name="description" 
                           value={descriptionNew} 
                           onChangeText={value=>handleInputChange('description',value)} 
                           placeholderTextColor='gray'
                           readOnly={isReadOnly}
                />
            </View>
            <View style={styles.inputWrapper}>
            <Text style={styles.taskMovie}>Select Genre</Text>
            <View style={styles.genreContainer}>
                <TouchableOpacity 
                    disabled={isReadOnly}
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
                    disabled={isReadOnly}
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
                    disabled={isReadOnly}
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
                    disabled={isReadOnly}
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
                    disabled={isReadOnly}
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
            </View>
            <View style={styles.deadlineButton}>
                <View style={styles.inputWrapper}>
                    <Text style={styles.taskMovie}>Date</Text>
                    <TouchableOpacity disabled={isReadOnly} onPress={()=>handleOpenDateTimePicker()} style={[styles.datePickerButton,{backgroundColor:isReadOnly?'#758AA2':'#00000000'}]}>
                        {!show && dateNew && <Text style={styles.datePicker}>{dateString}</Text>}
                    </TouchableOpacity>        
                    {show && (
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={dateNew}
                        mode={mode}
                        is24Hour={true}
                        onChange={onDateChange}
                        />
                    )}
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.taskMovie}>Rating</Text>
                    <TextInput style={[styles.ratingMovieInput,{backgroundColor:isReadOnly?'#758AA2':'#00000000'}]} 
                            placeholder='Rating' 
                            name="rating" 
                            value={ratingNew} 
                            onChangeText={value=>handleInputChange('rating',value)} 
                            placeholderTextColor='gray'
                            readOnly={isReadOnly}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.taskMovie}>Duration</Text>
                    <TextInput style={[styles.durationMovieInput,{backgroundColor:isReadOnly?'#758AA2':'#00000000'}]} 
                            placeholder='Duration' 
                            name="duration" 
                            value={durationNew} 
                            onChangeText={value=>handleInputChange('duration',value)} 
                            placeholderTextColor='gray'
                            readOnly={isReadOnly}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.taskMovie}>Disc</Text>
                    <TextInput style={[styles.discMovieInput,{backgroundColor:isReadOnly?'#758AA2':'#00000000'}]} 
                            placeholder='Disc' 
                            name="disc" 
                            value={discNew} 
                            onChangeText={value=>handleInputChange('disc',value)} 
                            placeholderTextColor='gray'
                            readOnly={isReadOnly}
                    />
                </View>
            </View>
            <View style={styles.deadlineButton}>
                <View style={styles.inputWrapper}>
                    <Text style={styles.taskMovie}>Director</Text>
                    <TextInput style={[styles.directorMovieInput,{backgroundColor:isReadOnly?'#758AA2':'#00000000'}]} 
                            placeholder='Director' 
                            name="director" 
                            value={directorNew} 
                            onChangeText={value=>handleInputChange('director',value)} 
                            placeholderTextColor='gray'
                            readOnly={isReadOnly}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.taskMovie}>Stars</Text>
                    <TextInput style={[styles.starsMovieInput,{backgroundColor:isReadOnly?'#758AA2':'#00000000'}]}  
                            placeholder='Stars' 
                            name="stars" 
                            value={starsNew} 
                            onChangeText={value=>handleInputChange('stars',value)} 
                            placeholderTextColor='gray'
                            readOnly={isReadOnly}
                    />
                </View>
            </View>
            <View style={styles.inputWrapper}>
                <TouchableOpacity disabled={isReadOnly} onPress={handleUpdateMovie} style={[styles.updateMovieButton,{backgroundColor:isReadOnly?'#758AA2':'#1FAA59'}]}>
                    <Text style={styles.updateMovieButtonText}>
                        {isReadOnly && isUserLogedIn?'MOVIE SUCCESSFULLY UPDATED':'UPDATE MOVIE'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>       
  )
 
}

export default UpdateScreen

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
        width:120,
        paddingVertical: 1,
      },
      starsMovieInput: {
        color: 'white',
        borderColor: '#3944F7',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 1,
        width:210,
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
      width:85,
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
    updateMovieButtonText: {
        color:'white',
        textAlign:'center',
        fontWeight:"bold"
    },
    updateMovieButton: {
        backgroundColor:'#1FAA59',
        paddingVertical:15,
        borderRadius:5
    }
  });