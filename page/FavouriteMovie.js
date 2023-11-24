import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { favBook, UnfavBook } from '../redux/actions';
import { connect } from 'react-redux';
import { useEffect, useState, useRef, useCallback } from 'react';
import { BookNav } from './Details.js';

function FavList({ navigation, fav_books, UnfavBook }) {
  const deleteFav = (id) => {
    UnfavBook(id);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        {
          fav_books.length == 0 ?
          <View style={{justifyContent:'center', marginVertical: 10, alignItems:'center'}}> 
            <Text style={{ fontSize: 20, fontWeight: 'bold',}}>No Favourite Movie</Text>
          </View> : <View style={styles.boxView}>
          {fav_books?.map((x) => (
            <View>
              <Image
                source={{ uri: `https://image.tmdb.org/t/p/original${x.image}` }}
                style={styles.imageFav}
              />
              <View style={styles.fontDesign}>
                <Text style={{ fontSize: 15 }}>Title</Text>
                <Text
                  style={styles.textTitle}>
                  "{x.title}"
                </Text>
              </View>
              <Text
                style={styles.textAdults}>
                Adults: {x.author}
              </Text>
              {BookNav(navigation, x.title, x.author, x.image, x.desc)}
              <TouchableOpacity
                onPress={() => {
                 deleteFav(x.id);
                }}>
                <Text style={styles.smallText}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        }
      </ScrollView>
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => ({
  fav_books: state.favReducer.fav_books,
});

const mapDispatchToProps = { favBook, UnfavBook };

const styles = StyleSheet.create({
  boxView: {
    borderOpacity: 3,
    fontSize: 10,
    marginTop: 10,
    borderWidth: 3,
    padding: 10,
    borderRadius: 8,
    borderStyle: 'solid',
    marginHorizontal: 15,
  },
  fontDesign: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  smallText: {
    flex: 0.25,
    paddingTop: 5,
    paddingBottom: 25,
    fontSize: 10,
    color: 'grey',
    textAlign: 'right',
  },
  imageFav:{
    position: 'absolute',
    padding: 10,

    height: 70,
    width: 60,
    top: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    borderRadius: 20,
    alignItems: 'stretch',
    alignSelf: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',
  },
  textTitle:{
    flexShrink: 2,
    width: 260,
    marginLeft: 5,
    marginTop: 10,
    marginBottom: 5,
    fontSize: 20,
    fontWeight: '600',
    color: '#222',
    fontStyle: 'italic',
  },
  textAdults:{
    opacity: 2,
    fontSize: 14.5,
    marginLeft: 10,
    marginBottom: 30,
    color: 'blue',
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FavList);
