import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FirebaseAuth } from '../../firebaseConfig'; // Update with the correct path

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const auth = FirebaseAuth;
      await createUserWithEmailAndPassword(auth, email, password);
      // Signup successful, navigate to Home screen or any other screen
      Alert.alert('Registered Sucessfully...');

      navigation.navigate('Login');
    } catch (error) {
      // Handle signup errors
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create an Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
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
      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.signupLink}>
          Already have an account? <Text style={styles.signupText}>Login here</Text>
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 15,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: '#f5f5f5',
  },
  signupButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 10,
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signupButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
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

export default SignupScreen;
