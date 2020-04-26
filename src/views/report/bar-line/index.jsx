import { Chart, Tooltip, Axis, Bar, Line, Point } from 'viser-react'
import * as React from 'react'
import Loading from '@/components/loading'
const scale = [
  {
    dataKey: 'project_money',
    min: 0
  },
  {
    dataKey: 'count',
    min: 0
  }
]

export default class App extends React.Component {
  render() {
    const { data, loading } = this.props
    return (
      <Chart
        width={835}
        height={400}
        data={data}
        scale={scale}
        renderer="svg"
        padding={[20, 60, 40, 60]}
      >
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

                <Bar position="key*count" color="#bf1a1a" />
                <Line position="key*project_money" color="#555" size={1} />
                <Point shape="circle" position="key*project_money" color="#555" size={2} />
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
