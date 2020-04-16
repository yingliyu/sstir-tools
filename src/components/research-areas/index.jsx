import React from 'react'
import { Space, Button } from 'antd'
import css from './index.module.less'

export default function ResearchArea() {
  return (
    <div className={css['field-wrapper']}>
      <span className={css['field-label']}>研究领域：</span>
      <Space>
        <Button className={css['active-field']} shape="round">
          人工智能
        </Button>
        <Button shape="round">数据挖掘</Button>
        <Button shape="round">聚类</Button>
      </Space>
    </div>
  )
}
