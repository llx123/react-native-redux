import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');

export default class DraweLeft extends Component {
  static navigationOptions = {
    title: 'Detail',
    headerTitleStyle: {
      flex: 1,
      textAlign: 'center'
    },
    headerRight: <Text />
  };
  constructor(props) {
    super(props)
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>
          LLLLLLLLLLLLL
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    flex: 1,
    backgroundColor: 'red'
  }
})
