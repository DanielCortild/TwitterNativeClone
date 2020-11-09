import React from 'react';
import { Image, Text, View } from 'react-native';
import { TweetType } from '../../../types';
import styles from './ContentStyles';

export type TweetProps = {
  tweet: TweetType;
};

const Content = ({ tweet }: TweetProps) => (
  <View>
    <Text style={styles.content__text}>{tweet.content}</Text>
    {tweet.image && (
      <Image style={styles.content__image} source={{ uri: tweet.image }} />
    )}
  </View>
);

export default Content;
