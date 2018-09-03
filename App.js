/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';

import Pages from "./js/stacknavigator/Pages";


type Props = {};

export default class App extends Component<Props> {
    render() {
        return (
            <Pages/>
        )
    }
}
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             text1: "ToastForAndroid",
//             text2: "testAndroidCallbackMethod",
//             text3: "textAndroidPromiseMethod",
//             text4: "DeviceEventEmitter",
//             text5: "getValue",
//             data: "点击获取上个页面传过来的数据",
//         }
//         this.componenWillMount();
//     }
//
//     componenWillMount() {
//         DeviceEventEmitter.addListener('EventName', function (msg) {
//             console.log(msg);
//             let rest = NativeModules.ToastForAndroid.MESSAGE;
//             ToastAndroid.show("DeviceEventEmitter收到的消息：" + "\n" + rest, ToastAndroid.SHORT);
//         });
//     }
//
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.title}>Android与React Native之间的通信有以下几种方式:</Text>
//                 <TouchableOpacity onPress={this._getDataFromPrevious.bind(this)}>
//                     <Text style={styles.hello}>{this.state.data}</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={this._onPressButton.bind(this)}>
//                     <Text style={styles.hello}>{this.state.text1}</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={this._onPressButton2.bind(this)}>
//                     <Text style={styles.hello}>{this.state.text2}</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={this._onPressButton3.bind(this)}>
//                     <Text style={styles.hello}>{this.state.text3}</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={this._onPressButton4.bind(this)}>
//                     <Text style={styles.hello}>{this.state.text4}</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={this._onPressButton5.bind(this)}>
//                     <Text style={styles.hello}>{this.state.text5}</Text>
//                 </TouchableOpacity>
//
//             </View>
//         );
//     }
//
//     _getDataFromPrevious() {
//         NativeModules.ToastForAndroid.getDataFromIntent((result) => {
//             this.setState({data: result});
//         })
//     }
//
//     _onPressButton() {
//         NativeModules.ToastForAndroid.show(1000);
//     }
//
//     _onPressButton2() {
//         NativeModules.ToastForAndroid.testAndroidCallbackMethod("HelloJack", (result) => {
//             this.setState({text2: result});
//         })
//     }
//
//     _onPressButton3() {
//         NativeModules.ToastForAndroid.testAndroidPromiseMethod("abcx").then((result) => {
//             this.setState({text3: result});
//         }).catch((error) => {
//             this.setState({text: 'error'});
//         })
//     }
//
//     _onPressButton4() {
//         NativeModules.ToastForAndroid.sendEvent();
//     }
//
//     _onPressButton5() {
//         ToastAndroid.show(NativeModules.ToastForAndroid.MESSAGE, ToastAndroid.SHORT);
//     }
// }

// export default StackNavigator({
//         Home: {screen: NavigatorTest},
//         Communication: {screen: App},
//         PropsDemo: {screen: PropsDemo}
//     },
//     {
//         //用来控制初始化哪一个路由
//         initialRouteName: 'Home'
//     });

//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         flexDirection: 'column',
//         backgroundColor: '#F5FCFF',
//     },
//     btn: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 20,
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5,
//     },
//     hello: {
//         fontSize: 16,
//         textAlign: 'center',
//         margin: 10,
//     },
//     title: {
//         fontSize: 20,
//         color: '#f00',
//         margin: 20,
//     }
// });
//
// AppRegistry.registerComponent('navigator',()=>NavigatorTest);