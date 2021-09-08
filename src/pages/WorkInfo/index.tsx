import { View,Image } from '@tarojs/components';
import React, { useEffect, useState } from 'react'; 
import {getOssAddress} from '@utils/tool'
import BaseTitle from '@components/BaseTitle'
import WorkModals from './components/WorkModals.tsx';
import styles from './style.module.scss';

interface IProps{

}
const workList=[{
        id:1,
        time:'2021.02-至今',
        cname:'广东世纪晓教育科技有限公司',
        address:'广州',
        size:'公司规模：2000-2500人',
        position:'前端开发'
    },{
        id:0,
        time:'2018.11-2020.12',
        cname:'广州仁东互联网小额贷款有限公司',
        address:'广州',
        size:'公司规模：50-70人',
        position:'前端开发'
    },{
        id:2,
        time:'2018.07-2018.11',
        cname:'广州富田日捆储运有限公司',
        address:'广州',
        size:'公司规模：4000-5000人',
        position:'前端开发'
    }
]
const WorkInfo:React.FC<IProps>=props=>{
    const [modalVisible,setModalVisible] = useState<boolean>(false)
    const [moId,setMyId] = useState<number>(0)

    const handleClick=(id)=>{
        setMyId(id)
        setModalVisible(true)
    }
    useEffect(()=>{
        modalVisible? document.body.style.overflow = 'hidden':document.body.style.overflow = 'auto'
    },[modalVisible])
    return (
        <View className={styles.workBox}> 
            <BaseTitle txt={'工作经历'}></BaseTitle>  
            {workList.map((idm,idx)=>{
            return <View key={idm.cname} className={styles.wkline}>
                <View className={styles.tm}>
                    <View>{idm.time}</View>
                    <View>{idm.cname}</View>
                </View>
                <View className={styles.bline}>
                    <View className={styles.cs}>
                        <View>{idm.size}</View>
                    </View>
                    <View onClick={()=>handleClick(idm.id)}  style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <View className={styles.pos}> {idm.position}</View> 
                        {idm.id !== 2 && <Image className={styles.icon} src={getOssAddress('rticon.png')}></Image>}
                    </View>
                </View>
            </View>})}

            {
                modalVisible && <WorkModals id={moId} closeModal={()=>setModalVisible(false)}/>
            }
        </View>
    )
}

export default WorkInfo