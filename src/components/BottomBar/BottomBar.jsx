/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useEffect,useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CreateMovieForm } from '../CreateMovieForm';
import {useNavigation} from '@react-navigation/native';
//import {useDispatch, useSelector} from 'react-redux';

const BottomBar = () => {
  const navigation = useNavigation();
  //const dispatch = useDispatch();
  //const {task, auth} = useSelector(store => store);
  const [openCreateMovie,setOpenCreateMovie ]=useState(false);

  const navigateToScreen = screenName => {
    navigation.navigate(screenName);
  };
/*
  useEffect(() => {
    const getUserProfileData = async () => {
      const jwt = await getData('jwt');
      if (jwt) {
        dispatch(getUserProfile(jwt));
      }
    };

    getUserProfileData();
    dispatch(getAllTasks());

  }, []);
*/
  const closeOpenCreateMovie=()=>setOpenCreateMovie(false);

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigateToScreen('Home')}>
          <Icon name="home" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setOpenCreateMovie(!openCreateMovie)}>
          <Icon name="plus" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('Profile')}>
          <Icon name="user" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
   {openCreateMovie &&   <View style={styles.createMovieForm}>
        <CreateMovieForm closeOpenCreateMovie={closeOpenCreateMovie}/>
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
    // borderTopWidth: 1,
    position: 'absolute',
    // top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // borderWidth: 1,
  },
  createMovieFrom:{
    position:'absolute',
    bottom:50,
    left:0,
    right:0,
  }
});

export default BottomBar;