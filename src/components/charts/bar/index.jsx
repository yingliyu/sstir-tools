import { Chart, Tooltip, Axis, Bar } from 'viser-react'
import * as React from 'react'
import Loading from '@/components/loading'

export default class App extends React.Component {
  render() {
    const { data, loading, name } = this.props
    const scale = [
      {
        dataKey: 'count',
        alias: name,
        min: 0
      }
    ]
    return (
      <Chart width={835} height={400} data={data} scale={scale} padding={[20, 60, 40, 60]}>
        {(() => {
          if (data.length) {
            return (
              <>
                <Tooltip />
                <Axis
                  dataKey="count"
                  grid={null}
                  label={{
                    textStyle: {
                      // fill: '#2181ea'
                    }
                  }}
                />

                <Bar position="key*count" color="l(90) 0:#2181ea 0.5:#2181ea 1:#90c0f4" />
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
