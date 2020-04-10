import React from 'react'
import { Form, Input } from 'antd'
const { Search } = Input

import css from './index.module.less'
export default function SearchInput() {
  return (
    <div className={css['search-input-wrapper']}>
      <Form.Item label="科研选题：" name="searchKey">
        <Search
          placeholder="请输入检索词，简短的检索词可以找到更多信息"
          enterButton="搜索"
          size="large"
          onSearch={(value) => console.log(value)}
        />
      </Form.Item>
    </div>
  )
}
