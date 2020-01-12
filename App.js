import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack';

import StockDisplayScreen from "./screens/StockDisplayScreen";
import DateSelectionScreen from "./screens/DateSelectionScreen";
export default class App extends React.Component {
  constructor(props) {
    super(props);
  } //constructor
  render() {
    return <AppContainer />;
  }
}
  class Welcome extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Date Picker </Text>
        <Button
          title="Date"
          onPress={() => this.props.navigation.navigate("StocksDisplay")}
        />
      </View>
    );
  }
}
class Display extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
const AppNavigator = createStackNavigator({
  Home: {
    screen: DateSelectionScreen,
  },
  Stocks: {
    screen: StockDisplayScreen,
  }
}
);

const AppContainer = createAppContainer(AppNavigator); //use main

