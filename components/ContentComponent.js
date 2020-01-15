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
       
        return (
       
        <View style={{ color: "white",flex:1, textAlign: 'center',backgroundColor: Colors.lighter }}>
            <View style={{ backgroundColor:'white' ,flex:7 , flexDirection:'row'}}>
            <View style={styles.dateColumn}>
                <Text style={{ color: "#3399ff", fontSize: 10, textAlign: 'center',
                marginBottom: 5, marginTop: 5 }}>
                {this.props.date}</Text>
            </View>
            <View style={styles.dataColumn}>
                <Text style={{ color: "#3399ff", fontSize: 10, textAlign: 'center',
                marginBottom: 5, marginTop: 5 }}>
                {this.props.open}</Text>
            </View>
            <View style={styles.dataColumn}>
                <Text style={{ color: "#3399ff", fontSize: 10, textAlign: 'center',
                marginBottom: 5, marginTop: 5 }}>
                {this.props.close}</Text>
            </View>
            <View style={styles.dataColumn}>
                <Text style={{ color: "#3399ff", fontSize: 10, textAlign: 'center',
                marginBottom: 5, marginTop: 5 }}>
                {this.props.high}</Text>
            </View>
            <View style={styles.dataColumn}>
                <Text style={{ color: "#3399ff", fontSize: 10, textAlign: 'center',
                marginBottom: 5, marginTop: 5 }}>
                {this.props.low}</Text>
            </View>
            <View style={styles.dataColumn}>
                <Text style={{ color: "green", fontSize: 10, textAlign: 'center',
                marginBottom: 5, marginTop: 5 }}>
                <Icon name={this.props.close > this.props.open ? 'trending-up' : 'trending-down'} 
                size={20} color={this.props.close > this.props.open  ? '#1DA664' : '#DE5347'}
                /> 
                {/* arrow-up-right arrow-down-right */}
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
    container: {
        backgroundColor: "#fff",
        marginTop: 15,
        //justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },      
    dateColumn:{
    backgroundColor:'white',
    flex:2,
    //borderRightColor:'grey',
    //borderRightWidth:0.5,
    //borderLeftColor:'grey',
    //borderLeftWidth:0.5
    },
    dataColumn:{
    backgroundColor:'white',
    flex:1,
    //borderRightColor:'grey',
    //borderRightWidth:0.5,
    //borderLeftColor:'grey',
    //borderLeftWidth:0.5
    }
});