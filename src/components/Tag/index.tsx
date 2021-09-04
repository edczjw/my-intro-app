import { View } from '@tarojs/components';
import React  from 'react';
import classnames from 'classnames'
import styles from './style.module.scss';

interface Iprop{
    txt:string,
    extag?:boolean,
    oxtag?:boolean
}

const Tag:React.FC<Iprop>=props=>{
    const {txt,extag,oxtag} = props 
    return(
        <View className={classnames({
            [styles.tag]:true,
            [styles.extag]:extag,
            [styles.oxtag]:oxtag
        })}>{txt}</View>
    )
}

export default Tag