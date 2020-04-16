import React from 'react'
import { List, Pagination } from 'antd'
import css from './index.module.less'
import { CaretUpFilled, CaretDownFilled } from '@ant-design/icons'

const data = [
  {
    title: 'Ant Design Title 1'
  },
  {
    title: 'Ant Design Title 2'
  },
  {
    title: 'Ant Design Title 3'
  },
  {
    title: 'Ant Design Title 4'
  }
]
export default function FoundProjects() {
  return (
    <div className={css['founb-projects-wrapper']}>
      <List
        itemLayout="horizontal"
        dataSource={data}
        header={
          <div className={css['list-header-wrapper']}>
            <p>
              <span>排序：</span>
              <span className={css['sort-wrapper']}>
                <span>批准年份 </span>
                <i>
                  <CaretUpFilled style={{ fontSize: '16px', color: '#08c' }} />
                  <CaretDownFilled style={{ position: 'relative', top: '-5px' }} />
                </i>
              </span>
              <span className={css['sort-wrapper']}>
                <span>金额 </span>
                <i>
                  <CaretUpFilled style={{ fontSize: '16px', color: '#08c' }} />
                  <CaretDownFilled style={{ position: 'relative', top: '-5px' }} />
                </i>
              </span>
            </p>
            <div className={css['page-wrapper']}>
              <span>找到130条结果，为您展示前100条</span>
              <Pagination simple defaultCurrent={2} total={50} />
            </div>
          </div>
        }
        footer={<Pagination simple defaultCurrent={2} total={50} />}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={<a href="https://ant.design">{item.title}</a>}
              description={
                <div className={css['list-item-desc']}>
                  <div>
                    <span>负责人：钟晓明</span>
                    <span>申请单位：xxx</span>
                    <span>研究类型：xxx</span>
                    <span>项目批准号：xxx</span>
                  </div>
                  <div>
                    <span>批准年度：212</span>
                    <span>金额：1212万</span>
                    <span>关键词：xxxxxxx</span>
                  </div>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </div>
  )
}
