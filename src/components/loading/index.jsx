import React from 'react'
import { Spin } from 'antd'
export default function Loading(props) {
  const { tip } = props
  return <Spin tip={tip} />
}
