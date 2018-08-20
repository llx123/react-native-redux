import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../store/actions/counter'

class MovieList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          myCount - {this.props.state.counter.count}
          MyToken - {this.props.state.user.userToken}
        </Text>
        <View style={styles.button}>
          <Button
            onPress={() => { this.props.increase() }}
            title="+"
            color="#841584"
          />
        </View>
        <View style={styles.button}>      
          <Button
            onPress={() => { this.props.decrease() }}
            title="-"
            color="#841584"
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  state
})

const mapDispatchToProps = dispatch => ({
  increase: () => dispatch(actions.increase()),
  decrease: () => dispatch(actions.decrease())
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: 100,
    margin: 10,
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
