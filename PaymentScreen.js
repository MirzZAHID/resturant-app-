import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const PaymentScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payment</Text>
      <View style={styles.paymentForm}>
        <Text style={styles.label}>Card Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter card number"
          keyboardType="numeric"
        />
        <Text style={styles.label}>Expiry Date</Text>
        <TextInput
          style={styles.input}
          placeholder="MM/YYYY"
          keyboardType="numeric"
        />
        <Text style={styles.label}>CVV</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter CVV"
          keyboardType="numeric"
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2ecc71',
  },
  paymentForm: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  payButton: {
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PaymentScreen;
