// choosePage.js
import React from 'react';
import {Alert, Button} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomePage from "./homePage";
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import HelathCerApp from "../helathCerApp/HealthCerApp";
import SampleAppMovies from "../movieApp/App";
import UiHomePage from "../uihome/uiHomePage"
import ButtonHome from "../uihome/buttonHome"
import UIChoosePage from "../uihome/uiChoosePage"

const AppStackNavigator = createStackNavigator(
    {
        Home: {
            screen: HomePage,
            navigationOptions: (props) => ({
                title: `HomePage`,
                headerRight: (
                    <Button
                            onPress={() => {
                                Alert.alert("你点击了提交按钮！");
                            }}
                            title="提交"
                    >提交</Button>
                )
            }),
        },
        A: {
            screen: Page1,
            navigationOptions: () => ({
                title: `A(react-native)`,
                headerBackTitle: 'A much too long text for back button from B to A',
                headerTruncatedBackTitle: `to A`
            }),
        },
        B: {
            screen: Page2,
            navigationOptions: () => ({
                title: `B(@ant-design/react-native)`,
            }),
        },
        C : {
            screen: Page3,
            navigationOptions: (props) => {//在这里定义每个页面的导航属性，动态配置
                const {navigation} = props;
                const {state, setParams} = navigation;
                const {params} = state;

                return {
                    title: params.title ? params.title : '右上角测试专用页',
                    headerRight: (
                        <Button
                            title={params.mode === 'edit' ? '保存' : '编辑'}
                            onPress={() =>
                                setParams({mode: params.mode === 'edit' ? '' : 'edit'})}
                        />
                    ),
                }
            },
        },
        Movie: {
            screen: SampleAppMovies,
            navigationOptions: () => ({
                title: `MovieApp`,
            }),
        },
        HelathCer: {
            screen: HelathCerApp,
            navigationOptions: () => ({
                title: `个人健康证`,
                headerStyle:{                                 //导航栏样式设置
                    backgroundColor:'#8bc9ff',
                },
            }),
        },
        UI: {
            screen: UIChoosePage,
            navigationOptions: () => ({
                title: `UI首页`,
                header: null,       //隐藏顶部导航栏
                tabBarVisible: true // 隐藏底部导航栏
            }),
        },

    },
    {
        initialRouteName: 'HelathCer'
    }
);

export default createAppContainer(AppStackNavigator);




