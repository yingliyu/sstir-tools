import React from 'react'
import css from './index.module.less'
export default function SearchDetail() {
  // const list = []
  return (
    <div className={css['search-detail-wrapper']}>
      <h2>CARD9的巨噬细胞极化效应在慢性胰腺炎癌转化中的作用机制研究</h2>
      <div className={css['detail-items-wrapper']}>
        <ul>
          <li>
            <p>
              <span>批准号：</span>
              <span>xxx</span>
            </p>
            <p>
              <span>项目负责人：</span>
              <span>xxx</span>
            </p>
            <p>
              <span>自主金额：</span>
              <span>xxx</span>
            </p>
          </li>

          <li>
            <p>
              <span>批准年度：</span>
              <span>xxx</span>
            </p>
            <p>
              <span>负责人职称：</span>
              <span>xxx</span>
            </p>
            <p>
              <span>项目类别：</span>
              <span>xxx</span>
            </p>
          </li>

          <li>
            <p>
              <span>学科分类：</span>
              <span>xxx</span>
            </p>
            <p>
              <span>依托单位：</span>
              <span>xxx</span>
            </p>
            <p>
              <span>研究期限：</span>
              <span>2020年01月01日至2023年12月31日</span>
            </p>
          </li>
        </ul>
        <p>
          <span>中文主题词：</span>
          <span>小心心；fdfdf；奋斗奋斗</span>
        </p>
        <p>
          <span>英文主题词：</span>
          <span>aaa；fdfdf；ccc</span>
        </p>
        <div className={css['summary-wrapper']}>
          <h4>基金摘要：</h4>
          <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
        </div>
      </div>
    </div>
  )
}
