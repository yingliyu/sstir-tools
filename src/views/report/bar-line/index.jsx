import { Chart, Tooltip, Axis, Bar, Line, Point } from 'viser-react'
import * as React from 'react'
import Loading from '@/components/loading'
const scale = [
  {
    dataKey: 'project_money',
    alias: '项目名称',
    min: 0
  },
  {
    dataKey: 'count',
    alias: '项目获批数量',
    min: 0
  }
]

export default class App extends React.Component {
  render() {
    const { data, loading } = this.props
    return (
      <Chart width={835} height={400} data={data} scale={scale} padding={[20, 60, 40, 60]}>
        {(() => {
          if (data.length) {
            return (
              <>
                <Tooltip />
                <Axis
                  dataKey="project_money"
                  grid={null}
                  label={{
                    textStyle: {
                      fill: '#fdae6b'
                    }
                  }}
                />

                <Bar position="key*count" color="l(90) 0:#2181ea 0.5:#2181ea 1:#90c0f4" />
                <Line position="key*project_money" color="#e66919" size={1} />
                <Point shape="circle" position="key*project_money" color="#e66919" size={2} />
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
