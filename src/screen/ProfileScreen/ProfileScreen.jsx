import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'

export default function ProfileScreen() {
  const [username,setUsername]=useState("username");
  const [isEditeUsername,setIsEditUsername]=useState(false);
  const selectImageFromLibrary=()=>{}
  const updateUsername=()=>{
        setIsEditUsername(false);
  }
  return (
            <ScrollView>
              <View style={{alignItems:'center',marginTop:20}}>
                <TouchableOpacity onPress={selectImageFromLibrary}>
                  <Image style={{width:150,height:150,borderRadius:75}} source={{uri:"https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651_1280.png"}}></Image>
                </TouchableOpacity>
                  <View>
                    {isEditeUsername ?
                     (
                        <TextInput 
                               style={{fontSize:16}} 
                               placeholder='Enter your userman' 
                               value={username} 
                               onChangeText={text=>setUsername(text)} 
                               autoFocus
                               onBlur={updateUsername}
                        />
                      )
                      :
                      ( <View style={{flexDirection:'row', alignItems:'center',paddingVertical:20}}>
                          <Text style={{fontSize:20,fontWeight:'500', color:'black', marginRight:10}}>{username}</Text>
                          <TouchableOpacity onPress={()=>setIsEditUsername(true)}>
                            <Icon name="edit" size={24} color="#120E43"/>
                          </TouchableOpacity>
                        </View> 
                      )  
                    }
                  </View>
              </View>
            </ScrollView>
         )
}

const styles = StyleSheet.create({
  tasks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskContainer: {
    width: '100%',
    marginTop: 20,
    marginBottom:30,
    // paddingHorizontal: 10,
  },
  allTaskText: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
    marginBottom: 20,
  },
  taskDetail: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  completedValue: {
    color: 'white',
  },
  completedText: {
    fontWeight: '500',
    color: 'white',
  },
  inProgressText: {
    color: 'white',
  },
  inProgressValue: {
    color: 'white',
  },
  completedTaskDetail: {
    backgroundColor: 'green',
  },
  inProgressTaskDetail: {
    backgroundColor: 'orange',
  },
  logoutButton:{
    backgroundColor:'#E6425E',
    padding:20,
    borderRadius:5,
    width:'100%',
    margin:10,
    // position:"absolute",
    bottom:0

  },
  logoutText:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    color:'white'
  }
});