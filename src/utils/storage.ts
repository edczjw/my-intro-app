/**
 * 自定义存储方法
 */
import Taro from '@tarojs/taro'
export const setStorageSync=(key,val)=>{
   return Taro.setStorageSync(key,val)
}

export const getStorageSync=(key)=>{
   return Taro.getStorageSync(key)
}