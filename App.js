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