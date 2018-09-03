/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Image,
    View,
    Text
} from 'react-native';
import * as AppRegistry from "react-native";


 export class PropsDemo extends React.Component {
    render() {
        let pic = {
            uri:'http://img3.duitang.com/uploads/item/201512/01/20151201114658_unhJY.jpeg'
        };
        return (
            <View
            >
                <Text>hahah</Text>
            </View>
            // <Image source={pic} style={{width:193,height:110}}/>

        );
    }

}


AppRegistry.registerComponent('PropsDemo',()=>PropsDemo);