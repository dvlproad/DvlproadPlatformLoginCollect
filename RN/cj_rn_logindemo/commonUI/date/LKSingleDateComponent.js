// LKSingleDateComponent.js

/* 使用示例
import LKSingleDateComponent from "../../commonUI/date/LKSingleDateText";

export default class OwnNativeSingleDatePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beginDateString1: "2000-02-29",
        };
    }

    render() {
        return (
            <LKSingleDateComponent style={{flex: 1}}
                                   placeholder= {"选择日期"}
                                   chooseDateString={this.state.beginDateString1}
                                   allowPickDate={true}
                                   onDateChange={ (date) => {
                                       this.setState({
                                           beginDateString1: date
                                       })
                                   }}
                                   isBankStyle={false}
            />
        );
    }
}
 */
import React, { Component } from 'react';
import PropTypes from "prop-types";
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import LKComJSDatePicker, {LKDatePickShowType} from "../picker/LKComJSDatePicker";
import LKToastUtil from "../toast/LKToastUtil";
import LKSingleDateText from "./LKSingleDateText";

export default class LKSingleDateComponent extends Component {
    static propTypes = {
        isBankStyle: PropTypes.bool,    //是否没有样式
        allowPickDate: PropTypes.bool,

        placeholder: PropTypes.string,
        chooseDateString: PropTypes.string,
        onDateChange: PropTypes.func,

        minDate: PropTypes.string,
        maxDate: PropTypes.string,
    };

    static defaultProps = {
        isBankStyle: false,
        allowPickDate: false,

        placeholder: '请选择日期',
        chooseDateString: '',

        minDate: "1900-01-01",
        maxDate: "2300-01-01",
    };

    constructor(props) {
        super(props);

        this.state={
            dateString: props.chooseDateString,
        }
    }


    render() {
        return (
            <TouchableOpacity style={{paddingTop:20, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}
                              disabled={!this.props.allowPickDate}
                              onPress={()=>{
                                  // this.showDatePick(dateString);
                                  this.datePicker.show();
                              }}

            >
                <LKComJSDatePicker datePickShowType={LKDatePickShowType.yyyyMMdd}
                                   dateString={this.state.dateString}
                                   onPickerConfirm={(dateString) => {
                                       LKToastUtil.showMessage(dateString)
                                       this.setState({
                                           dateString: dateString,
                                       })
                                   }}
                                   onPickerCancel={() => {
                                       LKToastUtil.showMessage('取消');
                                   }}
                                   ref={ref => this.datePicker = ref}
                />


                <LKSingleDateText style={{paddingTop: 0, backgroundColor:'green'}}
                                  placeholder={this.props.placeholder}
                                  chooseDateString={this.state.dateString}
                                  isBankStyle={this.props.isBankStyle}
                                  allowPickDate={this.state.allowPickDate}
                                  onPress={()=>{
                                      this.datePicker.show()
                                  }}
                />

            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        // fontSize: 18,
        textAlign: 'center',
        paddingVertical: 10,
    },
})