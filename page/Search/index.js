import {
  Text,
  StyleSheet,
  FlatList,
  Image,
  View,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import { BookNav } from '../Detail';
import { SaveSearch } from '../../redux/actions/index';
import { connect } from 'react-redux';
import {styles} from './styles.js';

function SearchBook({ navigation, SaveSearch }) {
  const [data, setData] = useState([]);
  const [key, setKeyword] = useState('');
  const [indicator, setIndicator] = useState(false);



  const GetData = () => {
    setIndicator(true);
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${key}&include_adult=false&language=en-US&page=1'`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDEyOWMyYjFlOWEwMTQ3ZDZlYWM4Njc0NDMzZDE0ZCIsInN1YiI6IjY1NWY3NDNkMWQzNTYzMDExYjljY2EzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LIbPBOOUYGhA3XkqDW6Qtz8YvrMywQtIA3dcI9B43jc'
        }
      }
      
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json.results);
        setIndicator(false);
      });
  };

  const Entry = ({ item }) => {
    const sTitle = item.title;
    const sAuthor = item.adult;
    const sDesc = item.overview;
    const sRealease = item.release_date;

    var url = '';
    if (item != null) {
      if (item.poster_path != null) {
        url = `https://image.tmdb.org/t/p/original${item.poster_path}`;
        return (
          <SafeAreaView style={styles.entry}>
            <View style={styles.imageContainer}>
              <Image
                onLoad={() => {}}
                style={styles.image}
                source={{ uri: url }}></Image>
            </View>
            <View style={styles.textStyle}>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                {item.title}
              </Text>
              <Text> Adult: {item.adult ? 'Yes' : 'No'}</Text>
              <Text> Popular: {item.popularity}</Text>
              <Text> Average rating: {item.vote_average}★</Text>
              {BookNav(navigation, sTitle, sAuthor, url, sDesc, sRealease)}
            </View>
          </SafeAreaView>
        );
      } else {
        return (
          <SafeAreaView style={styles.entry}>
            <View style={styles.imageContainer}>
              <Image
                onLoad={() => {}}
                style={styles.image}
                source={require('../../assets/imagenot.jpg')}></Image>
            </View>
            <View style={styles.textStyle}>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                {item.title}
              </Text>
              <Text> Adult: {item.adult ? 'Yes' : 'No'}</Text>
              <Text> Popular: {item.popularity}</Text>
              <Text> Average rating: {item.vote_average}★</Text>
              {BookNav(navigation, sTitle, sAuthor, url, sDesc, sRealease)}
            </View>
          </SafeAreaView>
        );
      }
    } else {
      return (
        <SafeAreaView>
          <Text>Not found</Text>
        </SafeAreaView>
      );
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.sectionStyle}>
        <Image
          source={{
            uri: 'https://img.icons8.com/ios-filled/50/null/search--v1.png',
          }}
          style={styles.imageStyle}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Enter keyword"
          value={key}
          onChangeText={setKeyword}
          maxLength={25}/>
      </View>

      <TouchableOpacity
        onPress={() => [GetData(key), SaveSearch(key)]}>
        <View style={styles.touchableItem}>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>Get movie</Text>
          <Text style={{ color: 'gray', fontSize: 10 }}>
            Search for movie 
          </Text>
          <Image
            source={{
              uri: 'https://img.icons8.com/external-anggara-glyph-anggara-putra/32/null/external-book-school-anggara-glyph-anggara-putra-4.png',
            }}
            style={styles.imageStyleBook}
          />
        </View>
      </TouchableOpacity>
      <ActivityIndicator color="purple" size={30} animating={indicator} />
      <FlatList data={data} renderItem={Entry} />
    </SafeAreaView>
  );
}



const mapDispatchToProps = { SaveSearch };

const mapStateToProps = (store) => ({
  search_history: store.saveSearchReducer.search_history,
});

export { SearchBook };
export default connect(mapStateToProps, mapDispatchToProps)(SearchBook);
