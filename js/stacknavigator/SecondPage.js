import React, {Component} from 'react'

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'

export default class ThirdPage extends Component<Props> {
    static navigationOptions = {
        title: 'page 2',
    };

    render() {
        const {navigate} = this.props.navigation;
        const {params} = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}> This is Second Page!</Text>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.goBack()
                }}>
                    <Text style={styles.textView}>
                        Touch me to go back!
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    navigate('page1')
                }}>
                    <Text style={styles.textView}>Go to First page</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    navigate('page3')
                }}>
                    <Text style={styles.textView}>Go to Third page</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    navigate('page4')
                }}>
                    <Text style={styles.textView}>Go to Fourth page</Text>
                </TouchableOpacity>

                <Text style={styles.textView}>
                    {'传来的参数是：'+params.message}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    textView: {
        fontSize: 16,
        textAlign: 'center',
        margin: 10,
        color: 'red'
    }
})