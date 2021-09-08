import {getStorageSync} from '@utils/storage'
/**
 * 
 * @param name 获取阿里云图片地址
 * @returns 
 */
export const getOssAddress=(name:string)=>{
    return 'https://xiao-zh-cdn.oss-cn-shenzhen.aliyuncs.com/cmall/mweb/images/'+name
}
