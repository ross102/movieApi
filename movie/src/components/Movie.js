import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';

const Movie = props => {
  return (
    <View>
      <ScrollView>
        <Text>{props.name}</Text>
        <Text>{props.origin_country}</Text>
      </ScrollView>
    </View>
  );
};

export default Movie;
