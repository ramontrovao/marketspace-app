import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {HomeScreen} from './screens/HomeScreen';
import {ProductListingScreen} from './screens/ProductListingScreen';
import {LogoutScreen} from './screens/LogoutScreen';
import {
  HouseIcon,
  LogoutButton,
  ProductListingIcon,
} from './components/TabNavigatorIcons';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: HouseIcon,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="ProductListing"
        component={ProductListingScreen}
        options={{
          tabBarIcon: ProductListingIcon,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Logout"
        component={LogoutScreen}
        options={{
          tabBarButton: LogoutButton,
        }}
      />
    </Tab.Navigator>
  );
}
