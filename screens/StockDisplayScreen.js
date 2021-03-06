import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    FlatList,
    ActivityIndicator,
    Picker,
    Alert
} from 'react-native';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import moment from "moment";
import Icon from 'react-native-vector-icons/Feather';

import ContentComponent from "./../components/ContentComponent";



export default class StockDisplayScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            isModalVisible: false
        };

    }//constructor

     updateList = async(sortBy) => {

        this.setState({ sortBy: sortBy })
        var sorted = this.state.dataSource.slice(0);

        if (sortBy == 'High') {
            await sorted.sort(function (a, b) {
                return b.high - a.high;
            });
        }
        else if (sortBy == 'Low') {
            await sorted.sort(function (a, b) {
                return a.low - b.low;
            });
        }
        else if (sortBy == 'Open') {
            await sorted.sort(function (a, b) {
                return b.open - a.open;
            });
        }
        else if (sortBy == 'Close') {
            await sorted.sort(function (a, b) {
                return b.close - a.close;
            });
        }

        this.setState({
            dataSource: sorted
        })

    }//update list 

    renderSeparator = () => {
        return (
            <View
                style={{
                    //borderBottomColor: "grey",
                    //borderBottomWidth: 0.5,
                    marginBottom: 5,
                    marginTop: 5
                }}
            />
        )
    }
    renderItem = ({ item }) => {


        let stock = {
            high: item.high,
            low: item.low,
            open: item.open,
            close: item.close,
            date: item.date,
            comment: "",
        }


        return ( < ContentComponent {...stock} /> )
        
    }




    async componentWillMount() {

        let Data = [];
        const { navigation } = this.props;
        const fromDate = navigation.getParam('fromDate', 'NO-DATE');
        const toDate = navigation.getParam('toDate', 'NO-DATE');


        for (let i = 1; i <= 5; i++) {

            const uri = "https://jsonmock.hackerrank.com/api/stocks?page=" + i;
            const fromDate2 = moment(fromDate, "DD/MM/YYYY");
            const toDate2 = moment(toDate, "DD/MM/YYYY");

            await fetch(uri)
                .then((response) => response.json())
                .then((responseJson) => {
                    for (var k = 0; k < responseJson.data.length; k++) {

                        const momentC = moment(responseJson.data[k].date).format("DD/MM/YYYY");
                        const date2 = moment(momentC, "DD/MM/YYYY");

                        if (date2 >= fromDate2 && date2 <= toDate2) {
                            Data.push(responseJson.data[k]);
                        }
                    }
                    this.setState({
                        dataSource: Data,
                        isLoading: false,
                    });
                }).catch((error) => {
                    console.log(error)
                })
        }

        if (Data.length == 0) {

            Alert.alert("No Data Available on These Dates");
            this.props.navigation.goBack(null);

        }

    }//



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
            // backgroundColor: Colors.lighter 
            <ScrollView style={{ color: "white", fontSize: 18, textAlign: 'center', backgroundColor: '#3399ff' }}>

                <StatusBar backgroundColor="#fff" barStyle="dark-content" />

                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: "white", fontSize: 20, textAlign: 'center', marginBottom: 15, marginTop: 10 }}>
                        <Icon name="bar-chart-2" size={20} />  Stock's Display</Text>
                </View>

                <View style={{ alignItems: 'flex-end', backgroundColor: '#3399ff' }}>

                    <Picker style={{ height: 50, width: 200, color: 'white' }} 
                    selectedValue={this.state.sortBy} onValueChange={this.updateList}>
                        <Picker.Item label="Sort by Highest" value="High" />
                        <Picker.Item label="Sort by Lowest" value="Low" />
                        <Picker.Item label="Sort by Open" value="Open" />
                        <Picker.Item label="Sort by Close" value="Close" />
                    </Picker>

                </View>

                <View style={{ backgroundColor: 'white', flex: 7, flexDirection: 'row' }}>

                    <View style={styles.dateColumn}>
                        {/* // color: "#3399ff" ,borderwidth:1,borderColor:'grey'*/}
                        <Text style={{
                            color: "white", fontSize: 16, textAlign: 'center',
                            marginBottom: 5, marginTop: 5
                        }}>
                            Date</Text>
                    </View>

                    <View style={styles.dataColumn}>
                        <Text style={{
                            color: "white", fontSize: 16, textAlign: 'center',
                            marginBottom: 5, marginTop: 5
                        }}>
                            Open</Text>
                    </View>

                    <View style={styles.dataColumn}>
                        <Text style={{
                            color: "white", fontSize: 16, textAlign: 'center',
                            marginBottom: 5, marginTop: 5
                        }}>
                            Close</Text>
                    </View>

                    <View style={styles.dataColumn}>
                        <Text style={{
                            color: "white", fontSize: 16, textAlign: 'center',
                            marginBottom: 5, marginTop: 5
                        }}>
                            High</Text>
                    </View>

                    <View style={styles.dataColumn}>
                        <Text style={{
                            color: "white", fontSize: 16, textAlign: 'center',
                            marginBottom: 5, marginTop: 5
                        }}>
                            Low</Text>
                    </View>

                    <View style={styles.dataColumn}>
                        <Text style={{
                            color: "white", fontSize: 16, textAlign: 'center',
                            marginBottom: 5, marginTop: 5
                        }}>
                            <Icon name="activity" size={18} /> </Text>
                    </View>

                </View>
                <View>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={this.renderItem}
                        //keyExtractor={({ id }, key) => id}
                        keyExtractor={(item, index) => index.toString()}
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
    },
    dateColumn: {
        backgroundColor: '#3399ff',
        flex: 2,
        borderRightColor: 'white',
        borderRightWidth: 0.5,
        //borderLeftColor:'grey',
        //borderLeftWidth:0.5
    },
    dataColumn: {
        backgroundColor: '#3399ff',
        flex: 1,
        borderRightColor: 'white',
        borderRightWidth: 0.5,
        //borderLeftColor:'grey',
        //borderLeftWidth:0.5
    },
    inputBox: {
        //width: 300,
        backgroundColor: "white",
        borderRadius: 5,
        paddingHorizontal: 16,
        fontSize: 16,
        color: "black",
        marginVertical: 3,
        borderColor: "grey",
        borderWidth: 0.5
    }

});