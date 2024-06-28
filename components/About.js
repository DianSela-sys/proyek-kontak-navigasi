import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Screen</Text>
      <Button
        title="GOTO KONTAK"
        onPress={() => navigation.navigate('Kontak MyFriend')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default About;
