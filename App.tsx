import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import Amplify, { API, Auth, graphqlOperation } from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);
import { withAuthenticator } from 'aws-amplify-react-native';
import { getUser } from './graphql/queries';
import { createUser } from './graphql/mutations';

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const getRandomImage = () =>
    'https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg';

  const saveUserToDB = async (user: any) => {
    console.log(user);
    await API.graphql(
      graphqlOperation(createUser, {
        input: user,
      })
    );
  };

  useEffect(() => {
    (async () => {
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      if (userInfo) {
        const userData = await API.graphql(
          graphqlOperation(getUser, { id: userInfo.attributes.sub })
        );
        if (!userData.data.getUser) {
          const user = {
            id: userInfo.attributes.sub,
            username: userInfo.username,
            name: userInfo.username,
            email: userInfo.attributes.email,
            image: getRandomImage(),
          };
          await saveUserToDB(user);
        } else console.log('User Exists');
      }
    })();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App);
