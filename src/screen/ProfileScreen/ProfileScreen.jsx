import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { getId, getName, getPassword, getUsername, logoutUserAction, updateUserAction } from '../Login/Action';

export default function ProfileScreen({navigation}) {

  const [id,setId]=useState();
  const [name,setName]=useState();
  const [username,setUsername]=useState();
  const [password,setPassword]=useState();
  const [newPassword,setNewPassword]=useState(null);
  const [isUserLogedIn,setIsUserLogedIn]=useState(false);
  const [isEditeUsername,setIsEditUsername]=useState(false);
  const selectImageFromLibrary=()=>{}
  const updateUsername=()=>{
        setIsEditUsername(false);
  }

  useEffect( () => {
    (async()=>{
        var text=await getUsername();
        setUsername(text);
        setIsUserLogedIn(text===undefined?false:true);
        var id=await getId();
        setId(id);
        var name=await getName();
        setName(name);
        var password=await getPassword();
        setPassword(password);
    })()
}, [])

 const handleLogout=()=>{
   logoutUserAction();
   setUsername("username");
   navigation.navigate('Login');
 }

 const handleUpdate=()=>{
  
  var values = {
                  id:id,
                  name:name,
                  username:username,
                  password:(newPassword != null && newPassword != '')?newPassword:password
               };

  updateUserAction(values);
  handleLogout();
}

const updateDialog = () =>
Alert.alert(
  "Confirm Operation",
  "Are you sure you want to update this profile?",
  [{ text: "Cancel",
     onPress: () => console.log('Cancel Pressed'),
     style: 'cancel'
   },
   { text: "Yes",
     onPress: () => handleUpdate()
   }
  ]
);

 const handleLogin=()=>{
  navigation.navigate('Login');
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
                        />
                      )
                      :
                      (<View style={{flexDirection:'row', alignItems:'center',paddingVertical:20}}>
                          <Text style={{fontSize:20,fontWeight:'500', color:'black', marginRight:10}}>{username}</Text>
                          {isUserLogedIn &&
                          <TouchableOpacity onPress={()=>setIsEditUsername(true)}>
                            <Icon name="edit" size={24} color="#120E43"/>
                          </TouchableOpacity>
                          }
                        </View> 
                      )  
                    }
                  </View>
                  {isEditeUsername &&
                    <View>
                       <TextInput 
                               style={{fontSize:16}} 
                               placeholder='Enter your Full Name' 
                               value={name} 
                               onChangeText={text=>setName(text)} 
                        />
                    </View>
                  }
                   {isEditeUsername &&
                    <View>
                       <TextInput 
                               style={{fontSize:16}} 
                               placeholder='Enter Your New Password' 
                               value={newPassword} 
                               onChangeText={text=>setNewPassword(text)} 
                        />
                    </View>
                  }
                  {isUserLogedIn && isEditeUsername &&
                    <TouchableOpacity onPress={updateDialog} style={styles.logoutButton}>
                      <Text style={styles.logoutText}>
                        Update
                      </Text>
                    </TouchableOpacity>
                  }
                  {isUserLogedIn && !isEditeUsername &&
                    <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
                      <Text style={styles.logoutText}>
                        Logout
                      </Text>
                    </TouchableOpacity>
                  }
                  {!isUserLogedIn &&
                    <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
                      <Text style={styles.logoutText}>
                        Login
                      </Text>
                    </TouchableOpacity>
                  }
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
  loginButton:{
    backgroundColor: '#120E43',
    padding:20,
    borderRadius:5,
    width:'100%',
    margin:10,
    // position:"absolute",
    bottom:0

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