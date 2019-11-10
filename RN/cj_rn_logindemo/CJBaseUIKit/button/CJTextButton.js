// CJTextButton.js
import React, { Component } from 'react';
import PropTypes from "prop-types";
import {Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View} from "react-native";

let screenHeight = Dimensions.get('window').height;
let screenBottomHeight = Platform.OS === 'ios' ? screenHeight >= 812 ? 34 : 0 : 0;



// var enableBlueColor = '#01ADFE';
// var disableBlueColor = '#01ADFE4C';
var enableBlueColor = 'rgba(23, 41, 145, 1)';
var disableBlueColor = 'rgba(23, 41, 145, 0.4)';


//注意此按钮顶部阴影超出了按钮本身区域，注意放在视图上层才会显示出来；
export class LKBlueBGBottomButton extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        fontSize: PropTypes.number,
        onPress: PropTypes.func,
        disabled: PropTypes.bool,
    };

    static defaultProps = {
        title: "title",
        fontSize: 17,
        onPress: () => { },
        disabled: false,
    };


    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { style } = this.props;
        let blueStateStyle = (this.props.disabled ? styles.blueDisable : styles.blueEnable)

        return (
            <View style={{
                paddingHorizontal: 15,
                paddingTop: 8,
                paddingBottom: 8 + screenBottomHeight,
                backgroundColor: 'white',
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -1 },
                shadowOpacity: 0.1,
                shadowRadius: 5,
                elevation: 10,
            }}>
                <LKBlueBGButton
                    style={[blueStateStyle, style]}
                    title={this.props.title}
                    fontSize={this.props.fontSize}
                    onPress={this.props.onPress}
                    disabled={this.props.disabled}
                />
            </View>
        )
    }

}

export class LKBlueBGButton extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        fontSize: PropTypes.number,
        onPress: PropTypes.func,
        disabled: PropTypes.bool,
    };

    static defaultProps = {
        title: "title",
        fontSize: 17,
        onPress: () => { },
        disabled: false,
    };


    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { style } = this.props;


        let blueStateStyle = (this.props.disabled ? styles.blueDisable : styles.blueEnable)

        return (
            <CJTextButton style={[blueStateStyle, style]}
                          title={this.props.title}
                          color={"#FFFFFF"}
                          fontSize={this.props.fontSize}
                          onPress={this.props.onPress}
                          disabled={this.props.disabled}
            />
        )
    }
}


const styles = StyleSheet.create({
    blueEnable: {
        height: 46,
        borderRadius: 3,
        backgroundColor: enableBlueColor,
        borderWidth: 0
    },
    blueDisable: {
        height: 46,
        borderRadius: 3,
        backgroundColor: disableBlueColor,
        borderWidth: 0
    }
});

// 文本按钮
export default class CJTextButton extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        color: PropTypes.string,
        fontSize: PropTypes.number,
        onPress: PropTypes.func,
        disabled: PropTypes.bool,
    };

    static defaultProps = {
        title: "title",
        color: "#01ADFE",
        fontSize: 17,
        onPress: () => { },
        disabled: false,
    };

    render() {
        const { style } = this.props;

        // 使用Button组件，无法处理disabled时候的文字颜色问题
        // return (
        //     <View style={[{flex:1}, style]} >
        //         <Button
        //             title={this.props.title}
        //             color={this.props.color}
        //             disabled={this.props.disabled}
        //             onPress={this.props.onPress}
        //         />
        //     </View>
        // )
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                disabled={this.props.disabled}
                style={[{ justifyContent: "center", height: 44 }, style]}
                //activeOpacity={0.4}
            >
                <Text
                    style={{
                        textAlign: 'center',
                        color: this.props.color,
                        fontSize: this.props.fontSize
                    }}
                >
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        )
    }
}
