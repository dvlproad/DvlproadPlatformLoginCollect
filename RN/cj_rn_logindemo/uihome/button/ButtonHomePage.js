//ButtonHomePage.js
import React, { Component } from 'react';
import {
    LKNavigationFactory,
    LKDemoTableHomeComponent
} from "../../commonUI/luckincommonui";

export default class ButtonHomePage extends LKDemoTableHomeComponent {
    static navigationOptions = ({ navigation }) => {
        return LKNavigationFactory.backPageNavigationOptions({ navigation }, `按钮`)
    };

    constructor(props) {
        super(props);

        this.state = {
            sectionDataModels: [
                {
                    key: "Button",
                    data: [
                        {
                            title: "RNButtonPage",
                            nextPageName: "RNButtonPage"
                        },
                        {
                            title: "ButtonColorPage",
                            nextPageName: "ButtonColorPage"
                        },
                    ]
                },
            ],
        }
    }
}

//ButtonPages
import RNButtonPage from "./RNButtonPage";
import ButtonColorPage from "./ButtonColorPage";

export const ButtonPages = {
    ButtonHomePage: {
        screen: ButtonHomePage,
        navigationOptions: () => ({
            title: `ButtonHomePage`,
        }),
    },
    RNButtonPage: {
        screen: RNButtonPage,
        navigationOptions: () => ({
            title: `RNButtonPage`,
        }),
    },
    ButtonColorPage: {
        screen: ButtonColorPage,
        navigationOptions: () => ({
            title: `ButtonColorPage`,
        }),
    },
}
