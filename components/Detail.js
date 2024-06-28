import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, Linking, TouchableOpacity } from 'react-native';

const Detail = ({ route, navigation }) => {
  const { friend } = route.params;

  const makeCall = (number) => {
    Linking.openURL(`tel:${number}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={friend.gambar} style={styles.image} />
      <Text style={styles.name}>{friend.judul}</Text>
      <Text style={styles.phone}>Phone: {friend.telpon}</Text>
      <Text style={styles.email}>Email: {friend.email}</Text>
      <Text style={styles.address}>Address: {friend.alamat}</Text>
      <Text style={styles.gender}>Gender: {friend.gender}</Text>
      <Text style={styles.prodi}>Prodi: {friend.prodi}</Text>
      <TouchableOpacity style={styles.callButton} onPress={() => makeCall(friend.telpon)}>
        <Text style={styles.callButtonText}>Call {friend.judul}</Text>
      </TouchableOpacity>
      <Button title="Go Back to Home" onPress={() => navigation.navigate('Home')} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  phone: {
    fontSize: 18,
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    marginBottom: 10,
  },
  address: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  gender: {
    fontSize: 18,
    marginBottom: 10,
  },
  prodi: {
    fontSize: 18,
    marginBottom: 10,
  },
  callButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  callButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Detail;
