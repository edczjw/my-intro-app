/**
 * 使用自定义hook获取登录状态
 */

import { useMemo } from 'react'
import {getStorageSync} from '@utils/storage' 
import {hideTabBar,showTabBar} from '@tarojs/taro'  

export default () => {  
    const loginStatus = getStorageSync('isLogin') || false
    loginStatus? showTabBar() : hideTabBar()   
  return loginStatus
}
