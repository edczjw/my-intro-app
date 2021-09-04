import Taro from '@tarojs/taro'

function copy(str: string) {
  Taro.setClipboardData({
    data: str,
    success: function (res) {
      console.log('复制成功')
    },
  })
}

export default copy