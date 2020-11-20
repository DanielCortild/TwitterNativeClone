import React from 'react';
import { Image, Text, View } from 'react-native';
import { TweetType } from '../../../types';
import styles from './ContentStyles';

export type TweetProps = {
  tweet: TweetType;
};

const Content = ({ tweet }: TweetProps) => (
  <View>
    <Text style={styles.content__text}>{tweet?.title}</Text>
    <Image
      style={{
        ...styles.content__image,
        display: tweet.image?.length ? 'block' : 'none',
      }}
      source={{ uri: tweet.image }}
    />
  </View>
);

export default Content;
