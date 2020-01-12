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
import moment from "moment";
import Icon from 'react-native-vector-icons/Feather';


export default class ContentComponent extends React.Component {

    render() {

        // const { navigation } = this.props;
        // const fromDate=navigation.getParam('fromDate', 'NO-DATE');
        // const toDate=navigation.getParam('toDate', 'NO-DATE');
        // const open=navigation.getParam('toDate', 'NO-DATE');
        // const high=navigation.getParam('toDate', 'NO-DATE');
        // const low=navigation.getParam('toDate', 'NO-DATE');
        // const close=navigation.getParam('toDate', 'NO-DATE');

        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
             
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
                            {this.props.date}
                        </Text>
                        <Text style={{ fontSize: 14, color: 'green', marginBottom: 5, marginLeft: 20 }}>
                             High: {this.props.high} , Low: {this.props.low}  
                        </Text>
                        <Text style={{ fontSize: 14, color: 'green', marginBottom: 5, marginLeft: 20 }}>
                             Open: {this.props.open} , Close: {this.props.close} 
                        </Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
                        <Text style={{ fontSize: 18, color: '#3f51b5', marginBottom: 1, marginTop: 1, justifyContent: 'center' }}>
                            <Icon name={this.props.close > this.props.open ? 'arrow-up-right' : 'arrow-down-right'} size={20} color={this.props.close > this.props.open  ? '#1DA664' : '#DE5347'}
                                 />
                                 {/* onPress={() => this.props.navigation.navigate('NoticesDisplayPdfScreen', {
                                    pdfUrl: item.pdfUrl
                                })} */}
                        </Text>
                    </View>
                </View>        
          </View>
        );
      }

}


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