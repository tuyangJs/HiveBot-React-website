import React from 'react';
import ReactDOM from 'react-dom';
import Home from './src/Home';

function App() {
  return (
    <Home />
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
console.warn("本蜂巢站点使用Ant Design&React UI构建\n项目地址:https://github.com/iyuli/HiveBot_-React-website")
console.groupEnd()
console.group("构建信息")
console.log("最近构建时间：2023年1月7日")
console.warn("修复移动端整体体验")
console.groupEnd()