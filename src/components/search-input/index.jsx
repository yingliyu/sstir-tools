import React from 'react'
import { Form, Input } from 'antd'
const { Search } = Input
import css from './index.module.less'
// import { searchApi } from '@/services'
function searchHandle() {
  // window.location.href = ''
}
export default function SearchInput() {
  // const [data, setData] = userState([])
  // const [searchKey, searchHandle] = userState('')
  // useEffect(() => {
  // const featchList = async (query = '') => {
  //   // eslint-disable-next-line no-useless-catch
  //   try {
  //     const data = await searchApi.featchList(query)
  //     console.log(data)
  //     // data && setData(data)
  //   } catch (err) {
  //     throw err
  //   }
  // }
  // featchList(searchKey) // 我们把 query 当做参数传进去，把data和query 联动起来这样就可以达到搜索的功能啦。
  // }, [searchKey])
  return (
    <div className={css['search-input-wrapper']}>
      <Form name="search">
        <Form.Item label="科研选题：" name="searchKey">
          <Search
            placeholder="请输入检索词，简短的检索词可以找到更多信息"
            enterButton="搜索"
            size="large"
            onSearch={(value) => searchHandle(value)}
          />
          <small>提示：未检索到相关内容，请修改检索内容再试</small>
        </Form.Item>
      </Form>
    </div>
  )
}
