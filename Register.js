// Login.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Linking } from 'react-native';


const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Tidak perlu validasi, langsung pindah ke halaman MainMenu
    navigation.replace('Login');
  };

  const openInstagramSignUp = () => {
    const instagramSignUpURL = 'https://www.instagram.com/accounts/emailsignup/';
    Linking.openURL(instagramSignUpURL);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.pinimg.com/474x/ac/76/72/ac76724616bde8c8749f73c1d07ee255.jpg' }}
        style={styles.logo}
      />
    <View style={styles.signupContainer_l}>
  <View style={styles.centeredTextContainer_l}>
    <Text style={styles.blueText_l} >Sign Up To See Photos and Videos</Text>
    <Text style={styles.blueText_l}>From Your Computer</Text>
  </View>
</View>
      <TextInput
        style={styles.input}
        placeholder="Mobile Number Or Email"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Fullname"
        secureTextEntry
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TouchableOpacity
        style={[styles.button, { width: 300 }]}  // Panjang tombol sesuai dengan lebar textbox
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
     <View style={styles.signupContainer}>
  <View style={styles.centeredTextContainer}>
    <Text style={styles.blueText} >Or</Text>
    <Text style={styles.blueText}>Login With Facebook</Text>
  </View>
</View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    marginTop: 1,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  signupContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  centeredTextContainer: {
    alignItems: 'center',
  },
  blueText: {
    color: 'blue',
  },
  
  signupContainer_l: {
    flex: 1,
    alignItems: 'center',
    marginTop: 1,
  },
  centeredTextContainer_l: {
    alignItems: 'center',
  },
  blueText_l: {
    color: 'gray',
  },
});

export default Login;
