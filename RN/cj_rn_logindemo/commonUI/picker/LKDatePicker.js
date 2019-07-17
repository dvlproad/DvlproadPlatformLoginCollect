// LKDatePicker
/*
LKDatePicker:日期选择器 使用示例

import LKDatePicker from "../../commonUI/picker/LKDatePicker";

                // 选择日期
                chooseDate = () => {
                    this.birthdayDatePicker.showWithDateString(
                        '',
                        (dateString)=>{
                            LKToastUtil.showMessage(dateString)
                        }
                    )
                }

              <LKTextButton
                    style={{ width: 180, backgroundColor:'red'}}
                    title={'yyyyMMdd的日期选择'}
                    onPress={()=>{
                        this.chooseDate();
                    }}
                />


                <LKDatePicker
                    datePickShowType={LKDatePickShowType.yyyyMMdd}
                    ref={ref => this.birthdayDatePicker = ref}
                />

 */

import React, { Component } from 'react';
import PropTypes from "prop-types";
import LKComJSDatePicker, {LKDatePickShowType} from "./LKComJSDatePicker";
import LKToastUtil from "../toast/LKToastUtil";
import LKDateUtil from "../../commonUtil/LKDateUtil";

/** 日期选择器创建的时机 */
export var LKDatePickerCreateTimeType = {
    Free: 0,                //当空闲的时候偷偷执行
    BeCall: 1,              //当需要调用日期选择的时候才去创建(防止进入页面时候卡顿)
    SuperViewAppear: 2,     //当其所视图显示的时候就创建(会造成初次卡顿)
}

export default class LKDatePicker extends Component {
    static propTypes = {
        datePickShowType: PropTypes.number,         //日期器的选择样式(默认yyyyMMdd,即只显示年月日)
        datePickerCreateTimeType: PropTypes.number, //日期选择器创建的时机
        // dateString: PropTypes.string,       //选择的日期
        //
        // onPickerConfirm: PropTypes.func,    //日期选择'确认'
        // onPickerCancel: PropTypes.func,     //日期选择'取消'
        // onPickerSelect: PropTypes.func,     //日期选择'变了下'
        onCoverPress: PropTypes.func,       //点击空白区域
    };

    static defaultProps = {
        datePickShowType: LKDatePickShowType.yyyyMMdd,
        datePickerCreateTimeType: LKDatePickerCreateTimeType.Free,
        // dateString: '',
        //
        // onPickerConfirm: (dateString)=>{},
        // onPickerCancel: ()=>{},
        // onPickerSelect: (dateString)=>{},
        onCoverPress: ()=>{},
    };

    constructor(props) {
        super(props);

        let needCreateAtFirst = this.props.datePickerCreateTimeType == LKDatePickerCreateTimeType.SuperViewAppear;

        this.state = {
            hasCreate: needCreateAtFirst,

            dateString: '',

            onPickerConfirm: ()=>{ },
            onPickerCancel: ()=>{ },
            onPickerSelect: ()=>{ },
        }
    }

    /**
     * 显示日期选择器(默认显示 yyyyMMdd 选择器)
     * @param dateString        弹出时候选中的日期(输入的字符串，依赖设置的datePickShowType，如默认是yyyyMMdd，即形如'2000-02-29')
     * @param onPickerConfirm   确认
     */
    showWithDateString(dateString, onPickerConfirm) {
        this.showAllEvent(dateString, onPickerConfirm, null, null);
    }

    /**
     * 显示日期选择器(默认显示 yyyyMMdd 选择器)
     * @param dateString        弹出时候选中的日期(输入的字符串，依赖设置的datePickShowType，如默认是yyyyMMdd，即形如'2000-02-29')
     * @param onPickerConfirm   确认
     * @param onPickerCancel    取消
     * @param onPickerSelect    选择过程的事件
     */
    showAllEvent(dateString, onPickerConfirm, onPickerCancel, onPickerSelect) {
        this.setState({
            dateString: dateString,
            onPickerConfirm: onPickerConfirm,
            onPickerCancel: onPickerCancel,
            onPickerSelect: onPickerSelect
        }, ()=>{
            this.tryShowDatePicker();
        })
    }

    /**
     * 尝试弹出日期选择控制器
     */
    tryShowDatePicker() {
        if (this.state.hasCreate) {
            // this.showDatePicker();

            // 如果不设置setState无法，重新render选择器
            this.setState({
                hasCreate: true,
            }, () => {
                this.showDatePicker();
            })

        } else {
            this.setState({
                hasCreate: true,
            }, () => {
                this.showDatePicker();
            })
        }
    }

    /**
     * 弹出日期选择控制器
     */
    showDatePicker() {
        if (this.datePicker) {
            let dateString = this.state.dateString;
            this.datePicker.updateDefaultSelectedDateString(dateString);

            this.datePicker.show();
        } else {
            LKToastUtil.showMessage('Error：你还未创建日期选择器');
        }
    }

    /**
     * 获取当前日期选择控制器
     * @returns {null|LKComJSDatePicker}
     */
    getDatePicker() {
        if (this.state.hasCreate) {
            return this.createDatePicker();
        } else {
            return null;
        }
    }

    /**
     * 创建弹出日期选择控制器
     * @returns {LKComJSDatePicker}
     */
    createDatePicker() {
        return (
            <LKComJSDatePicker
                datePickShowType={this.props.datePickShowType}
                dateString={this.state.dateString}
                onPickerConfirm={(dateString) => {
                    this.state.onPickerConfirm && this.state.onPickerConfirm(dateString);
                }}
                onPickerCancel={() => {
                    this.state.onPickerCancel && this.state.onPickerCancel();
                }}
                onCoverPress={() => {
                    this.props.onCoverPress && this.props.onCoverPress();
                }}
                ref={ref => this.datePicker = ref}
            />
        );
    }

    render() {
        if (!this.state.hasCreate && this.props.datePickerCreateTimeType == LKDatePickerCreateTimeType.Free) {
            setTimeout(()=>{
                this.setState({
                    hasCreate: true,
                })
            }, 500);
        }

        return (
            this.getDatePicker()
        );
    }
}