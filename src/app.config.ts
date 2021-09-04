export default {
  pages: [
    'pages/index/index',
    'pages/Contract/index',
    'pages/WorkInfo/index',
    'pages/Project/index'
  ],
  tabBar: {
    list: [{
      'iconPath': 'assets/Icons/base.png',
      'selectedIconPath': 'assets/Icons/baseActive.png',
      pagePath: 'pages/index/index',
      text: '基本信息'
    }, 
    // {
    //   'iconPath': 'assets/Icons/base.png',
    //   'selectedIconPath': 'assets/Icons/baseActive.png',
    //   pagePath: 'pages/index/index',
    //   text: '技能强度'
    // }, 
    {
      'iconPath': 'assets/Icons/wp.png',
      'selectedIconPath': 'assets/Icons/wp1.png',
      pagePath: 'pages/WorkInfo/index',
      text: '工作经历'
    }, {
      'iconPath': 'assets/Icons/pg.png',
      'selectedIconPath': 'assets/Icons/pg1.png',
      pagePath: 'pages/Project/index',
      text: '项目经历'
    }, {
      'iconPath': 'assets/Icons/ct.png',
      'selectedIconPath': 'assets/Icons/ct1.png',
      pagePath: 'pages/Contract/index',
      text: '联系方式'
    }],
    'color': '#000',
    'selectedColor': '#17abe3',
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
