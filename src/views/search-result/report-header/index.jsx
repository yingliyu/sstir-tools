import React from 'react'
import { Tooltip, Space, Button } from 'antd'
import { RollbackOutlined, ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import css from './index.module.less'
export default function ReportHeader(props) {
  const { curType, queryKey, title, visualTitle, desc } = props

  return (
    <div className={css['report-header-wrapper']}>
      <h3>
        <span>
          <b>{queryKey}</b>
          {title}
        </span>
        <span className={css['icon-btn-wrapper']}>
          <Space>
            <Tooltip title="返回缩略图">
              <Button
                href={`/search/field?q=${queryKey}`}
                shape="circle"
                icon={<RollbackOutlined />}
              />
            </Tooltip>
            {curType && curType !== '1' ? (
              <Tooltip title="上一个可视化">
                <Button
                  href={`/search/field?q=${queryKey}&type=${curType - 1}`}
                  shape="circle"
                  icon={<ArrowLeftOutlined />}
                />
              </Tooltip>
            ) : (
              ''
            )}
            {curType && curType !== '4' ? (
              <Tooltip title="下一个可视化">
                <Button
                  href={`/search/field?q=${queryKey}&type=${Number(curType) + 1}`}
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
