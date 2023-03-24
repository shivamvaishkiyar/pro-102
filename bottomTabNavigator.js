
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/Home.js"
import SearchScreen from "../screens/Search.js";
import CategoryScreen from "../Screen/category.js";
import CartScreen from "../Screen/cart.js";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
    render() {
      return (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
  
                if (route.name === "Home") {
                  iconName = "home";
                } else if (route.name === "Search") {
                  iconName = "search";
                } else if (route.name === "Category"){
                iconName ="apps-outline";
                }else if(route.name === "Cart"){
                    iconName = "cart-outline"
                }
  
                // You can return any component that you like here!
                return (
                  <Ionicons
                    name={iconName}
                    size={size}
                    color={color}
                  />
                );
              }
            })}
            tabBarOptions={{
              activeTintColor: "#FFFFFF",
              inactiveTintColor: "black",
              style: {
                height: 130,
                borderTopWidth: 0,
                backgroundColor: "#5653d4"
              },
              labelStyle: {
                fontSize: 20,
              },
              labelPosition: "beside-icon",
             
            }}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen}/>
            <Tab.Screen name="Reel" component={ReelScreen}/>

          </Tab.Navigator>
        </NavigationContainer>
      );
    }
  }
  