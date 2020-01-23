import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';

import movies from '../api/movies';

export const getApi = async (movie, setMovie, mount) => {
  mount = true;

  if (mount) {
    try {
      const response = await movies.get('/550', {
        params: {
          api_key: '712ad7462949bf536a1eea5dd0a07c0f',
        },
      });
      await setMovie(response.data.production_companies);
    } catch (error) {
      if (error) setMovie('Please try again later');
    }
  }
  mount = false;
};
