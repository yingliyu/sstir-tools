import React from 'react'
import { Result } from 'antd'

export default function index(props) {
  console.log('404', props)
  return (
    <div>
      <Result status="404" title="404" subTitle="Sorry, the page you visited does not exist" />
    </div>
  )
}
