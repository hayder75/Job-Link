import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import {COLORS, icons, SIZES, } from '../../../constants'


const CustomCard = () => (
  <TouchableOpacity style={styles.card} >
    <View style={styles.textContainer}>
      <Text style={styles.buttonText}>Start Studying</Text>
      <Ionicons name="arrow-forward" size={24} color={COLORS.white} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 30,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: COLORS.white,
    marginRight: 10,
  },
});

export default CustomCard;
