import React from 'react'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'

import css from './index.module.less'
export default function ReportThumb(props) {
  const queryKey = props.queryKey
  console.log(props)
  const visualList = [
    {
      name: '论文-研究走势'
    },
    {
      name: '论文-高发作者'
    },
    {
      name: '论文-高发文机构'
    },
    {
      name: '科研获批趋势'
    }
  ]
  console.log(visualList)

  return (
    <div className={css['report-thumb-wrapper']}>
      <Row gutter={16}>
        <Col className={css['gutter-row']} span={12}>
          <Link to={`/search/field?q=${queryKey}&type=1`}>
            <div className={css['report-item']}>论文-研究走势</div>
          </Link>
        </Col>

        <Col span={12} className={css['gutter-row']}>
          <Link to={`/search/field?q=${queryKey}&type=2`}>
            <div className={css['report-item']}>论文-高发作者</div>
          </Link>
        </Col>
      </Row>
      <br />
      <Row gutter={16}>
        <Col className={css['gutter-row']} span={12}>
          <Link to={`/search/field?q=${queryKey}&type=3`}>
            <div className={css['report-item']}>论文-高发文机构</div>
          </Link>
        </Col>
        <Col span={12} className={css['gutter-row']}>
          <Link to={`/search/field?q=${queryKey}&type=4`}>
            <div className={css['report-item']}>科研获批趋势</div>
          </Link>
        </Col>
      </Row>
    </div>
  )
}
