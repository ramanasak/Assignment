import React, { Fragment } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
    ToastAndroid,
    Image,
    Dimensions
} from 'react-native';
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Feather';

export default class NoticesDisplayScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: true,a:true};
       
    }//constructor

    //https://facebook.github.io/react-native/movies.json
    //https://jsonplaceholder.typicode.com/posts
    // static navigationOptions = {
    //     title: 'Notices',

    // };
    renderSeparator = () => {
        return (
            // <View style={{ height: 1, width: '100%', backgroundColor: 'grey' }}>
            // </View>
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

        if(item.close <= item.open){
           
            console.log("color= item.close < ====================",typeof(item.close)) ;
        }
        return (
            <TouchableOpacity style={styles.list} onPress={() => ToastAndroid.show(item.PdfNoticeHeading, ToastAndroid.SHORT)}>
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center' }}>
                    <View style={{
                        flex: 2, justifyContent: 'center', marginLeft: 15, backgroundColor: 'white',
                        borderColor: 'black', borderWidth: 1, borderRadius: 10, borderColor: 'white'
                    }}>
                        <Text
                            style={{
                                fontSize: 18, color: 'black', marginBottom: 1, marginTop: 1,
                                justifyContent: 'center', marginLeft: 20
                            }}
                        >
                            {item.date}
                        </Text>
                        <Text style={{ fontSize: 14, color: 'green', marginBottom: 5, marginLeft: 20 }}>
                           High: {item.high} , Low: {item.low} , Open :{item.open} , close: {item.close} 
                        </Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
                        <Text style={{ fontSize: 18, color: '#3f51b5', marginBottom: 1, marginTop: 1, justifyContent: 'center' }}>
                            <Icon name={item.close > item.open ? 'arrow-up-right' : 'arrow-down-right'} size={20} color={item.close > item.open ? '#1DA664' : '#DE5347'}
                                onPress={() => this.props.navigation.navigate('NoticesDisplayPdfScreen', {
                                    pdfUrl: item.pdfUrl
                                })} />
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>

        )
    }
    //digitalcampus.in/ParentzApp/notices.jsp?
    //studentId=13207&password=Digital@123&schoolCode=VERSION-DEMO&classNo=31&section=A
    //fetch("https://jsonmock.hackerrank.com/api/stocks?page="+i)
    componentDidMount() {

        for(var i=1;i<=5; i++) {
            console.log("i start", i);
            let uri="https://jsonmock.hackerrank.com/api/stocks?page="+i;
            console.log("uri====", uri);
                fetch(uri)
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log("i ", i);
                    console.log(responseJson.data);
                    console.log(responseJson.length);
                    this.setState({
                        dataSource: responseJson.data,
                        isLoading: false
                    }, function () { }
                    );
                }).catch((error) => {
                    console.log(error)
                })

                console.log("dataSource=",this.state.dataSource)   
        }

        console.log("dataSource=",this.state.dataSource)

    }//compo



   
    // render() {
    //   // if (this.state.isLoading == true) {
    //   //   return (
    //   //     <View Style={StyleSheet.container}>
    //   //       <ActivityIndicator size="Large" animating />
    //   //     </View>
    //   //   )
    //   // } else {
    //   return (
    //     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} >
    //       <Text>Notice Screen</Text>
    //       {/* <Button title="Go to Details"
    //                 onPress={() => this.props.navigation.navigate('Details')} /> 
    //                  //data={this.state.dataSource}
    //                  */}

    //       {/* <FlatList
    //           data={[{ key: 'a' }, { key: 'b' }]}
    //           renderItem={({ item }) => <Text>{item.key}</Text>}
    //         /> */}
    //       <FlatList
    //         data={this.state.dataSource}
    //         renderItem={this.state.renderItem}
    //       />
    //     </View>
    //   );
    //   //}else
    // }

    render() {

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    {/* <ActivityIndicator /> */}
                    <View style={[styles.container, styles.horizontal]}>
                        <ActivityIndicator size="large" color="green" />
                    </View>
                </View>
            )
        }
        //style={{ backgroundColor: 'white' }}
        return (
            <ScrollView style={{ color: "white", fontSize: 18, textAlign: 'center' }}>
                <StatusBar backgroundColor="#fff" barStyle="dark-content" />


                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: "#303f9f", fontSize: 20, textAlign: 'center', marginBottom: 15, marginTop: 10 }}>
                        <Icon name="bar-chart-2" size={20} />  Stocks</Text>
                </View>
                <View>
                    <FlatList
                        //ItemSeparatorComponent={this.renderSeparator}
                        data={this.state.dataSource}
                        renderItem={this.renderItem}
                        keyExtractor={({ id }, key) => id}
                        ItemSeparatorComponent={this.renderSeparator}
                    />
                </View>
                {/* <View style={{ backgroundColor: 'blue', flexDirection: 'row', flex: 1 }}>
            <View style={{ backgroundColor: 'red', flexDirection: 'row', flex: 1 }}>
              <View style={{ backgroundColor: 'orange', flexDirection: 'column', flex: 1 }}>
                <Text style={{ color: "#303f9f", fontSize: 20, textAlign: 'center', marginBottom: 15, marginTop: 10 }}>
                  <Icon name="file-text" size={20} />  test</Text>
                <Text style={{ color: "#303f9f", fontSize: 20, textAlign: 'center', marginBottom: 15, marginTop: 10 }}>
                  <Icon name="file-text" size={20} />  test</Text>
              </View>
            </View>
            <View style={{ backgroundColor: 'yellow', flexDirection: 'row', flex: 1 }}>
              <Text style={{ color: "#303f9f", fontSize: 20, textAlign: 'center', marginBottom: 15, marginTop: 10 }}>
                <Icon name="file-text" size={20} />  test</Text>
            </View>
          </View> */}

            </ScrollView>
        );
    }

}//notice


const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
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
    menuButtons: {
        backgroundColor: "#3f51b5",
        width: 300,
        paddingVertical: 8,
        marginVertical: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#2b388f"
    },
    list: {
        backgroundColor: "white",
        width: 500,
        paddingVertical: 0,
        marginVertical: 0,
        borderRadius: 10
    },
    imageView: {
        width: 70,
        height: 70,
        borderRadius: 50
    },
    imageView2: {
        width: 75,
        height: 75,
        borderRadius: 37.5,
        marginLeft: 15
    },
    pdfcontainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
    }
});