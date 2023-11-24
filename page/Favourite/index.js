import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { favBook, UnfavBook } from '../../redux/actions';
import { connect } from 'react-redux';
import { BookNav } from '../Detail';
import {styles} from './styles.js';

function FavList({ navigation, fav_books, UnfavBook }) {
  const deleteFav = (id) => {
    UnfavBook(id);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      {
        fav_books.length == 0 ? 
          <View style={styles.wrapNoFound}> 
            <Text style={{ fontSize: 20, fontWeight: 'bold',}}>No Favourites Movie</Text>
          </View>
          :
          <ScrollView>
            <View style={styles.boxView}>
              {fav_books?.map((x) => (
                <View>
                  <View style={styles.wrapTitle}>
                    <View>
                      <Text style={styles.title}>Title</Text>
                      <Text
                        style={styles.textTitle}>
                        "{x.title}"
                      </Text>
                    </View>
                    <Image
                      source={{ uri: `https://image.tmdb.org/t/p/original${x.image}` }}
                      style={styles.imageFav}
                    />
                  </View>
                  <Text
                    style={styles.textAdults}>
                    Adult: {x.isFav ? 'Yes' : 'No'}
                  </Text>
                  <Text
                    style={styles.textAdults}>
                    Release Date: {x.author}
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
          </ScrollView>

      }
      
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => ({
  fav_books: state.favReducer.fav_books,
});

const mapDispatchToProps = { favBook, UnfavBook };



export default connect(mapStateToProps, mapDispatchToProps)(FavList);
