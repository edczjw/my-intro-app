import React,{useEffect, useState} from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import classNames from 'classnames'
import styles from './style.module.scss';

interface Iprops{

} 
const tabbarList = [
  { id: 0, label:'基本信息' }, 
  { id: 1, label:'技能强度' }, 
  { id: 2, label:'工作经历' }, 
  { id: 2, label:'项目经历' }, 
  { id: 2, label:'联系方式' }, 
]
const Tabbar:React.FC<Iprops>=props=>{  
    return (
        <View className={styles.tabbarStyle}>
            {
                tabbarList.map((itm,inx)=>{
                    return  <View className={styles.tabItm}>
                        <Text className={styles.Icon}></Text>
                        <View className={styles.tabLabel}>{itm.label}</View>
                    </View>
                })
            }
        </View>
    )
}
export default Tabbar;