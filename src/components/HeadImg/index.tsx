import React,{useEffect,useState} from 'react'
import { View,Image } from '@tarojs/components'
import styles from './style.module.scss';
import {getStorageSync} from '@utils/storage'   

interface Iprops{
    isHeadImg?:boolean
}
const HeadImg:React.FC<Iprops>=props=>{
    const {isHeadImg} = props
    const [userInfo,setUserInfo] = useState<any>({
        nickName:'',avatar:''
    })
    useEffect(()=>{ 
        setUserInfo(getStorageSync('userInfo'))
    },[isHeadImg])
    return (
        <View className={styles.HimgWrapper}>
            <View>欢迎您！{userInfo?.nickName}</View>
            <Image
              className={styles.Img}
              src={userInfo?.avatar}
            />
        </View>
    )
}
export default HeadImg