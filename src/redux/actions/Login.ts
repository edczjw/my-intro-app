import { SET_IS_LOGIN,SET_LOGIN_INFO } from '../constants'


// 设置登录状态
export const setLogin = () => {
  return {
    type: SET_IS_LOGIN
  }
} 

// 设置登录信息
export const setUserInfo = ()=>{
  return {
    type: SET_LOGIN_INFO
  }
}

// 异步的 action
export function asyncSetLogin() {
  return dispatch => {
    // setTimeout(() => {
    //   dispatch(setLogin())
    // }, 2000)
  }
}
