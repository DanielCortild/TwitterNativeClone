import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import ProfilePicture from '../components/ProfilePicture';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, HomeParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        showLabel: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-home" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-search" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-notifications-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-mail" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <Ionicons name="logo-twitter" size={30} color={Colors.light.tint} />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name="star-four-points-outline"
              size={30}
              color={Colors.light.tint}
            />
          ),
          headerRightContainerStyle: { marginRight: 16 },
          headerLeft: () => (
            <ProfilePicture
              size={36}
              image="data:image/jpeg;base64,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"
            />
          ),
          headerLeftContainerStyle: { marginLeft: 16 },
        }}
      />
    </HomeStack.Navigator>
  );
};

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
