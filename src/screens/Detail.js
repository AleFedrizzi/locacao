import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import Stars from 'react-native-stars';

import SwiperComponent from '../components/Swiper';


export default function Detail() {
  return (
    <View style={styles.container}>
      <View style={styles.swiperContent}>
        <SwiperComponent />
      </View>

      <View style={styles.headerContent}>
        <View style={{width: '65%'}}>
          <Text style={styles.house}>Casa de Praia</Text>
        </View>

        <View style={{width: '35%'}}>
          <Text style={styles.rating}>Avaliações</Text>
          <View style={{alignItems: "center", flexDirection: 'row'}}>
            <Stars
              default={4} 
              count={5}
              half={true}
              starSize={20}
              fullStar={ <Ionicons name="md-star" size={24} style={styles.myStarStyle} /> }
              emptyStar={ <Ionicons name="md-star-outline" size={24} style={styles.myStarStyle} /> }
              halfStar={  <Ionicons name="md-star-half" size={24} style={styles.myStarStyle} /> }
              />
          </View>
        </View>
      </View>

      <Text style={styles.price}>
        R$ 1.200,00
      </Text>
      <Text style={styles.descriptions}>
        Casa nova a uma quadra da praia, um lugar seguro e monitorado 24hs.
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal:15, marginTop: 35}}>
        <View style={styles.slide}>
          <Image  
            source={require('../assets/house3.jpg')}
            style={{ width: 110, height: 110, borderRadius: 8}}
          />
        </View>
        <View style={styles.slide}>
          <Image  
            source={require('../assets/house6.jpg')}
            style={{ width: 110, height: 110, borderRadius: 8}}
          />
        </View>
        <View style={styles.slide}>
          <Image  
            source={require('../assets/house4.jpg')}
            style={{ width: 110, height: 110, borderRadius: 8}}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FFF'
  },
  swiperContent:{
    flexDirection: 'row',
    height: 340,
    width: '100%'
  },
  headerContent:{
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  house:{
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    color: '#4f4a4a',
  },
  rating:{
    fontFamily: 'Montserrat_500Medium',
    fontSize: 11,
    color: '#4f4a4a',
  },
  myStarStyle:{
    color: '#E7a74E',
    backgroundColor: 'transparent',
    // textShadowColor: '#000',
    // textShadowOffset: {width: 1, height: 1},
    // textShadowRadius: 1,
  },
  price:{
    paddingHorizontal: 20,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 16,
    color: '#000',
  },
  descriptions:{
    fontFamily: 'Montserrat_500Medium',
    paddingHorizontal: 20,
    color: '#b3aea3',
    fontSize: 15,
    lineHeight: 20,
    marginTop: 20,
  },
  slide:{
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFF',
    height: 110,
    width: 110,
    borderRadius: 8,
    marginRight: 15,
  }
})