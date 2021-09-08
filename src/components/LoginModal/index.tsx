/**
 * 全局登录弹窗
 */
import React, { useEffect } from 'react';
import { Button, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import styles from './style.module.scss';
import { useSelector,useDispatch } from 'react-redux' 
import { SET_IS_LOGIN,SET_LOGIN_INFO } from '@redux/constants'
import {setStorageSync} from '@utils/storage'  

interface Iprops {
    setLoginHide:()=>void
}

const LoginModal: React.FC<Iprops> = props => {  
    const {setLoginHide} = props
    // 使用useDispatch
    const dispatch = useDispatch()

    // 检查用户微信是否授权登录
    const getUserfile = () => {
        Taro.getUserProfile({
            // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            desc: '用于个人资料',
            success: (res) => {
                const {avatarUrl,nickName} = res.userInfo
                // 将用户信息存储在缓存中
                setStorageSync('userInfo',{ avatar: avatarUrl, nickName:nickName })
                setStorageSync('isLogin',true)

                // 调用action设置登录状态
                dispatch({ type: SET_IS_LOGIN,payload:{isLogin:true} })
                // 设置redux存储头像和昵称
                dispatch({ type: SET_LOGIN_INFO,payload:{
                    avatar: avatarUrl,
                    nickName: nickName
                } }) 

                // 隐藏登录弹窗
                setLoginHide()
                console.log('获取用户信息',res.userInfo);
            },
            fail: (res) => {
                setStorageSync('isLogin',false)
                Taro.showToast({title:'获取失败',icon:'none'})
                console.log(res);
            },
            complete: (res) => {
                console.log(res);
            }
        })
    } 

    return (
        <View className={styles.lgmodalbox}>
            <View className={styles.box}>
                <View className={styles.txt}>请点击登录</View>
                <Button type="primary" onClick={getUserfile} className={styles.btn}>登录</Button>
            </View>
        </View>
    )
}

export default LoginModal