import { Chart, Tooltip, Axis, Bar, Line, Point } from 'viser-react'
import * as React from 'react'

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
    const { data } = this.props
    return (
      <Chart
        width={835}
        height={400}
        data={data}
        scale={scale}
        renderer="svg"
        padding={[20, 60, 40, 60]}
      >
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
      </Chart>
    )
  }
}
