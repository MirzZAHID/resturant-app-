import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const HomeScreen = (navigation) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../images/download.jpg')} style={styles.restaurantImage} />
        <Text style={styles.screenHeader}>Welcome to Our Restaurant</Text>
        <Text style={styles.description}>
          Discover a delightful dining experience with our exquisite menu crafted with passion and care.
        </Text>
      </View>
    </View>
  );
};

const MenuScreen = ({ cart, setCart }) => {
  const [menuData, setMenuData] = useState([
    {
      id: '1',
      name: 'Dish 1',
      description: 'Delicious dish with a unique flavor',
      price: '$9.99',
      image: require('../images/download.jpg'),
    },
    {
      id: '2',
      name: 'Dish 2',
      description: 'A classic favorite with a twist',
      price: '$12.99',
      image: require('../images/food2.jpg'),
    },
    {
      id: '3',
      name: 'Dish 3',
      description: 'Savory and mouth-watering',
      price: '$15.99',
      image: require('../images/food2.jpg'),
    },
    
  ]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    Alert.alert('Item Added', `${item.name} has been added to your cart!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenHeader}>Menu</Text>
      <FlatList
        data={menuData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.newItem} onPress={() => addToCart(item)}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
            <View style={styles.addToCartButton}>
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const CartScreen = ({ cartItems, removeFromCart,navigation }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price.slice(1)), 0).toFixed(2);

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  const handlePayment = () => {
    navigation.navigate('Payment');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenHeader}>Cart</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.itemPrice}>${item.price}</Text>
            </View>
            <TouchableOpacity style={styles.removeItemButton} onPress={() => handleRemoveItem(item.id)}>
              <Text style={styles.removeItemButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalPrice}>${totalPrice}</Text>
      </View>
      <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
        <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

const RestaurantScreen = () => {
  const [cart, setCart] = useState([]);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Menu"
        options={{
          tabBarBadge: cart.length > 0 ? cart.length : null,
        }}
      >
        {() => <MenuScreen cart={cart} setCart={setCart} />}
      </Tab.Screen>
      <Tab.Screen name="Cart">
        {() => <CartScreen cartItems={cart} removeFromCart={(itemId) => setCart(cart.filter((item) => item.id !== itemId))} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D1EEEE',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    alignItems: 'center',
  },
  restaurantImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  screenHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'black',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    color: '#777',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addToCartButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 5,
  },
  addToCartText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    elevation: 3,
  },
  removeItemButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 5,
  },
  removeItemButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
  },
  newItem: {
    width: "100%",
    flexDirection : 'row',
    justifyContent: "space-around",
    margin: 5
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e74c3c',
  },
  paymentButton: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  paymentButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default RestaurantScreen;
