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
        this.state = { isLoading: true,a:true};
    }//constructor
    

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
        //moment(item.date).format("DD-MM-YYYY") > fromDate && 
        //(moment(item.date).format("DD-MM-YYYY") <= toDate ) && 
        //let date1 = moment(fromDate).format("DD-MM-YYYY");
        //let date1 = moment(item.date).format("DD/MM/YYYY");
        //let date2 = moment(item.date).format("DD/MM/YYYY") ;


        //var date1 =new Date(fromDate);
         //var date2 =new Date(toDate);
//moment("20111031", "YYYYMMDD").fromNow();
       // console.log("fromDate = ",fromDate);
        ////console.log("date2 = ",date2);
        //console.log("date2 = ",date2);


        console.log("sssss = ",moment(fromDate, "YYYYMMDD").fromNow());

        console.log("date\ f  = ",moment(fromDate).subtract(10, 'days').calendar());


        // var firstValue = fromDate.split('-');
        // var secondValue = toDate.split('-');
        
        //  var firstDate=new Date();
        //  firstDate.setFullYear(firstValue[0],(firstValue[1] - 1 ),firstValue[2]);
        
        //  var secondDate=new Date();
        //  secondDate.setFullYear(secondValue[0],(secondValue[1] - 1 ),secondValue[2]);     
        
        //  console.log("firstValue = ",firstValue);
        //  console.log("secondDate = ",secondDate);
        
         const fromDate2 = moment(fromDate,"DD/MM/YYYY");
         const toDate2 = moment(toDate,"DD/MM/YYYY");
         const momentC = moment(item.date).format("DD/MM/YYYY");
         const date2 = moment(momentC,"DD/MM/YYYY");
         console.log("fromDate2 = ",fromDate2);
         console.log("toDate2 = ",toDate2);
         //console.log("momentC = ",momentC);
         console.log("date2 = ",date2);



        //   if (firstDate > secondDate)
        //   {
        //    alert("First Date  is greater than Second Date");
        //   }
        //  else
        //   {
        //     alert("Second Date  is greater than First Date");
        //   }

        
       if(date2 >= fromDate2 && date2 <= toDate2){       
         return (
             //onPress={() => ToastAndroid.show(item.date, ToastAndroid.SHORT) >  {date2} 
            <TouchableOpacity style={styles.list} >  
                <ContentComponent {...stock}  />
            </TouchableOpacity>
         )    
        }



    //    if((moment(item.date).format("DD-MM-YYYY") >= fromDate)){       
    //      return (
    //          //onPress={() => ToastAndroid.show(item.date, ToastAndroid.SHORT) 
    //         <TouchableOpacity style={styles.list} >                 
    //             {/* <ContentComponent {...stock}  /> */}
    //         </TouchableOpacity>
    //      )    
    //     }
    //     else if((moment(item.date).format("DD-MM-YYYY") <= toDate)){       
    //         return (
    //             //onPress={() => ToastAndroid.show(item.date, ToastAndroid.SHORT)     
    //            <TouchableOpacity style={styles.list} >                 
    //                {/* <ContentComponent {...stock}  /> */}
    //            </TouchableOpacity>   
    //        )    
    //     }

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