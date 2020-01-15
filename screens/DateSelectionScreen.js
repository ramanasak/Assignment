//This is an example code to get DatePicker// 
import React, { Component } from 'react';
//import react in our code. 
import {View, StyleSheet,Alert,Button,Text} from 'react-native';
//import all the components we are going to use.
import DatePicker from 'react-native-datepicker';
import { TouchableHighlight } from 'react-native-gesture-handler';
//import DatePicker from the package we installed
 
export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    //set value in state for initial date
    this.state = {
        fromDate:"01-01-2000",
        toDate:"01-01-2021",
        
  }
}


  render(){

    return (
      <View style={styles.container}>
        <Text style={{marginTop:10,color:'black'}}>From Date</Text>
        <DatePicker
          style={{width: 250 ,marginTop:10}}
          //fromDate={this.state.fromDate}
          date={this.state.fromDate} //initial date from state
          mode="date" //The enum of date, datetime and time
          //placeholder="Select From Date"
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
          onDateChange={(date) => {this.setState({fromDate: date})}}
        />
        <Text style={{marginTop:10,color:'black'}}>To Date</Text>
        <DatePicker
          style={{width: 250,marginTop:10,borderWidth:1,borderColor:'white'}}
          date={this.state.toDate} //initial date from state
          mode="date" //The enum of date, datetime and time
          //placeholder="Select To Date"
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
          //onDateChange={this.formatter}
          onDateChange={(date) => {this.setState({toDate: date})}}       
        />
        {/* <TouchableHighlight style={{backgroundColor: "#45CE30",marginTop:10,
        height:40,width:150 ,alignItems:'center',justifyContent:'center',
        borderColor:'white',borderWidth:1,}}>
        <Text>Submit 1</Text>
        </TouchableHighlight> */}
     {/* <Button 
          title="Submit"
          onPress={() => this.props.navigation.navigate("Display",{
              fromDate: this.state.fromDate,
              toDate: this.state.toDate,
            })}
        /> */}
        <TouchableHighlight
            style={{
              backgroundColor: '#019031',
              width: 200,
              paddingVertical: 8,
              marginVertical: 10,
              borderRadius: 20,
              borderColor: "#45CE30",
              borderWidth: 2,
              marginTop:25,
            }}
          >
            <View>
              <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate("Stocks",{
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

const styles = StyleSheet.create ({
 container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    //marginTop: 50,
    padding:16,
    backgroundColor:"white",
 },buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
    textAlign: "center"
  }
})