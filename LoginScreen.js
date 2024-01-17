import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, Image, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseAuth } from '../../firebaseConfig'; // Update with the correct path

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const auth = FirebaseAuth;
      await signInWithEmailAndPassword(auth, email, password);
      setEmail('')
      setPassword('')
      // Display a welcome alert to the user
      Alert.alert('Welcome', 'Login successful!', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);

      // Navigate to Home screen or any other screen upon successful login
      navigation.navigate('Home');
    } catch (error) {
      // Handle login errors
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../images/download.jpg')} style={styles.logo} />
      <Text style={styles.header}>Welcome back!</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button
        title="Login"
        onPress={handleLogin}
        buttonStyle={styles.loginButton}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupLink}>
          Don't have an account? <Text style={styles.signupText}>Sign up here</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 15,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: '#f5f5f5',
  },
  loginButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 10,
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signupLink: {
    marginTop: 20,
    color: '#555',
    fontSize: 16,
    textAlign: 'center',
  },
  signupText: {
    color: '#3498db',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
