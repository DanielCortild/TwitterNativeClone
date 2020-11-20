import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './NewTweetButtonStyles';
import { useNavigation } from '@react-navigation/native';

const NewTweetButton = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('NewTweet');
  };

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={onPress}
      >
        <MaterialCommunityIcons name="feather" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default NewTweetButton;
