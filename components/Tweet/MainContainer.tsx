import { AntDesign, Entypo, EvilIcons, Feather } from '@expo/vector-icons';
import moment from 'moment';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { TweetType } from '../../types';
import { fromNowTwitter } from '../../utils';
import Content from './MainContainer/Content';
import UserInfo from './MainContainer/UserInfo';
import styles from './MainContainerStyles';
import Footer from './MainContainer/Footer';

export type MainContainerProps = {
  tweet: TweetType;
};

const MainContainer = ({ tweet }: MainContainerProps) => (
  <View style={styles.mainContainer}>
    <UserInfo tweet={tweet} />
    <Content tweet={tweet} />
    <Footer tweet={tweet} />
  </View>
);

export default MainContainer;
