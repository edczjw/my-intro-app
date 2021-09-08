yarn add redux react-redux redux-thunk redux-logger
创建 src/store/index.js
在项目入口文件 app.js 中使用 redux 中提供的 Provider 组件将前面写好的 store 接入应用中
<Provider store={store}>
{this.props.children}
</Provider>

constants 目录，用来放置所有的 action type 常量
actions 目录，用来放置所有的 actions
reducers 目录，用来放置所有的 reducers