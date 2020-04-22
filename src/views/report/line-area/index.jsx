import { Chart, Tooltip, Axis, Area, Point, Line } from 'viser-react'
import * as React from 'react'

// const list = [
//   { year: '1991', value: 15468 },
//   { year: '1992', value: 16100 },
//   { year: '1993', value: 15900 },
//   { year: '1994', value: 17409 },
//   { year: '1995', value: 17000 },
//   { year: '1996', value: 31056 },
//   { year: '1997', value: 31982 },
//   { year: '1998', value: 32040 },
//   { year: '1999', value: 33233 }
// ]

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
    console.log('研究走势', this.props)

    const { data } = this.props
    if (!data.length) {
      return null
    }
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
        <Tooltip crosshairs={crosshairs} shared />
        <Axis dataKey="count" />
        <Line position="key*count" size={2} color="#ed7b5a" shape="smooth" />
        <Area position="key*count" color={color} shape="smooth" />
        <Point position="key*count" size={3} style={pointStyle} shape="circle" />
      </Chart>
    )
  }
}
