import React from 'react'
import { Tooltip, Space, Button } from 'antd'
import { RollbackOutlined, ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import css from './index.module.less'
export default function ReportHeader(props) {
  const {
    currentReport,
    fieldKey,
    title,
    visualTitle,
    desc,
    backClick,
    prevClick,
    nextClick
  } = props

  return (
    <div className={css['report-header-wrapper']}>
      <h3>
        <span>
          <b>{fieldKey} </b>
          {title}
        </span>
        <span className={css['icon-btn-wrapper']}>
          <Space>
            <Tooltip title="返回缩略图">
              <Button
                onClick={backClick}
                // href={`/search/field?q=${fieldKey}`}
                shape="circle"
                icon={<RollbackOutlined />}
              />
            </Tooltip>
            {currentReport && currentReport !== 1 ? (
              <Tooltip title="上一个可视化">
                <Button
                  onClick={prevClick}
                  // href={`/search/field?q=${fieldKey}&type=${currentReport - 1}`}
                  shape="circle"
                  icon={<ArrowLeftOutlined />}
                />
              </Tooltip>
            ) : (
              ''
            )}
            {currentReport && currentReport !== 4 ? (
              <Tooltip title="下一个可视化">
                <Button
                  onClick={nextClick}
                  // href={`/search/field?q=${fieldKey}&type=${Number(currentReport) + 1}`}
                  shape="circle"
                  icon={<ArrowRightOutlined />}
                />
              </Tooltip>
            ) : (
              ''
            )}
          </Space>
        </span>
      </h3>
      <p className={css['report-header-deac']}>{desc ? desc : ''}</p>
      <h4 className={css['report-title']}>{visualTitle}</h4>
    </div>
  )
}
