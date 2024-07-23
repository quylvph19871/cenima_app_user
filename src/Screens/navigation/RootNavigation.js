
import AuthNavigation from './AuthNavigation'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <AuthNavigation/>
    </NavigationContainer>
  )
}

export default RootNavigation