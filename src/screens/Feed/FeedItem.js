import React, { PureComponent } from 'react';
import { View, Text, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const DEFAULT_AVATAR = require('../../assets/img/default_avatar.png');

const OTHERS = [DEFAULT_AVATAR, DEFAULT_AVATAR, DEFAULT_AVATAR];

class FeedItem extends PureComponent {
  render() {
    return (
      <View style={styles.feedItemContainer}>

        <View style={styles.metaContainer}>
          <View style={styles.row}>
            <Image
              source={require('../../assets/img/default_avatar.png')}
              style={styles.feedAuthorAvatar}
            />
            <View style={styles.dataContainer}>
              <Text style={styles.authorNameText}>Bilal Budhani</Text>
              <Text style={styles.datedText}>Today at 11:51 pm</Text>
            </View>
          </View>
          <FontAwesome name="ellipsis-h" style={styles.moreActionIcon} />
        </View>

        <View style={styles.feedContentContainer}>
          <Text numberOfLines={6} ellipsizeMode="tail" style={styles.feedContentText}>
            At the behest of
            {' '}
            <Text style={styles.highlightedText}>@Doaks</Text>
            {' '}
            and several others on Kitsu, I’m going to be listing off someone of my favorite/most influential anime in no particular order. First, some background: I have been watching anime for nearly all my life. I remember watching the original Pokémon as it aired and staying at my maternal grandmother’s house to watch Digimon and Beyblade. Toonami introduced me to Naruto, Zatch Bell, and One Piece. However, I got into anime knowing what it was and how it was….
          </Text>
          <View style={styles.otherAvatarContainer}>
            {OTHERS.map(o => <Image source={o} style={styles.othersAvatar} />)}
            <Text style={styles.othersText}>Nuck and 47 others</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default FeedItem;
