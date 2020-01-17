import React, { Fragment } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    TouchableOpacity,
    TextInput
} from 'react-native';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import Icon from 'react-native-vector-icons/Feather';
import Modal from "react-native-modal";

export default class ContentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            commented: false,
            commentText: "",
        };
    }//constructor
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
        console.log("toggle", this.state.isModalVisible);
    };

    renderIcon = () => {
        if (this.state.commentText != "") {
            return (
                <Icon style={{ marginLeft: 5 }} name='edit-3'
                    size={14} color={this.props.close > this.props.open ? '#1DA664' : '#DE5347'}
                />
            );
        } else {
            return null;
        }
    }

    render() {

        return (
            <TouchableOpacity onPress={this.toggleModal}>
                <View style={{ color: "white", flex: 1, textAlign: 'center', backgroundColor: Colors.lighter }}>
                    <View style={{ backgroundColor: 'white', flex: 7, flexDirection: 'row' }}>
                        <View style={styles.dateColumn}>
                            <Text style={{
                                color: "#3399ff", fontSize: 10, textAlign: 'center',
                                marginBottom: 7, marginTop: 7
                            }}>
                                {this.props.date}</Text>
                        </View>
                        <View style={styles.dataColumn}>
                            <Text style={{
                                color: "#3399ff", fontSize: 10, textAlign: 'center',
                                marginBottom: 7, marginTop: 7
                            }}>
                                {this.props.open}</Text>
                        </View>
                        <View style={styles.dataColumn}>
                            <Text style={{
                                color: "#3399ff", fontSize: 10, textAlign: 'center',
                                marginBottom: 7, marginTop: 7
                            }}>
                                {this.props.close}</Text>
                        </View>
                        <View style={styles.dataColumn}>
                            <Text style={{
                                color: "#3399ff", fontSize: 10, textAlign: 'center',
                                marginBottom: 7, marginTop: 7
                            }}>
                                {this.props.high}</Text>
                        </View>
                        <View style={styles.dataColumn}>
                            <Text style={{
                                color: "#3399ff", fontSize: 10, textAlign: 'center',
                                marginBottom: 7, marginTop: 7
                            }}>
                                {this.props.low}</Text>
                        </View>
                        <View style={styles.dataColumn}>
                            <Text style={{
                                color: "green", fontSize: 10, textAlign: 'center',
                                marginBottom: 7, marginTop: 7
                            }}>
                                {/* {this.state.commentText} */}
                                <Icon name={this.props.close > this.props.open ? 'trending-up' : 'trending-down'}
                                    size={18} color={this.props.close > this.props.open ? '#1DA664' : '#DE5347'}
                                />  {this.renderIcon()}
                            </Text>
                        </View>

                    </View>
                    {/* <Icon style={{ marginLeft: 5 }} name={this.state.commentText != "" ? 'message-circle' : false}
                                    size={12} color={this.props.close > this.props.open ? '#1DA664' : '#DE5347'}
                                /> */}

                    <Modal isVisible={this.state.isModalVisible}>
                        <View style={{ flex: 1 }}>
                            <TextInput
                                style={styles.inputBox}
                                placeholderTextColor="green"
                                //placeholder="Enter Comments"
                                //placeholder={this.state.commentText}                    
                                autoCorrect={true}
                                returnKeyType="go"
                                ref={input => (this.commentText = input)}
                                onChangeText={commentText => this.setState({ commentText })}
                                value={this.state.commentText}
                            />
                            <Button title="submit" onPress={this.toggleModal} />
                        </View>
                    </Modal>


                </View>
            </TouchableOpacity>
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
    dateColumn: {
        backgroundColor: 'white',
        flex: 2,
        //borderRightColor:'grey',
        //borderRightWidth:0.5,
        //borderLeftColor:'grey',
        //borderLeftWidth:0.5
    },
    dataColumn: {
        backgroundColor: 'white',
        flex: 1,
        //borderRightColor:'grey',
        //borderRightWidth:0.5,
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