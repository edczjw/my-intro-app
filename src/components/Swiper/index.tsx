/**
 * 轮播图组件
 */

import { View,Swiper,SwiperItem,Image } from '@tarojs/components'
import React from 'react'
import { getOssAddress } from '@utils/tool'
import styles from './style.module.scss';

interface Iprops{

}
const list=[
    {
        id:0,
        img:getOssAddress('DA295E40-0341-445A-885D-7D51308CD597.jpeg')
    },{
        id:1,
        img:getOssAddress('2E8CFDA0-FE83-4560-8CAD-B7827F13FC9B.jpeg')
    },{
        id:2,
        img:getOssAddress('DE61DCDA-C52E-4302-B63E-FA736C1D321C.jpeg')
    }
]
const Swipers:React.FC<Iprops>=props=>{
    return(
        <View className={styles.swipBox}>
            <Swiper
                className='test-h'
                indicatorColor='#fff'
                indicatorActiveColor='#7e56c3'
                circular
                indicatorDots
                autoplay>
                    {list?.map((idm,idx)=>{
                        return <SwiperItem key={idm.img}>
                            <View className={styles.swiperImg}>
                                <Image className={styles.img} src={idm.img}></Image>
                            </View>
                        </SwiperItem>
                    })} 
            </Swiper>
        </View>
    )
}

export default Swipers
