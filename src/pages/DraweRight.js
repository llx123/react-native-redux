import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class DraweLeft extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.navigation.navigate('Home')
  }
  render() {
    const {navigation} =this.props;
    return (
      <View>
        <Text>
          RRRRRRRRRRR
        </Text>
        <Button
          title="Toggle Drawer"
          onPress={()=>navigation.toggleDrawer()}//打开或关闭抽屉
        />
      </View>
    )
  }
}

