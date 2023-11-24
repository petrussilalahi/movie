import React,{useEffect, useState} from 'react';
import HomeScreen from '../page/Home';
import SearchMovie from '../page/SearchMovie';
import FavMovie from '../page/FavouriteMovie';
import Book from '../page/Details';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export const Tabs = ({stores}) => {
    const {fav_books} = stores.getState().favReducer;
    useEffect(() => {
        console.log("fav_books", fav_books);
    }, [fav_books.length])
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, colour }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
              size = focused ? size + 5 : size + 5;
            } else if (route.name === 'Search Movie') {
              iconName = focused ? 'search-sharp' : 'search-outline';
              size = focused ? size + 5 : size + 5;
            } else if (route.name === 'Favourites Movie') {
              iconName = focused ? 'heart' : 'heart-outline';
              size = focused ? size + 5 : size + 5;
            } else if (route.name === 'ProfileCover') {
              iconName = focused
                ? 'ios-person-circle'
                : 'ios-person-circle-outline';
              size = focused ? size + 5 : size + 5;
            } else if (route.name === 'History') {
              iconName = focused ? 'ios-book' : 'ios-book-outline';
              size = focused ? size + 8 : size + 5;
            }
            return <Ionic name={iconName} size={size} colour={colour} />;
          },
          
            "tabBarActiveTintColor": "black",
            "tabBarInactiveTintColor": "black",
            "tabBarShowLabel": false,
            "tabBarItemStyle": {
              "backgroundColor": "#86b9db",
              "height": 50
            },
            "tabBarStyle": [
              {
                "display": "flex"
              },
              null
            ]
          
        })}
        >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: true }}
        />
        <Tab.Screen name="Search Movie" component={SearchMovie} />
        <Tab.Screen name="Favourites Movie" component={FavMovie} options={fav_books.length > 0 && {
          tabBarBadge: '',
          tabBarBadgeStyle: {
            minWidth: 14,
            minHeight: 14,
            maxWidth: 14,
            maxHeight: 14,
            borderRadius: 7,
          },
        } }  />
        <Tab.Screen name="Detail Movie" component={Book} options={{ tabBarButton: (props) => null }}/>
      </Tab.Navigator>
    )
    
}