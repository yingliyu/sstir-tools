import { Chart, Tooltip, Axis, Bar, Line, Point } from 'viser-react'
import * as React from 'react'

const data = [
  { time: '10:10', call: 4, waiting: 2, people: 2 },
  { time: '10:15', call: 2, waiting: 6, people: 3 },
  { time: '10:20', call: 13, waiting: 2, people: 5 },
  { time: '10:25', call: 9, waiting: 9, people: 1 },
  { time: '10:30', call: 5, waiting: 2, people: 3 },
  { time: '10:35', call: 8, waiting: 2, people: 1 },
  { time: '10:40', call: 13, waiting: 1, people: 2 }
]

const scale = [
  {
    dataKey: 'call',
    min: 0
  },
  {
    dataKey: 'people',
    min: 0
  },
  {
    dataKey: 'waiting',
    min: 0
  }
]

export default class App extends React.Component {
  render() {
    return (
      <Chart width={835} height={400} data={data} scale={scale} renderer="svg">
        <Tooltip />
        {/* <Legend
          custom
          allowAllCanceled
          items={[
            { value: 'waiting', marker: { symbol: 'square', fill: '#1890ff', radius: 5 } },
            {
              value: 'people',
              marker: { symbol: 'hyphen', stroke: '#fdae6b', radius: 5, lineWidth: 3 }
            }
          ]}
          onClick={(ev, chart) => {
            const item = ev.item
            const value = item.value
            const checked = ev.checked
            const geoms = chart.getAllGeoms()
            for (let i = 0; i < geoms.length; i++) {
              const geom = geoms[i]
              if (geom.getYScale().field === value) {
                if (checked) {
                  geom.show()
                } else {
                  geom.hide()
                }
              }
            }
          }}
        /> */}
        <Axis
          dataKey="people"
          grid={null}
          label={{
            textStyle: {
              fill: '#fdae6b'
            }
          }}
        />

        <Bar position="time*waiting" color="#bf1a1a" />
        <Line position="time*people" color="#555" size={1} />
        <Point shape="circle" position="time*people" color="#555" size={2} />
      </Chart>
    )
  }
}
