import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function House({ cover }) {
  return (
    <View style={styles.container}>
      <View>
        <Image 
        source={cover}
        style={styles.cover}
        />
      </View>

        <View style={styles.content}>
          <Text style={styles.descriptions}>
            Casa para você morar, casa show de bola e um sonho
          </Text>
          <Text style={styles.price}>
            R$ 5.600,00
          </Text>
        </View>

    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flexDirection: 'row',
    width: 270,
    height: 70,
    backgroundColor: '#FFF',
    elevation: 2,
    padding: 6,
    marginVertical: 5,
    marginRight: 20,
    marginLeft: 2,
    borderRadius: 10,
  },
  cover:{
    borderRadius: 10,
    width: 60,
    height: 60
  },
  content: {
    width: '65%',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    height: '100%'
  },
  descriptions:{
    fontSize: 10,
    fontFamily: 'Montserrat_500Medium',
  },
  price:{
    fontSize: 14,
    fontFamily: 'Montserrat_700Bold',
  }
});