import React from 'react';

// 函数组件：显示产品列表
const List = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.name}>{item.name}</li>
      ))}
    </ul>
  );
};

export default List;
