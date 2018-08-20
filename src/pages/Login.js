import React, { Component } from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';
import { connect } from 'react-redux'
import { setToken } from '../store/actions/userToken'

class Login extends Component {
  static navigationOptions = {
    title: 'Please sign in',
  };
  constructor(props) {
    super(props)
    this._getNav()
  }
  _getNav = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    if(userToken==='LLX123') {
      this.props.setUserToken('LLX123')
      this.props.navigation.navigate('stackNav');
    }
  }
  render() {
    return (
      <View>
        <Text>
          Login
        </Text>
        <Button title='Login' onPress={this._signInAsync} />
      </View>
    )
  }
  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'LLX123');
    this.props.navigation.navigate('stackNav');
    this.props.setUserToken('LLX123')
  };
}

const mapStateToProps = state => ({
  state
})

const mapDispatchToProps = dispatch => ({
  setUserToken: (payload) => dispatch(setToken(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
