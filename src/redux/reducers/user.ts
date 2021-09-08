import { SET_IS_LOGIN,SET_LOGIN_INFO } from '../constants'

// 初始状态
const INITIAL_STATE = {
    avatar: '', // 头像
    nickName: '', // 微信昵称
    isLogin: false, // 初始登录状态
}

export default function user (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_IS_LOGIN:
      const isLogin = action.payload
      return {
        ...state,
        isLogin
      };
    case SET_LOGIN_INFO: 
      const { avatar, nickName } = action.payload
      return {
        ...state,
        avatar,
        nickName
      }
    default:
      return state
  }
}