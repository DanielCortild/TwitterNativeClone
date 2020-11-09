import React from 'react';
import { View } from 'react-native';
import LeftContainer from './LeftContainer';
import MainContainer from './MainContainer';

import { TweetType } from '../../types';
import styles from './TweetStyles';

export type TweetProps = {
  tweet: TweetType;
};

const Tweet = ({ tweet }: TweetProps) => (
  <View style={styles.tweet}>
    <LeftContainer user={tweet.user} />
    <MainContainer tweet={tweet} />
  </View>
);

export default Tweet;
