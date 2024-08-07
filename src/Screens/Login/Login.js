import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native';

const Login = ( {navigation} ) => {

  const handleRegister = () => {
    navigation.navigate('Register')
  }
  const handleMovie = () => {
    navigation.navigate('Listmovie')
  }
  return (
    <SafeAreaView style={styles.login_project}>
      <StatusBar barStyle="light-content"></StatusBar>
      <KeyboardAvoidingView behavior='padding' style={styles.login_project}>
        <View style={styles.login_img}>
          {/* <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2809/2809591.png' }} style={{ width: 110, height: 110 }}></Image> */}
          <Lottie source={require('../folder/Animation - 1721666011503.json')} autoPlay loop />
        </View>
        <View style={styles.login_fpt}>
          <View style={styles.login_fpoly}>
            <View style={styles.login_projectpoly}>
              <View style={styles.login_fsoftimg}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/16337/16337181.png' }} style={styles.login_polyimg}></Image>
              </View>
              <TextInput style={styles.login_input}
                placeholder='Email/Phone'
                placeholderTextColor='rgba(0, 0, 0, 0.1)'
                keyboardType='email-address'
                returnKeyType='next'
                autoCorrect={false}
              >
              </TextInput>
            </View>
            <View style={styles.login_projectpoly}>
              <View style={styles.login_fsoftimg}>
                <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/483/483408.png'}} style={styles.login_polyimg}></Image>
              </View>
              <TextInput style={styles.login_input}
                placeholder='Password'
                placeholderTextColor='rgba(0, 0, 0, 0.1)'
                secureTextEntry
              >
              </TextInput>
            </View>
          </View>
          <View style={styles.login_button}>
            <TouchableOpacity onPress={handleMovie}>
              <Text style={styles.login_text}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.login_register}>
            <Text style={styles.login_fsoft}>Bạn chưa có tài khoản ?</Text>
            <TouchableOpacity onPress={handleRegister}>
              <Text style={styles.login_movie}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  login_project: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(112, 204, 255, 1)',
  },
  login_img: {
    width: 350,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  login_fpt: {
    flex: 1,
    backgroundColor: 'white',
    width: 370,
    height: 400,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
  },
  login_fpoly: {
    marginTop: 40,
  },
  login_input: {
    backgroundColor: 'rgba(200, 200, 200, 0.5)',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: 260,
    height: 46,
  },
  login_button: {
    backgroundColor: 'rgba(0, 178, 255, 1)',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 70,
    marginRight: 70,
  },
  login_text: {
    color: 'white',
    padding: 14,
    fontWeight: 'bold',
    fontSize: 20,
  },
  login_register: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 80,
  },
  login_fsoft: {
    color: 'black',
    marginRight: 10,
  },
  login_movie: {
    color: 'red',
    fontWeight: 'bold',
  },
  login_projectpoly: {
    flexDirection: 'row',
    margin: 10,
    left: 20,
  },
  login_polyimg: {
    width: 26,
    height: 26,
  },
  login_fsoftimg: {
    backgroundColor: 'rgba(200, 200, 200, 0.5)',
    width: 40,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  }
})