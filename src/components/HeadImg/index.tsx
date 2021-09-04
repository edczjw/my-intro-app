import React from 'react'
import { View,Image } from '@tarojs/components'
import styles from './style.module.scss';

interface Iprops{

}
const HeadImg:React.FC<Iprops>=props=>{
    return (
        <View className={styles.HimgWrapper}>
            <Image
                className={styles.Img}
                src='../../assets/Imgs/img.png'
            />
        </View>
    )
}
export default HeadImg