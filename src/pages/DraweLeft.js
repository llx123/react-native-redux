import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class DraweLeft extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {navigation} =this.props;
    return (
      <View>
        <Text>
          LLLLLLLLLLLLL
        </Text>
        <Button
          title="Toggle Drawer"
          onPress={()=>navigation.toggleDrawer()}//打开或关闭抽屉
        />
      </View>
    )
  }
}

