import React, { useEffect } from 'react'
import { View, Text, Image } from '@tarojs/components'
import Tabbar from '@components/Tabbar';
import { isH5 } from '@utils/platform';
import Tag from '@components/Tag'
import {getOssAddress} from '@utils/tool'
import styles from './style.module.scss';

const BaseInfo = [{
  bm: '学历',
  msg: '本科'
}, {
  bm: '居住地址',
  msg: '广州'
}, {
  bm: '工作经验',
  msg: '三年'
}, {
  bm: '籍贯',
  msg: '广东'
}, {
  bm: '期望薪资',
  msg: '20k'
}, {
  bm: '求职意向',
  msg: '前端开发工程师'
}
]
const skill=['React','Vue','Taro','小程序','Webpack','Sass','Es6','Git','Yarn']

// 阿里云头像
const avatur = getOssAddress('7E982CAA-C4C3-4548-A5DC-B4082E770797.jpeg')
const Index: React.FC = props => {

  useEffect(() => {

  })
  return (
    <View className={styles.BaseConx}>
      {/* <HeadImg /> */}
      <View className={styles.text}>
        {/* 头像 */}
        <View className={styles.avtars}>
          <Image mode={'aspectFill'} className={styles.Img} src={avatur}/> 
        </View> 
        {/* 格言 */}
        <View className={styles.sention}>
            <View className={styles.name}>
              曾君伟<Tag txt={'三年前端开发经验'}></Tag>
            </View>
            <View>男 / 26岁 / 全日制本科</View> 
          </View>
      </View>
       {/* 内容 */}
      <View className={styles.box}>
        <View className={styles.tit}>基本信息</View>
        {BaseInfo.map((idm, idx) =>
          <View className={styles.psg} key={idm.bm}>
            <View>{idm.bm}</View>
            <View>{idm.msg}</View>
          </View>
        )}
      </View>
      
      <View className={styles.box}>
        <View className={styles.tit}>技能标签</View>
        <View className={styles.tg}>  
          {skill.map((idm) =>
              <Tag extag={true} key={idm} txt={idm}></Tag>  
          )}
          <View className={styles.clr}></View>
        </View>
      </View>

      <View className={styles.box}>
        <View className={styles.tit}>教育经历</View>
        <View className={styles.bk}>  
          <View>2014.06-2018.06</View> 
          <View>佛山科学技术学院</View>  
          <View>全日制本科</View>
        </View>
      </View>
      {isH5 && <Tabbar></Tabbar>}
    </View>
  )
}
export default Index
