import React from 'react'
import css from './index.module.less'
import SearchInput from '@/components/search-input'
export default function Home() {
  return (
    <div className={css['home-wrapper']}>
      <div className={css['banner-wrapper']}>
        <h2>科研助手</h2>
      </div>
      <div className={css['home-main']}>
        <h2>开始测评</h2>
        <SearchInput />
      </div>
    </div>
  )
}
