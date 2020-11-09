import * as React from 'react';
import { StyleSheet } from 'react-native';
import Feed from '../components/Feed/Feed';
import NewTweetButton from '../components/NewTweetButton/NewTweetButton';
import { View } from '../components/Themed';

export default function HomeScreen() {
  return (
    <View>
      <Feed />
      <NewTweetButton />
    </View>
  );
}
