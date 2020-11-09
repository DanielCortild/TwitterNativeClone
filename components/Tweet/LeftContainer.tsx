import React from 'react';
import { View } from 'react-native';
import { UserType } from '../../types';
import ProfilePicture from '../ProfilePicture';

export type LeftContainerProps = {
  user: UserType;
};

const LeftContainer = ({ user: { image } }: LeftContainerProps) => (
  <View>
    <ProfilePicture size={50} image={image} />
  </View>
);

export default LeftContainer;
