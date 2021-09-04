import { View,Image } from '@tarojs/components';
import React, { useEffect, useState } from 'react';
import {getOssAddress} from '@utils/tool'
import workInfo from '../Info/index';
import styles from './style.module.scss';

interface Iprops{
    id:number,
    closeModal:()=>void
}
const WorkModal:React.FC<Iprops>=props=>{
    const {id,closeModal} = props
    const [arrayList,setArrayList] = useState<Array<string>>([])
    useEffect(()=>{
        id===0? setArrayList(workInfo.workOne):setArrayList(workInfo.workTwo)
    },[])

    /**
     * 阻止小程序穿透
     */
    const handleTochMove = (e) =>{
        e.preventDefault()
        e.stopPropagation()
    }
    return (
        <View className={styles.modal} catchMove >
            <View className={styles.modalWp}>

                <View className={styles.tit}>
                    {id === 0? '广州仁东互联网小额贷款有限公司':'广东世纪晓教育科技有限公司'}
                    <Image onClick={closeModal} className={styles.close} src={getOssAddress('close1.png')}></Image>
                </View>
                <View className={styles.wp}>
                    {arrayList.map((idm,idx)=>{
                       return <View className={styles.lp} key={idm+idx}>• {idm}</View>
                    })}
                </View>
            </View>
        </View>
    )
}

export default WorkModal;