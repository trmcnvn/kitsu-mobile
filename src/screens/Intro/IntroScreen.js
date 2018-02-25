import React, { Component } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { slide1, slide2, slide3, slide4 } from 'kitsu/assets/img/intro/';
import { Button } from 'kitsu/components/Button';
import { IntroHeader } from './common/';
import styles from './styles';
import Step from './Step';

const CAROUSEL_ITEMS = [
  {
    title: 'More of what you love',
    desc: 'Get recommendations to discover your next favorite anime or manga!',
    image: slide1,
  },
  {
    title: 'Track your progress',
    desc: 'Log and rate what you’ve seen and read to build a library of your history.',
    image: slide2,
  },
  {
    title: 'Join the Community',
    desc: 'Kitsu makes finding new like-minded friends easy with the global activity feed.',
    image: slide3,
  },
  {
    title: 'Share your Reactions',
    desc: 'Check the media ratings and reviews from other users and leave your own!',
    image: slide4,
  },
  // dummy view for smooth transition.
  {
    title: '',
    desc: '',
    image: null,
  }
];
const CAROUSEL_WIDTH = Dimensions.get('window').width;

export default class OnboardingScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    currentIndex: 0
  };
  isNavigating = false;

  onScroll = (event) => {
    const { contentOffset } = event.nativeEvent;
    const position = contentOffset.x / CAROUSEL_WIDTH;
    if (!this.isNavigating && position > (CAROUSEL_ITEMS.length - 2 + 0.05)) {
      this.props.navigation.navigate('Registration');
      this.isNavigating = true; // prevent triggering twice.
    }
  }

  renderItem = ({ item }) => (
    <Step {...item} />
  )

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <IntroHeader style={styles.header} />
        <View style={styles.bodyWrapper}>
          <View style={styles.page}>
            <Carousel
              data={CAROUSEL_ITEMS}
              renderItem={this.renderItem}
              itemWidth={CAROUSEL_WIDTH}
              sliderWidth={CAROUSEL_WIDTH}
              onSnapToItem={index => this.setState({ currentIndex: index })}
              onScroll={this.onScroll}
            />
          </View>
          <View style={styles.buttonsWrapper}>
            <Pagination
              dotsLength={CAROUSEL_ITEMS.length}
              activeDotIndex={this.state.currentIndex}
              containerStyle={styles.dotContainer}
              dotContainerStyle={{ marginHorizontal: 3 }}
              dotStyle={styles.stepDotActive}
              inactiveDotStyle={styles.stepDot}
              inactiveDotScale={0.8}
            />
            <Button
              style={styles.getStartedButton}
              title={'Get Started'}
              titleStyle={styles.getStartedText}
              onPress={() => navigate('Registration')}
            />
          </View>
        </View>
      </View>
    );
  }
}
