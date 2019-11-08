// CJUIKitCollectionViewComponent.js
/*
CJUIKitCollectionViewComponent:图片控件(含加载动画和其他可操作事件) 的使用示例

import CJUIKitCollectionViewComponent  from '../../commonUI/image/LKActionLoadingImage';

                <CJUIKitCollectionViewComponent
                    style={{
                        width: 164, height: 108, backgroundColor:'red', borderRadius:10,
                        marginTop: 20,
                    }}
                    imageBorderStyle={{
                        borderRadius: 6,
                        borderWidth: 3,
                        borderColor: "cyan",
                    }}
                    source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562747201772&di=e5e02e2208aea4acdfd1fa92d4a10d42&imgtype=0&src=http%3A%2F%2Fimg1.ph.126.net%2FI9-_x2ze5vz07q7YorAc1Q%3D%3D%2F151715012463950227.jpg'}}

                    clickButtonHandle={()=>{
                        LKToastUtil.showMessage('点击图片');
                    }}
                />
 */

import React, { Component } from 'react';
import {StyleSheet, View, TouchableOpacity, ViewPropTypes, Text} from 'react-native';
import LKLoadingImage  from '../image/LKLoadingImage';
import PropTypes from "prop-types";

const viewPropTypes = ViewPropTypes || View.propTypes;
const stylePropTypes = viewPropTypes.style;

export default class CJUIKitCollectionViewComponent extends Component {
    static propTypes = {
        moduleModel: PropTypes.object.isRequired,    //模型
        defaultSource: PropTypes.number,
        imageBorderStyle: stylePropTypes,   //图片边框样式

        clickButtonHandle: PropTypes.func,
        buttonIndex: PropTypes.number,

        onLoadComplete: PropTypes.func, //图片加载结束的回调

        // 是否需要加载动画(默认需要)
        // 有以下体验不友好的情况需要特殊处理：即从本地上传的图片会得到网络图片地址，
        // 如果此时把网络图片的地址更新上去，会导致再显示菊花loading，不大友好，需要设置本属性为false
        needLoadingAnimation: PropTypes.bool,

        changeShowDebugMessage: PropTypes.bool,    //将提示信息改为显示调试的信息，此选项默认false
    };

    static defaultProps = {
        moduleModel: {
            title: "模块1",
            imageSource: require('./resources/imageDefault.png'),
        },
        defaultSource: require('./resources/imageDefault.png'),
        imageBorderStyle: {
            borderRadius: 6,
            borderWidth: 0,
            borderColor: "#E5E5E5",
        },

        clickButtonHandle: (buttonIndex)=>{},
        buttonIndex: 0,

        onLoadComplete: (buttonIndex)=>{},

        needLoadingAnimation: true,

        changeShowDebugMessage: false,
    };

    constructor(props) {
        super(props);

        this.state = {

        }
    }



    render() {
        const { style } = this.props;

        let buttonIndex = this.props.buttonIndex;

        const boxWidth = this.props.style.width;
        const boxHeight = this.props.style.height;
        let testBoxStyle = this.props.changeShowDebugMessage ? {backgroundColor: 'red'} : null;
        let boxStyle = [
            {width:boxWidth},
            style,
            testBoxStyle
        ];


        // 图片展示视图
        const imageWidth = 44;
        const imageHeight = 44;
        const imageTopRightPadding = 41/2;
        let imageStyle = {
            width: imageWidth,
            height: imageHeight,
            marginTop: imageTopRightPadding,
        };


        return (
            <TouchableOpacity
                style={boxStyle}
                onPress={()=> {
                    this.props.clickButtonHandle(buttonIndex);
                }}
            >
                <View style={{flex:1, flexDirection:"column", justifyContent:"center", alignItems:"center"}} >
                    <LKLoadingImage
                        style={imageStyle}
                        source={this.props.moduleModel.imageSource}
                        defaultSource={this.props.defaultSource}
                        imageBorderStyle={this.props.imageBorderStyle}
                        buttonIndex={buttonIndex}
                        onLoadComplete={this.props.onLoadComplete}
                        uploadType={this.props.uploadType}
                        uploadProgress={this.props.uploadProgress}
                        needLoadingAnimation={this.props.needLoadingAnimation}
                        changeShowDebugMessage={this.props.changeShowDebugMessage}
                    />
                    <Text style={styles.singleLineHVCenterText} >
                        {this.props.moduleModel.title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}


var styles = StyleSheet.create({
    singleLineHVCenterText: {   //单行文本水平&垂直居中
        height: 22,
        fontSize: 16,
        textAlign: 'center',
        lineHeight:22,
    },
    multipleLineHVCenterText: { //长文本的多行文本垂直居中
        height: 144,
        fontSize: 17,
        textAlign: 'center',
        lineHeight:144,
        textAlignVertical: 'center',
        // ...Platform.select({
        //     ios: { lineHeight: 100},
        //     android: {}
        // })
    },
});