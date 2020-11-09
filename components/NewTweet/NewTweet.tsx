import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfilePicture from '../ProfilePicture';
import { View } from '..//Themed';
import Colors from '../../constants/Colors';
import styles from './NewTweetStyles';

const NewTweet = () => {
  const navigation = useNavigation();
  const [content, setContent] = useState('');
  const [imageURL, setImageURL] = useState('');

  const onPress = () => {
    console.warn('Posted Tweet');
    returnHome();
  };

  const returnHome = (): void => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <AntDesign
          name="close"
          size={30}
          color={Colors.light.tint}
          onPress={returnHome}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={onPress}
        >
          <Text style={styles.buttonText}>Tweet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newTweetContainer}>
        <ProfilePicture
          size={60}
          image="https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg"
        />
        <View style={styles.inputContainer}>
          <TextInput
            multiline={true}
            numberOfLines={3}
            style={styles.tweetInput}
            placeholder="What's happening?"
            value={content}
            onChangeText={(text) => setContent(text)}
          />
          <TextInput
            style={styles.imageInput}
            placeholder="Image URL (Optional)"
            value={imageURL}
            onChangeText={(text) => setImageURL(text)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewTweet;
