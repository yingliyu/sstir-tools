import React from 'react'
import css from './index.module.less'
import SearchInput from '@/components/search-input'
import { Divider } from 'antd'
export default function Home() {
  return (
    <div className={css['home-wrapper']}>
      <div className={css['banner-wrapper']}>
        <h2>科研助手</h2>
      </div>
      <div className={css['home-main']}>
        <h2>开始测评</h2>
        <SearchInput />
        <div className={css['tips-wrapper']}>
          <Divider
            type="vertical"
            style={{ width: '5px', backgroundColor: '#90c0f4', marginLeft: 0 }}
          />
          <span>温馨提示：</span>
          <div className={css['tips-desc']}>
            <h4>科研选题分析助手：</h4>
            <ul>
              <li>从最新研究文献趋势看选题</li>
              <li>从基金项目趋势看选题</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
