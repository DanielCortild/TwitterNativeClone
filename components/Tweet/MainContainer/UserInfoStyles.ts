import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  userInfo: {
    flexDirection: 'row',
  },
  userInfo__name: {
    fontWeight: 'bold',
  },
  userInfo__username: {
    marginLeft: 2,
    color: 'gray',
  },
  userInfo__createdAt: {
    marginLeft: 'auto',
    color: 'gray',
  },
});

export default styles;
