// luckincommonui.js

'use strict';

// navigation 导航栏(含路由)
import LKNavigationFactory from "./Navigation/LKNavigationFactory";
import LuckinRoute from "./Navigation/LuckinRoute";

// CollectionView
import LKEntryHomeComponent from "./CollectionView/LKEntryHomeComponent";
import LKImageHomeComponent from "./CollectionView/LKImageHomeComponent";
import LKImageActionCollectionView from "./CollectionView/LKImageActionCollectionView";
import LKImageActionHomeComponent from "./CollectionView/LKImageActionHomeComponent";



// picker
// import {
//   CJDatePicker as LKDatePicker,
//   CJBaseDatePicker as LKComJSDatePicker,
//   CJDatePickShowType as LKDatePickShowType,
//   CJDatePickerCreateTimeType as LKDatePickerCreateTimeType
// } from "../CJBaseUIKit/CJBaseUIKit";

// import { CJDatePicker as LKDatePicker } from "../CJBaseUIKit/CJBaseUIKit";
// import { CJBaseDatePicker as LKComJSDatePicker } from "../CJBaseUIKit/CJBaseUIKit";
// import { CJDatePickShowType as LKDatePickShowType } from "../CJBaseUIKit/CJBaseUIKit";
// import { CJDatePickerCreateTimeType as LKDatePickerCreateTimeType } from "../CJBaseUIKit/CJBaseUIKit";

import LKDatePicker from "../CJBaseUIKit/datePicker/CJDatePicker";
import LKComJSDatePicker from "../CJBaseUIKit/datePicker/CJBaseDatePicker";
import { CJDatePickShowType as LKDatePickShowType } from "../CJBaseUIKit/datePicker/CJBaseDatePicker";
import { CJDatePickerCreateTimeType as LKDatePickerCreateTimeType } from "../CJBaseUIKit/datePicker/CJDatePicker";



var LKCommonUI = {
    // navigation 导航栏(含路由)
    LKNavigationFactory,
    LuckinRoute,


    // list
    LKEntryHomeComponent,
    LKImageHomeComponent,
    LKImageActionCollectionView,
    LKImageActionHomeComponent,

    // date
    LKDatePickShowType,
    LKDatePickerCreateTimeType,
    LKComJSDatePicker,
    LKDatePicker,
    /**
     * <LKDatePicker ref={ref => this.datePicker = ref} />
     *
     * onPress={()=>{
                        this.datePicker.showAllEvent(
                            this.state.dateString2,
                            (dateString)=>{
                                this.setState({
                                    dateString2: dateString
                                })
                            },
                            ()=>{},
                            ()=>{},
                        )
                    }}
     */

};

module.exports = LKCommonUI;
