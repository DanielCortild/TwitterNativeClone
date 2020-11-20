import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import * as React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfilePicture from '../components/ProfilePicture';
import { View } from '../components/Themed';
import Colors from '../constants/Colors';
import { createTweet } from '../graphql/mutations';

export default function NewTweetScreen() {
  const navigation = useNavigation();
  const [content, setContent] = React.useState('');
  const [imageURL, setImageURL] = React.useState('');

  const onPress = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      await API.graphql(
        graphqlOperation(createTweet, {
          input: {
            title: content,
            image: imageURL,
            userID: currentUser.attributes.sub,
          },
        })
      );
    } catch (error) {
      console.log(error);
    }
    returnHome();
  };

  const returnHome = (): void => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={returnHome} activeOpacity={0.5}>
          <AntDesign name="close" size={30} color={Colors.light.tint} />
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={onPress}
          >
            <Text style={styles.buttonText}>Tweet</Text>
          </TouchableOpacity>
        </View>
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
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'flex-start',
    padding: 10,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontWeight: 'bold',
  },
  newTweetContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  inputContainer: {
    marginLeft: 20,
    paddingRight: 50,
  },
  tweetInput: {
    height: 100,
    fontSize: 18,
  },
  imageInput: {
    fontSize: 18,
  },
});
