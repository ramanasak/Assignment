import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,    
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
    Picker
   
} from 'react-native';
import {   
    Colors,  
} from 'react-native/Libraries/NewAppScreen';
import moment from "moment";
import Icon from 'react-native-vector-icons/Feather';

import ContentComponent from "./../components/ContentComponent";
//import ContentComponent from "./ContentComponent";


export default class StockDisplayScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            a:true,
            user: '',                    
        };
    }//constructor
   updateList = (sortBy) => {

      this.setState({ sortBy: sortBy })
      console.log("sortBy===== ",sortBy);

     var sorted = this.state.dataSource.slice(0);

        if(sortBy=='High'){
            console.log("sortBy High===== ",sortBy);
            sorted.sort(function(a,b) {
                return b.high - a.high;
            });       
        }
        else if(sortBy=='Low'){
            console.log("sortBy Low===== ",sortBy);
            sorted.sort(function(a,b) {
                return a.high - b.high;
            });
        }
        else if(sortBy=='Open'){
            console.log("sortBy Low===== ",sortBy);
            // var byOpen = this.state.dataSource.slice(0);
            sorted.sort(function(a,b) {
                return a.high - b.high;
            });
        }
        else if(sortBy=='Close'){
            console.log("sortBy Low===== ",sortBy);
            sorted.sort(function(a,b) {
                return a.high - b.high;
            });          
        }
            this.setState({ 
                dataSource: sorted
            })  
        console.log('by date dataSource:');
        console.log(this.state.dataSource);
    }//uodate list 

    renderSeparator = () => {
        return (          
            <View
                style={{
                    borderBottomColor: "grey",
                    borderBottomWidth: 0.5,
                    marginBottom: 5,
                    marginTop: 5
                }}
            />
        )
    }
    renderItem = ({ item }) => {

        const { navigation } = this.props;
        const fromDate=navigation.getParam('fromDate', 'NO-DATE');
        const toDate=navigation.getParam('toDate', 'NO-DATE');
        const stock = {
            high: item.high,
            low: item.low,
            open: item.open,
            close: item.close,
            date:item.date
        }
       
         const fromDate2 = moment(fromDate,"DD/MM/YYYY");
         const toDate2 = moment(toDate,"DD/MM/YYYY");
         const momentC = moment(item.date).format("DD/MM/YYYY");
         const date2 = moment(momentC,"DD/MM/YYYY");

        
       if(date2 >= fromDate2 && date2 <= toDate2){       
         return (
             //onPress={() => ToastAndroid.show(item.date, ToastAndroid.SHORT) >  {date2} 
            <TouchableOpacity style={styles.list} >  
                <ContentComponent {...stock}  />
            </TouchableOpacity>
         )    
        }


    }

    componentWillMount() {

        for(var i=1;i<=5; i++) {
            let uri="https://jsonmock.hackerrank.com/api/stocks?page="+i;
                fetch(uri)
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        dataSource: responseJson.data,                     
                        isLoading: false,                      
                    }, function () { }
                    );                    
                }).catch((error) => {
                    console.log(error)
                })
        } 
        

    }//compo


  
    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                     <View style={[styles.container, styles.horizontal]}>
                        <ActivityIndicator size="large" color="green" />
                    </View>
                </View>
            )
        }
    

        return (
            <ScrollView style={{ color: "white", fontSize: 18, textAlign: 'center',backgroundColor: Colors.lighter }}>
                <StatusBar backgroundColor="#fff" barStyle="dark-content" />

                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: "green", fontSize: 20, textAlign: 'center', marginBottom: 15, marginTop: 10 }}>
                        <Icon name="bar-chart-2" size={20} />  Stock's Display</Text>
                </View>
                <View style={{ alignItems:'flex-end' , backgroundColor:'#bad5c3'  }}>
               
            <Picker style={{height: 50, width: 200}} selectedValue = {this.state.sortBy} onValueChange = {this.updateList}>
               <Picker.Item label = "Sort by Highest" value = "High" />
               <Picker.Item label = "Sort by Lowest" value = "Low" />
               <Picker.Item label = "Sort by Open" value = "Open" />
               <Picker.Item label = "Sort by Close" value = "Close" />
            </Picker>
                </View>

                <View>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={this.renderItem}
                        keyExtractor={({ id }, key) => id}
                        //ItemSeparatorComponent={this.renderSeparator}
                    />
                </View>                
            </ScrollView>
        );
    }

}//


const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '900',
        color: "#fff",
        textAlign: "center",
    },
    container: {
        backgroundColor: "#fff",
        marginTop: 15,
        //justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
        list: {
        backgroundColor: "white",
        width: 500,
        paddingVertical: 0,
        marginVertical: 0,
        borderRadius: 10
    }
  
});