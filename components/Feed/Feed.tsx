import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import tweets from '../../data/tweets';
import Tweet from '../Tweet/Tweet';

const Feed = () => (
  <FlatList
    data={tweets}
    renderItem={({ item }) => <Tweet tweet={item} />}
    keyExtractor={(item) => item.id}
  />
);

export default Feed;
