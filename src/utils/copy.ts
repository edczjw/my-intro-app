import Taro from '@tarojs/taro'

function copy(str: string) {
  Taro.setClipboardData({
    data: str,
    success: function (res) {
      console.log('ε€εΆζε')
    },
  })
}

export default copy