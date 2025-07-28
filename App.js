import React, { Component } from "react";
import HelloWorld from "./HelloWorld"; // 引入问候组件
import Counter from "./Counter";       // 引入计数器组件
import FilteredList from "./FilteredList"; // 引入筛选列表组件
import "./App.css"; // 样式文件

// 传入的产品数据，每个产品有名称和类型
const produce = [
  { name: "Apple", type: "Fruit" },
  { name: "Carrot", type: "Vegetable" },
  { name: "Banana", type: "Fruit" },
  { name: "Spinach", type: "Vegetable" },
  { name: "Peach", type: "Fruit" },
  { name: "Broccoli", type: "Vegetable" },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React 第五次课作业 - 2025夏季</h1>
        <HelloWorld name="Shiwu Yang" /> {/* 问候组件，传入姓名 */}
        <Counter /> {/* 计数器 */}
        <FilteredList items={produce} /> {/* 产品筛选组件 */}
      </div>
    );
  }
}

export default App;
