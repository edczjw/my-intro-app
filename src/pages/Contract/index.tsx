/**
 * 联系方式页面
 */
import { View,Image } from '@tarojs/components'; 
import React from 'react';
import {getOssAddress} from '@utils/tool'
import copy from '@utils/copy'
import BaseTitle from '@components/BaseTitle'
import styles from './style.module.scss';

interface Iprops{

} 
const Conlist =[{
    icon: getOssAddress('phone.png'),
    label:'13202480788',
},{
    icon: getOssAddress('email.png'),
    label:'347350971@qq.com',
},{
    icon: getOssAddress('wc.png'),
    label:'Joinvi_zard007',
},{
    icon: getOssAddress('QQ.png'),
    label:'347350971',
}]
const Contract:React.FC<Iprops>=props=>{

    return(
        <View className={styles.contractBox}>
            <BaseTitle txt={'联系方式'}></BaseTitle> 
            {
                Conlist.map((idm,idx)=>{
                    return <View key={idm.label+idx} className={styles.line}>
                        <View className={styles.left}><Image className={styles.img} src={idm.icon} />
                        {idm.label}</View>
                        <View onClick={()=>copy(idm.label)} className={styles.copy}>复制</View>
                    </View>
                })
            }
        </View>
    )
}
export default Contract