import React from 'react';

// 函数组件，显示传入的名字
const HelloWorld = (props) => {
  return <h2>欢迎，{props.name}！</h2>;
};

export default HelloWorld;
