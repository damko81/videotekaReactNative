import React, {useEffect,useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CreateMovieForm } from '../CreateMovieForm';
import {useNavigation} from '@react-navigation/native';
import { LoadMoviesForm } from '../LoadMoviesForm';

const BottomBar = () => {
  const navigation = useNavigation();
  const [openCreateMovie,setOpenCreateMovie ]=useState(false);
  const [openLoadMovies,setOpenLoadMovies ]=useState(false);

  const navigateToScreen = screenName => {
    navigation.navigate(screenName);
  };

  const closeOpenCreateMovie=()=>setOpenCreateMovie(false);
  const closeOpenLoadMovies=()=>setOpenLoadMovies(false);

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigateToScreen('Home')}>
          <Icon name="home" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setOpenCreateMovie(!openCreateMovie)}>
          <Icon name="plus" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setOpenLoadMovies(!openLoadMovies)}>
          <Icon name="gear" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('Profile')}>
          <Icon name="user" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
   {openCreateMovie &&   <View style={styles.createMovieFrom}>
        <CreateMovieForm closeOpenCreateMovie={closeOpenCreateMovie}/>
      </View>}
    {openLoadMovies &&   <View style={styles.loadMoviesForm}>
        <LoadMoviesForm closeOpenLoadMovies={closeOpenLoadMovies}/>
      </View>}  
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#120E43',
    height: 60,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  createMovieForm:{
    position:'absolute',
    bottom:50,
    left:0,
    right:0,
  },
  loadMoviesForm:{
    position:'absolute',
    bottom:0,
    left:0,
    right:0,
  }
});

export default BottomBar;