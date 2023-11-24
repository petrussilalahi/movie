import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Animated,
  ActivityIndicator,
} from 'react-native';
import { useEffect, useState, useRef } from 'react';
import { BookNav } from '../Detail';
import { TextAbstract } from '../../utils/handleText.js';
import {styles} from './styles.js';


export default function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [indicator, setIndicator] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
  const [page, setPage] = useState(1)

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDEyOWMyYjFlOWEwMTQ3ZDZlYWM4Njc0NDMzZDE0ZCIsInN1YiI6IjY1NWY3NDNkMWQzNTYzMDExYjljY2EzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LIbPBOOUYGhA3XkqDW6Qtz8YvrMywQtIA3dcI9B43jc'
    }
  };

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true
      }
    ).start();
  }, [fadeAnim])

  useEffect(() => {
    setIndicator(true);
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`, options
    )
      .then((x) => x.json())
      .then((json) => {
        setIndicator(false);
        setData([...data, ...json.results]);
      });
  }, [page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  }


  const renderItem = ({ item, idx }) => {
    const image = item.poster_path;
    const title = item.original_title;
    const adult = item.adult;
    const desc = item.overview;
    const release_date = item.release_date;

    return (
      <View style={styles.boxView} key={idx}>
        {
          indicator ? <ActivityIndicator size="large" color="#0000ff" /> : <Image
          source={{ uri: `https://image.tmdb.org/t/p/original${image}` }}
          style={styles.images}
        />
        }
        <Text
          style={styles.textTitle}>
          {TextAbstract(title, 20)}
        </Text>
        <Text
          style={styles.textAdult}>
          Adult : {adult ? 'Yes' : 'No'}
        </Text>
        <Text
          style={styles.textRelease}>
          Release Date : {release_date}
        </Text>
        {BookNav(navigation, title, adult, image, desc, release_date)}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View style={{ marginBottom: 20, margin: 20 , marginTop:5,}} />
        )}
        numColumns={2}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}

