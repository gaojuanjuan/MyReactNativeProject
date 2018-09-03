import React,{Component} from 'react';

import  FirstPage from './FirstPage';
import  SecondPage from './SecondPage';
import  ThirdPage from './ThirdPage';
import  FourthPage from './FourthPage';

import {
    StackNavigator,
} from 'react-navigation';

export default class Pages extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <SimpleAppNavigator/>
        )
    }
}

const SimpleAppNavigator = StackNavigator({
    page1:{screen:FirstPage},
    page2:{screen:SecondPage},
    page3:{screen:ThirdPage},
    page4:{screen:FourthPage},
},{
    initialRouteName:'page1',
});