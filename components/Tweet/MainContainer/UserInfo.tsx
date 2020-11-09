import React from 'react';
import { Text, View } from 'react-native';
import { TweetType } from '../../../types';
import { fromNowTwitter } from '../../../utils';
import styles from './UserInfoStyles';

export type TweetProps = {
  tweet: TweetType;
};

const UserInfo = ({ tweet }: TweetProps) => (
  <View style={styles.userInfo}>
    <Text style={styles.userInfo__name}>{tweet.user.name}</Text>
    <Text style={styles.userInfo__username}>@{tweet.user.username}</Text>
    <Text style={styles.userInfo__createdAt}>
      {fromNowTwitter(tweet.createdAt)}
    </Text>
  </View>
);

export default UserInfo;
