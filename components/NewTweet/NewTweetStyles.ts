import { StyleSheet } from 'react-native';

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
  },
  tweetInput: {
    height: 100,
    fontSize: 18,
  },
  imageInput: {
    fontSize: 18,
  },
});

export default styles;
