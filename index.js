import React from 'react';
import ReactDOM from 'react-dom';
import Home from './src/Home';

function App() {
  return (
    <Home />
  );
}
var div = document.createElement("div");
div.className='Hive-body'
document.body.appendChild(div)
ReactDOM.render(<App />, div);

console.warn("本蜂巢站点使用Ant Design&React UI构建\n项目地址:https://github.com/iyuli/HiveBot_-React-website")
console.groupEnd()
console.group("构建信息")
console.log("最近构建时间：2023年1月7日")
console.warn("2023年1月8日：增加多语言设置\n增加下载功能，下载所有按钮已可以交互\n1.增加右下角返回顶部按钮 2.顶部导航固定增加动态样式\n修复移动端整体体验")
console.groupEnd()