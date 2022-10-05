/**
 * 轮播图组件
 */

import { View,Swiper,SwiperItem,Image } from '@tarojs/components'
import React from 'react'
import { getOssAddress2 } from '@utils/tool'
import styles from './style.module.scss';

interface Iprops{

}
const list=[
    {
        id:0,
        img:getOssAddress2('B314BAB9-3DBB-4A67-9178-5AB240ED3D93.jpeg')
    },{
        id:1,
        img:getOssAddress2('3B55CABC-A59A-4AD1-97AB-1D8D0BCCD2C5.jpeg')
    },{
        id:2,
        img:getOssAddress2('B0CB60C7-E7D0-4E71-91CB-A669E57E9627.jpeg')
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
              autoplay
            >
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
