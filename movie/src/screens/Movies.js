import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';

import {getApi} from '../helpers/getApi';
import Movie from '../components/Movie';

const Movies = () => {
  const [movieData, setMovieData] = useState([]);
  let isMounted = false;

  useEffect(() => {
    getApi(movieData, setMovieData, isMounted);
  }, []);

  console.log(movieData);
  console.log('****');
  return (
    <>
      <Text
        style={{
          fontSize: 20,
          alignSelf: 'center',
          margin: 10,
          color: 'black',
        }}>
        Movie Production Companies
      </Text>
      <FlatList
        style={{textAlign: 'center'}}
        keyExtractor={item => item.id.toString()}
        data={movieData}
        renderItem={({item}) => (
          <Movie
            name={item.name}
            counttry={item.origin_country}
            logo={item.logo_path}
          />
        )}
      />
    </>
  );
};

export default Movies;
