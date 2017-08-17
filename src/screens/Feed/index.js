import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { getUserFeed } from '../../store/feed/actions';

class Feed extends React.Component {
  static navigationOptions = {
    title: 'Feed',
  };

  componentDidMount() {
    this.props.getUserFeed();
  }

  render() {
    return <View />;
  }
}

export default connect(() => ({}), { getUserFeed })(Feed);
