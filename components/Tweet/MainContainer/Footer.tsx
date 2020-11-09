import React from 'react';
import { Text, View } from 'react-native';
import { TweetType } from '../../../types';
import { AntDesign, EvilIcons, Feather } from '@expo/vector-icons';
import styles from './FooterStyles';

export type TweetProps = {
  tweet: TweetType;
};

const Footer = ({ tweet }: TweetProps) => (
  <View style={styles.footer}>
    <View style={styles.footer__iconContainer}>
      <Feather name="message-circle" size={20} color="gray" />
      <Text style={styles.footer__number}>{tweet.numberOfComments}</Text>
    </View>
    <View style={styles.footer__iconContainer}>
      <EvilIcons name="retweet" size={28} color="gray" />
      <Text style={styles.footer__number}>{tweet.numberOfRetweets}</Text>
    </View>
    <View style={styles.footer__iconContainer}>
      <AntDesign name="hearto" size={20} color="gray" />
      <Text style={styles.footer__number}>{tweet.numberOfLikes}</Text>
    </View>
    <View style={styles.footer__iconContainer}>
      <EvilIcons name="share-google" size={28} color="gray" />
    </View>
  </View>
);

export default Footer;
