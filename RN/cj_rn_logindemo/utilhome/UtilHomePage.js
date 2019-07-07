//UtilHomePage.js
import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import HomeSectionList from "../commonUI/list/HomeSectionList";


export default class UtilHomePage extends Component {

    constructor(props) {
        super(props);
    }

    _onPressButton = (nextPageName) => {
        console.log(nextPageName);

        if (nextPageName) {
            this.props.navigation.navigate(nextPageName)
        } else  {
            //nextPageName = "Button";
            Alert.alert(nextPageName)
        }
    }


    render() {
        let sections = [
            { key: "Date",
                data: [
                    { title: "Date", page: "DateHome" },
                    ]
            },
            { key: "String",
                data: [
                    { title: "StringPage", page: "StringPage" },
                ]
            },
            { key: "Timer",
                data: [
                    { title: "CountTimerPage", page: "CountTimerPage" },
                ]
            },
            { key: "C",
                data: [
                    { title: "成吉思汗" },
                    { title: "超市快递" }
                    ]
            },
        ];

        return (
            <View style={{ flex: 1 }}>
                <HomeSectionList
                    sections={sections}
                    onPress={this._onPressButton}
                />
            </View>
        );
    }
}


//UtilPages

//string
import StringPage from "./string/StringPage";

//timer
import CountTimerPage from './timer/CountTimerPage';

export const UtilRoutePage = 'UtilHomePage';
export const UtilPages = {
    UtilHomePage: {
        screen: UtilHomePage,
        navigationOptions: () => ({
            title: `Util首页`,
        }),
    },
    StringPage: {
        screen: StringPage,
        navigationOptions: () => ({
            title: `String首页`,
        }),
    },
    CountTimerPage: {
        screen: CountTimerPage,
        navigationOptions: () => ({
            title: `Timer首页`,
        }),
    },
};
