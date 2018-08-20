import React, { Component } from 'react';
import {
        createBottomTabNavigator,
        createStackNavigator,
        createDrawerNavigator,
        createSwitchNavigator
      } from 'react-navigation';
import { YellowBox, Easing, Animated } from 'react-native';

import Icon from "react-native-vector-icons/Ionicons"

import MovieList from './pages/MovieList'
import Mine from './pages/Mine'
import PhotoList from './pages/PhotoList'
import DraweRight from './pages/DraweRight'
import DraweLeft from './pages/DraweLeft'
import Detail from './pages/Detail'
import Login from './pages/Login'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const HomeApp = createBottomTabNavigator({
  Home: {
    screen: MovieList,
    navigationOptions: {
      tabBarLabel: '列表',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-tv" size={20} color={tintColor} />
      ),
    }
  },
  PhotoList: {
    screen: PhotoList,
    navigationOptions: {
      tabBarLabel: '照片',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-eye" size={20} color={tintColor} />
      ),
    }
  },
  Mine: {
    screen: Mine,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-person" size={20} color={tintColor} />
      ),
    }
  }
}, {
    tabBarOptions: {
      activeTintColor: '#494949',
      inactiveTintColor: '#999999',
      labelStyle: {
        fontSize: 12,
        marginBottom: 5,
      },
      style: {
        borderTopWidth: 1,
        borderTopColor: '#c3c3c3',
        height: 50,
        backgroundColor: '#fff'
      },
    }
  })

const Drawer = createDrawerNavigator({
  DraweRight: {
    screen: DraweRight,
    navigationOptions: {
      drawerLabel: 'right',
      drawerIcon: ({ tintColor }) => (
        <Icon name="ios-eye" size={20} color={tintColor} />
      ),
    }
  },
  DraweLeft: {
    screen: DraweLeft,
    navigationOptions: {
      drawerLabel: 'left',
      drawerIcon: ({ tintColor }) => (
        <Icon name="ios-eye" size={20} color={tintColor} />
      ),
    }
  }
}, {
    drawerPosition: 'left',
    initialRouteName: 'DraweLeft',
    contentOptions: {
      inactiveTintColor: '#4d3a34',
      activeTintColor: '#ff7226',
    }
  })

const stackNav = createStackNavigator({
  HomeApp,
  Drawer,
  Detail
}, {
  headerMode: 'none',
  mode: 'modal',
  navigationOptions: {
    gesturesEnabled: false,
  },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      const width = layout.initWidth;
      // const height = layout.initHeight;
      // const translateY = position.interpolate({
      //   inputRange: [index - 1, index, index + 1],
      //   outputRange: [height, 0, 0],
      // });
      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [width, 0, 0],
      });

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1],
      });

      return { opacity, transform: [{ translateX }] };
    },
  }),
})

export default createSwitchNavigator({
  Login,
  stackNav
}, {
  initialRouteName: 'Login',
})
