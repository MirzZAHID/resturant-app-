// ProfileScreen.js

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profileImage: require(''), // Replace with the actual path
  };

  return (
    <View style={styles.container}>
      <Image source={userProfile.profileImage} style={styles.profileImage} />
      <Text style={styles.userName}>{userProfile.name}</Text>
      <Text style={styles.userEmail}>{userProfile.email}</Text>
      <TouchableOpacity
        style={styles.editProfileButton}
        onPress={() => navigation.navigate('EditProfile')}
      >
        <Text style={styles.editProfileButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userEmail: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  editProfileButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  editProfileButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
