import React, { useEffect, useState } from 'react'
import { View, Image, ScrollView } from '@tarojs/components'
import Tabbar from '@components/Tabbar';
import { isH5 } from '@utils/platform';
import Tag from '@components/Tag'
import HeadImg from '@components/HeadImg'
import BaseTitle from '@components/BaseTitle'
import { getOssAddress } from '@utils/tool'
import LoginModal from '@components/LoginModal'
import Swipers from '@components/Swiper'
import isLogin from '@utils/useLoginHook'
import styles from './style.module.scss';

const BaseInfo = [{
  bm: '学历',
  msg: '全日制本科'
}, {
  bm: '地址',
  msg: '广州'
}, {
  bm: '工作年限',
  msg: '5年'
}, {
  bm: '籍贯',
  msg: '广东'
}, {
  bm: '期望薪资',
  msg: '20k'
}, {
  bm: '岗位意向',
  msg: '前端开发'
}
]
const skill = ['React', 'Vue2','Vue3', 'Taro', '小程序', 'Webpack', 'Sass', 'Es6', 'Git', 'Yarn']

// 阿里云头像
const avatur = getOssAddress('7E982CAA-C4C3-4548-A5DC-B4082E770797.jpeg')
const Index: React.FC = props => {
  const [istime, setIsTime] = useState<boolean>(true)
  const [isLoginModal, setIsLoginModal] = useState<boolean>(true)
  const [isHeadImg, setIsHeadImg] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setIsTime(false)
    }, 3000)
  }, [istime])
  return (
    <View className={styles.BaseConx}>
      {isLogin() && istime && <HeadImg isHeadImg={isHeadImg}></HeadImg>}

      {
        isLogin() && <View >
          <View className={styles.text}>
            <View className={styles.avtars}>
              <Image mode='aspectFill' className={styles.Img} src={avatur} />
            </View>
            <View className={styles.sention}>
              <View className={styles.name}>
                曾君伟<Tag txt='三年前端开发经验'></Tag>
              </View>
              <View>男 / 26岁 / 全日制本科</View>
            </View>
          </View>

          <Swipers></Swipers>

          <View className={styles.box}>
            <BaseTitle txt='基本信息'></BaseTitle>
            {BaseInfo.map((idm, idx) =>
              <View className={styles.psg} key={idm.bm}>
                <View>{idm.bm}</View>
                <View>{idm.msg}</View>
              </View>
            )}
          </View>

          <View className={styles.box}>
            <BaseTitle txt='技能标签'></BaseTitle>
            <View className={styles.tg}>
              {skill.map((idm) =>
                <Tag extag key={idm} txt={idm}></Tag>
              )}
              <View className={styles.clr}></View>
            </View>
          </View>

          <View className={styles.box}>
            <BaseTitle txt='教育经历'></BaseTitle>
            <View className={styles.bk}>
              <View>2014.06-2018.06</View>
              <View>佛山科学技术学院</View>
              <View style={{ fontWeight: 'bold' }}>全日制本科</View>
            </View>
          </View>
        </View>
      }

      {/* 登录弹窗 */}
      {!isLogin() && isLoginModal && <LoginModal setLoginHide={() => { setIsLoginModal(false); setIsHeadImg(true) }}></LoginModal>}
      {isH5 && <Tabbar></Tabbar>}
    </View >
  )
}
export default Index
