import { API, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { listTweets } from '../../graphql/queries';
import Tweet from '../Tweet/Tweet';

const Feed = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTweets = async () => {
    setLoading(true);
    try {
      setTweets(
        (await API.graphql(graphqlOperation(listTweets))).data?.listTweets.items
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <FlatList
      data={tweets}
      renderItem={({ item }) => <Tweet tweet={item} />}
      keyExtractor={(item) => item.id}
      refreshing={loading}
      onRefresh={fetchTweets}
    />
  );
};

export default Feed;
