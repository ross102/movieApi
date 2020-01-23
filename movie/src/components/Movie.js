import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';

const Movie = props => {
  return (
    <View style={style.containerStyle}>
      <ScrollView>
        <Image
          style={style.imageStyle}
          source={{
            uri:
              'https://image.tmdb.org/t/p/w500' + props.logo ||
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpajo6PFxcW3t7ecnJyqqqq+vr6xsbGXmO98AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABPUlEQVRoge3Tv0/CQBjG8YcWaMcebymOENLI2MZoHMHEvVUKjq1K4lhM2Kvxx7/tUUiamDhc6GSez8INzbf3HleAiIiIiIiIiIiIiNozAGzvuJYTW2reXmso7bX8YN96HUR1a7RZ6+VVOgU+p4LuZGrSkqK0PWfwfl+3ht/hcpdvPkJ0g0fBYpYZtS7HttfPMatbAbZzJ1kjjnqVK1ihNzdpdX3b65S4qVsjXbG9EtuoEzliC/RbDFoIL7wY2NZrQayPzw1VpH/FUUqNjVrx0+9W8Rzrlt7yMMvMWq7fzHhoCTp6Rr0vw0uiH8+as69bov/AyNqf/Rms3Ky1aO7EYV93X2nlBIXg7WVSmrWs5q4eWrvVdYLbpR4/PTeZ8S9O82mdzMr7SVstV6mqrRaKh9ZSRERERERERET0n/wAZwMqI9kyPcoAAAAASUVORK5CYII=',
          }}
        />
        <Text style={{fontSize: 20, color: 'black'}}>{props.name}</Text>
        <Text>{props.origin_country}</Text>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  containerStyle: {
    textAlign: 'center',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    marginTop: 20,
    width: 250,
    height: 250,
  },
});

export default Movie;
