//LKEmptyNetwork.js

/*
 使用示例：

import LKEmptyNetwork, {LKAPILoadStatus} from "../commonUI/empty/LKEmptyNetwork";

    render() {
        if (this.state.apiLoadStatus == LKAPILoadStatus.Success) {
            return this.healthCerComponents();
        } else {
            return (
                <LKEmptyNetwork message={'我是信息，可不设置'}
                                refreshHandle={()=>{
                                    console.log('您点击了刷新');
                                }}
                />
            )
        }
    }
 */

import React, { Component } from 'react';
import PropTypes from "prop-types";
import {ScrollView, StyleSheet, Text, Image, View} from "react-native";
import {LKWhiteBGButton} from "../button/LKTextButton";

/// API网络请求状态
export var LKAPILoadStatus = {
    Pending: 0,     /**< 正准备请求数据 */
    Success: 1,     /**< 成功请求到数据 */
    Failure: 2,     /**< 失败请求不到数据 */
};

export default class LKEmptyNetwork extends Component {
    static propTypes = {
        message: PropTypes.string,      //空白页的提示文字
        // imageSource: PropTypes.number,  //空白页的图片
        refreshHandle: PropTypes.func,  //点击刷新时候触发的事件
    };

    static defaultProps = {
        message: '网络好像有点问题',
        imageSource: require('./resources/networkError.png'),
        refreshHandle: () => {},
    };


    render() {
        const { style } = this.props;

        return (
                <ScrollView style={[{flex:1}, style]} contentContainerStyle={{flexGrow:1}}>
                    <View style={{flex:1, flexDirection: "column", marginTop:-60, justifyContent: "center", alignItems:'center'}}>
                        <Image
                            source={this.props.imageSource}
                        />

                        <Text style={[styles.text, {marginTop: 22}]}>{this.state.message}</Text>

                        <LKWhiteBGButton style={{width:160, marginTop:60}}
                                         title={'刷新'}
                                         onPress={this.props.refreshHandle}
                        />
                    </View>
                </ScrollView>
            )
    }
}

var styles = StyleSheet.create({
    text: {
        height: 44,
        fontSize: 17,
        textAlign: 'center',
        lineHeight:44,
        color: '#999999'
    },
});