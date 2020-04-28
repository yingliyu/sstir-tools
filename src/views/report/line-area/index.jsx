import { Chart, Tooltip, Axis, Area, Point, Line } from 'viser-react'
import * as React from 'react'
import Loading from '@/components/loading'
const scale = [
  {
    dataKey: 'count',
    alias: '发文数量'
    // type: 'timeCat'
  }
]

export default class App extends React.Component {
  render() {
    const { data, loading } = this.props

    const pointStyle = {
      stroke: '#2181ea',
      fill: '#fff',
      lineWidth: 1,
      fillOpacity: 1
    }
    const color = 'l(90) 0:#2181ea 0.5:#2181ea 1:#bfd1e7'
    return (
      <Chart
        width={835}
        height={400}
        title="历年发文量"
        data={data}
        scale={scale}
        padding={[20, 40, 30, 40]}
        renderer="svg"
      >
        {(() => {
          if (data.length) {
            return (
              <>
                <Tooltip shared={false} />
                <Axis dataKey="count" />
                <Line position="key*count" size={2} color="#2181ea" shape="smooth" />
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
