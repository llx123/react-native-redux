import React, { Component } from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';

export default class MovieList extends Component {
  constructor(props) {
    super(props)
    this.state={}
  }
  render() {
    const {navigation} =this.props;
    return (
      <View>
        <Button
          title="go to DrawerNav"
          onPress={()=>navigation.navigate('Drawer')}
        />
        <Text>User:{this.state.userToken}</Text>
        <Button
          title="Go To Detail"
          onPress={()=>navigation.navigate('Detail')}
        />
        <Button
          title="getToken"
          onPress={this._bootstrapAsync}
        />
      </View>
    )
  }
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.setState({
      userToken
    })
  };
}

