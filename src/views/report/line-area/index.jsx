import { Chart, Tooltip, Axis, Area, Point, Line } from 'viser-react'
import * as React from 'react'
import Loading from '@/components/loading'
const scale = [
  {
    dataKey: 'count'
    // min: 10000
  },
  {
    dataKey: 'key',
    range: [0, 1],
    type: 'timeCat'
  }
]

export default class App extends React.Component {
  render() {
    const { data, loading } = this.props

    const crosshairs = {
      type: 'y',
      style: {}
    }
    const pointStyle = {
      stroke: '#ed7b5a',
      fill: '#fff',
      lineWidth: 1,
      fillOpacity: 1
    }
    const color = 'l(90) 0:#eb623d 0.5:#f09a7f 1:#fae1da'
    return (
      <Chart width={835} height={400} title="历年发文量" data={data} scale={scale} renderer="svg">
        {(() => {
          if (data.length) {
            return (
              <>
                <Tooltip crosshairs={crosshairs} shared />
                <Axis dataKey="count" />
                <Line position="key*count" size={2} color="#ed7b5a" shape="smooth" />
                <Area position="key*count" color={color} shape="smooth" />
                <Point position="key*count" size={3} style={pointStyle} shape="circle" />
              </>
            )
          } else if (loading) {
            return (
              <div style={{ textAlign: 'center', paddingTop: '30px' }}>
                <Loading tip="加载中..." />
              </div>
            )
          } else {
            return <div style={{ textAlign: 'center', paddingTop: '30px' }}>暂无数据</div>
          }
        })()}
      </Chart>
    )
  }
}
