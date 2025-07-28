import React, { Component } from 'react';
import List from './List'; // 引入列表组件
import Dropdown from 'react-bootstrap/Dropdown'; // 引入 Bootstrap 下拉组件

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",   // 搜索关键词
      filter: "All" // 筛选类型
    };
  }

  // 更新搜索关键字
  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  }

  // 更新筛选类型
  handleFilterChange = (type) => {
    this.setState({ filter: type });
  }

  // 过滤函数：匹配搜索和筛选条件
  filterItems = () => {
    return this.props.items.filter(item => {
      const matchSearch = item.name.toLowerCase().includes(this.state.search.toLowerCase());
      const matchFilter = this.state.filter === "All" || item.type === this.state.filter;
      return matchSearch && matchFilter;
    });
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="搜索产品..." onChange={this.handleSearch} />
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            筛选：{this.state.filter}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => this.handleFilterChange("All")}>全部</Dropdown.Item>
            <Dropdown.Item onClick={() => this.handleFilterChange("Fruit")}>水果</Dropdown.Item>
            <Dropdown.Item onClick={() => this.handleFilterChange("Vegetable")}>蔬菜</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <List items={this.filterItems()} />
      </div>
    );
  }
}

export default FilteredList;
