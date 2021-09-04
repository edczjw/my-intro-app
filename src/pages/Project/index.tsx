/**
 * 项目经历页面
 */
import { View } from '@tarojs/components';
import React from 'react';
import Tag from '@components/Tag'
import styles from './style.module.scss';

interface Iprops{

}
const List=[{
    time:'2021.02-至今',
    pname:'星火报读-C端项目',
    cname:'广东世纪晓教育科技有限公司',
    piList:[{
        nt:'应用技术',
        val:'Taro + React + Es6 + Typescript'
    },{
        nt:'多终端',
        val:'基于 Taro 实现一套代码在三端运行（星火教育 App、微信公众号、小程序）；'
    },{
        nt:'项目描述',
        val:'该项目主要用于 C 端用户查看与购买培训课程所用，功能包括：登录注册、课程选购、购物车、下单支付、查看订单、查看课表、使用&购买优惠券、分享等功能；'
    }],
    pwList:['负责课程详情、下单支付、购物车、优惠券、订单、分享等模块功能开发；',
        '负责封装全局自定义Loading模块；',
        '负责封装全局拦截限流接口以及弹窗模块；',
        '负责封装多端通用组件、React hook 和公共方法（多端生命周期封装、跳转方法、滚动组件、Sass公用方法等）；',
        '书写工程文档和组件使用文档；'
    ]},{
        time:'2021.02-至今',
        pname:'星火教育-报读 PC 管理平台',
        cname:'广东世纪晓教育科技有限公司',
        piList:[{
            nt:'应用技术',
            val:'React + Es6 + Typescript + ice.js + icestark（微前端）'
        },{
            nt:'项目描述',
            val:'该管理平台用于配置星火教育 APP 等移动端项目的数据来源，如：课程管理、班级管理、学生管理、教师管理、订单管理、优惠券管理、移动端首页自定义配置、权限管理等；'
        }],
        pwList:['负责搭建基于ice框架的多页签应用（基于react-router动态路由，实现一套自定义组件加载方案）；',
            '负责课程、订单、优惠券、课程续报模块与移动端首页自定义配置的业务模块开发；',
            '负责应用内登录功能、账号权限判断、封装统一请求方法等；',
            '使用 icestark 微前端框架接入子应用（账号权限配置模块、分销管理模块），解决 css 样式污染问题；'
        ]},{
            time:'2019.09 - 2020.05',
            pname:'海拍客 APP - 乐分期 内嵌H5',
            cname:'广州仁东互联网小额贷款有限公司',
            piList:[{
                nt:'应用技术',
                val:'Vue + Es6 + JS + VantUi）'
            },{
                nt:'项目描述',
                val:'海拍客是一款母婴电商平台app，商家可通过嵌入进App中的乐分期H5页面进行贷款批购母婴产品，乐分期提供一整套贷款H5页面供商家借款、查账、还款等功能，可选择分期还和随心还两种产品。'
            }],
            pwList:['负责订单管理、我的订单、购物车、订单详情等模块功能开发；',
                'UI组件统一规范化、整体布局设计、H5页面开发，需求功能开发，高质量还原UI设计稿；',
                '开发需求功能点，与后台协调API接口；'
            ]}]
const ProjectInfo:React.FC<Iprops>=props=>{
    return(
        <View className={styles.pBox}>
            {
                List.map((idm)=>{
                    return <View className={styles.pwop}>
                        <View className={styles.tp}>
                            <View className={styles.tc}>{idm.time}</View>
                            <Tag oxtag={true} txt={idm.pname}></Tag>
                        </View>
                        <View className={styles.pc}>所属公司：{idm.cname}</View>
                        <View className={styles.pi}>项目简介：</View>
                        {
                            idm.piList.map((pm)=>{
                                return <View className={styles.po}>• {pm.nt}{pm.val}</View>
                            })
                        }
                        <View className={styles.pw}>项目职责：</View>
                        {
                            idm.pwList.map((pm,pn)=>{
                                return <View className={styles.po}>{pn+1}、{pm}</View>
                            })
                        }
                    </View>
                })
            } 
        </View>
    )
}

export default ProjectInfo