/**
 * LKDemoTableHomeComponent.js
 *
 * @Description: 用于测试各种功能的列表视图
 *
 * @author      ciyouzen
 * @email       dvlproad@163.com
 * @date        2019-07-02 14:17:50
 *
 * Copyright (c) dvlproad. All rights reserved.
 */
import React, {Component} from 'react';
import { Alert, Dimensions } from 'react-native';
import PropTypes from "prop-types";
import {
    CJSectionTableView
} from '../../CJBaseUIKit/CJBaseUIKit';
import LuckinRoute from "../Navigation/LuckinRoute";


export default class LKDemoTableHomeComponent extends Component {
    static propTypes = {
        moduleModels: PropTypes.array,
    }

    static defaultProps = {
        moduleModels: [],
    }

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    _execModuleModel= (moduleModel)=>{
        if (moduleModel.clickButtonHandle) {
            moduleModel.clickButtonHandle(moduleModel);
        } else if (moduleModel.nextPageName && moduleModel.nextPageName.length > 0) {
            // this.props.navigation.navigate(moduleModel.nextPageName);
            LuckinRoute.push(this.props.navigation, moduleModel.nextPageName, {});
        } else {
            Alert.alert("提示：请至少设置 moduleModel.clickButtonHandle 或 moduleModel.nextPageName");
        }
    }


    render() {
        const screenWidth = Dimensions.get('window').width;
        const listWidth = screenWidth;

        return (
            <CJSectionTableView
                sectionDataModels={this.state.sectionDataModels}
                clickModuleModel={this._execModuleModel}
            />
        );
    }
}