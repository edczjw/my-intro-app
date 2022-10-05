export default {
  pages: [
    'pages/index/index',
    'pages/Contract/index',
    'pages/WorkInfo/index',
    'pages/Project/index'
  ],
  tabBar: {
    list: [{
      'iconPath': 'assets/Icons/self.png',
      'selectedIconPath': 'assets/Icons/self1.png',
      pagePath: 'pages/index/index',
      text: '基本信息'
    },  
    {
      'iconPath': 'assets/Icons/user.png',
      'selectedIconPath': 'assets/Icons/user1.png',
      pagePath: 'pages/WorkInfo/index',
      text: '工作经历', 
    }, {
      'iconPath': 'assets/Icons/xm.png',
      'selectedIconPath': 'assets/Icons/xm1.png',
      pagePath: 'pages/Project/index',
      text: '项目经历'
    }, {
      'iconPath': 'assets/Icons/kefu.png',
      'selectedIconPath': 'assets/Icons/kefu1.png',
      pagePath: 'pages/Contract/index',
      text: '联系方式'
    }],
    'color': '#000',
    'selectedColor': '#d81e06',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  permission: {
    'scope.userLocation': {
      desc: '你的位置信息将用于小程序位置接口的效果展示'
    }
  }
}
