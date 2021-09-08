import { View ,Text} from '@tarojs/components'
import React from 'react'
import styles from './style.module.scss';

interface Iprops{
    txt:string
}

const BaseTitle:React.FC<Iprops>=props=>{
    const {txt} = props
    return(
        <View className={styles.basewrap}>
           <Text style={{color:'#7e56c3'}}>•</Text> {txt}
        </View>
    )
}

export default BaseTitle