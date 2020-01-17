
import React, { Component } from 'react';

import { View, StyleSheet, Alert, Button, Text } from 'react-native';

import DatePicker from 'react-native-datepicker';
import { TouchableHighlight } from 'react-native-gesture-handler';


export default class MyDatePicker extends Component {
  static navigationOptions = {
    headerShown: false
  }
  constructor(props) {
    super(props)
    this.state = {
      // fromDate: "01-01-2000",
      // toDate: "17-01-2020",
      fromDate: "",
      toDate: "",
      //isModalVisible: false
    }
  }
  // toggleModal = () => {
  //   console.log("toggle");
  //   this.setState({ isModalVisible: !this.state.isModalVisible });
  //   console.log("toggle", this.state.isModalVisible);
  // };

  render() {

    return (
      <View style={styles.container}>
        <Text style={{ marginTop: 10, color: 'green' }}>From Date</Text>
        <DatePicker
          style={{ width: 250, marginTop: 10 }}
          //date={this.state.fromDate} //initial date from state
          mode="date"
          format="DD-MM-YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            },
            placeholderText: {
              fontSize: 18,
              color: 'black'
            }

          }}
          onDateChange={(date) => { this.setState({ fromDate: date }) }}
        />
        <Text style={{ marginTop: 10, color: 'green' }}>To Date</Text>
        <DatePicker
          style={{ width: 250, marginTop: 10, borderColor: 'black' }}
          //date={this.state.toDate} //,borderWidth:1,borderColor:'white'
          placeholder="Select your birthday"
          mode="date" //
          format="DD-MM-YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36,
              color: 'white'
            },
            placeholderText: {
              fontSize: 18,
              color: 'white',
              textColor: 'white'
            }
          }}

          onDateChange={(date) => { this.setState({ toDate: date }) }}
        />

        <TouchableHighlight
          style={{
            backgroundColor: '#019031',
            width: 200,
            paddingVertical: 8,
            marginVertical: 10,
            borderRadius: 20,
            borderColor: "white",
            borderWidth: 1,
            marginTop: 25,
          }}
        >
          <View>
            <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate("Stocks", {
              fromDate: this.state.fromDate,
              toDate: this.state.toDate,
            })}>
              Submit
            </Text>
          </View>
        </TouchableHighlight>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //marginTop: 50,
    padding: 16,
    backgroundColor: "white",
    //backgroundColor:'#3399ff',
    //backgroundColor:'#47a3ff',
  }, buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
    textAlign: "center"
  }
})