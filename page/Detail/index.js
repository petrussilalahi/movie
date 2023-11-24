import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  StyleSheet,
  Button,
  SafeAreaView,
  Animated,
} from 'react-native';
import { useEffect, useState, useRef, useCallback } from 'react';
import { FavBook } from '../../redux/actions/index';
import { connect } from 'react-redux';
import {styles} from './styles.js';

const BookNav = (navigation, title, author, image, desc, isFav) => (
  <Button
    title="View Movie"
    color="#74cfe8"
    onPress={() => [
      navigation.navigate('Detail Movie', {
        title: title,
        author: author,
        img: image,
        desc: desc,
        isFav: isFav,
      }),
    ]}
  />
);

const Book = ({ navigation , route, FavBook, fav_books }) => {
  const adult = route.params.adult;
  const title = route.params.title;
  const image = route.params.img;
  const desc = route.params.desc;
  const isFav = route.params.isFav;
 
  const anim = useRef(new Animated.Value(0));

  const shake = useCallback(() => {
    // makes the sequence loop
    Animated.loop(
      // runs the animation array in sequence
      Animated.sequence([
        // shift element to the left by 2 units
        Animated.timing(anim.current, {
          toValue: -2,
          duration: 50,
          useNativeDriver: true,
        }),
        // shift element to the right by 2 units
        Animated.timing(anim.current, {
          toValue: 2,
          duration: 50,
          useNativeDriver: true,
        }),
        // bring the element back to its original position
        Animated.timing(anim.current, {
          toValue: 0,
          duration: 50,
          useNativeDriver: true,
        }),
      ]),
      // loops the above animation config 2 times
      { iterations: 2 }
    ).start();
  }, []);

  return (
    <ScrollView>
      <SafeAreaView>
        <View>
          <Image style={styles.imagebook} source={{ uri: `https://image.tmdb.org/t/p/original${image}`}} />
          <Text style={styles.bookTitle}>{title}</Text>
          <Text style={styles.bookAuthor}>Adult: {adult ? 'Yes' : 'No'}</Text>
          <Text style={styles.bookAuthor}>Release Date: {isFav}</Text>
        </View>
        <View style={styles.container}>
          <Animated.View style={{ transform: [{ translateX: anim.current }] }}>
            <Button
                title="Favourite Movie"
                color="#17315c"
                type="outline"
                mode="contained"
                onPress={()=> {
                shake();
                FavBook(title, isFav, image, desc)
                navigation.navigate('Favourites Movie')
              }}
            />
          </Animated.View>
        </View>
        <View style={styles.styleBtn}/>
        <Text style={styles.bookDesc}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'blue' }}>
            {' '}
            Description{' '}
          </Text>
          :{desc}
        </Text>
      </SafeAreaView>
    </ScrollView>
  );
};



const mapDispatchToProps = { FavBook };
const mapStateToProps = (state) => ({ fav_books: state.favReducer.fav_books });

export default connect(mapStateToProps, mapDispatchToProps)(Book);

export { BookNav, Book };
