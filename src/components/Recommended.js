import React from 'react';
import { Text, StyleSheet, ImageBackground } from 'react-native';

export default function Recommended({cover, house, offer}) {
  return (
    <ImageBackground
      source={ cover }
      style={styles.container}
      blurRadius={4}
    >
      <Text style={[styles.house, styles.shadow]}>
        { house }
      </Text>
      <Text style={[styles.descriptions, styles.shadow]}>
        {offer} OFF
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container:{
    height: 130,
    width: 230,
    marginRight: 20,
    marginBottom: 40,
    opacity: 0.8,
    backgroundColor: '#000',
    marginLeft: 3,
    padding: 12,
    marginTop: 20,
  },
  house:{
    fontFamily: 'Montserrat_700Bold',
    color: '#FFF',
    fontSize: 17,
    shadowOpacity: 1,
  },
  descriptions:{
    fontSize: 15,
    color: '#FFF',
    shadowOpacity: 1,
    fontFamily: 'Montserrat_700Bold',
  },
  shadow:{
    textShadowOffset: {width:1, height: 2},
    textShadowRadius: 3,
    textShadowColor: '#000'
  }
})
