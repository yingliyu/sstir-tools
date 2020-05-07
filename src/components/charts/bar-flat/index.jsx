import { Chart, Tooltip, Axis, Interval, Coord } from 'viser-react'
import * as React from 'react'
import Loading from '@/components/loading'

const scale = [
  {
    dataKey: 'count',
    min: 0,
    nice: false,
    alias: '发文数量'
  }
]
const label = {
  offset: -830,
  textStyle: {
    fill: '#8d8d8d',
    fontSize: 12,
    textAlign: 'right'
  }
}
const tickLine = {
  alignWithLabel: false,
  length: 0
}

const line = {
  lineWidth: 0
}

// const title = {
//   offset: 30,
//   textStyle: {
//     fontSize: 12,
//     fontWeight: 300
//   }
// }
const barLabel = [
  'count',
  {
    textStyle: {
      fill: '#8d8d8d'
    },
    offset: 10
  }
]

export default class App extends React.Component {
  state = {
    sortType: 'negative'
  }
  componentDidMount() {
    this.setStyle()
  }

  sortData = (sortType, data) => {
    if (sortType === 'positive') {
      data.sort(function (a, b) {
        return b.count - a.count
      })
    } else {
      data.sort(function (a, b) {
        return a.count - b.count
      })
    }
    return data
  }

  setStyle = () => {
    const id = 'legend-html'
    if (document.getElementById(id)) {
      return
    }
    const styleTxt = `
      .bottom-tool-box{
        position: absolute; 
        top:360px; 
        left: 0px; 
        width: 100%; 
        height:40px; 
        z-index:1000;
      }
      .bottom-tool-box .sort-button {
        width: auto; 
        height:40%; 
        position: absolute; 
        top:30%; 
        left:70%;
      }
    `
    const style = document.createElement('style')
    style.setAttribute('id', id)
    style.innerHTML = styleTxt
    document.getElementsByTagName('head')[0].appendChild(style)
  }

  render() {
    const { data, loading } = this.props
    // data.forEach((item, index) => {
    //   item.colorType = ((Number(index) + 1) % 2).toString()
    // })

    const sortType = this.state.sortType
    const trueData = this.sortData(sortType, data)
    // const color = [
    //   'l(180) 0:#ec6945 0.5:#f2ae99 1:#fae1da',
    //   'l(180) 0:#52b7d1 0.5:#f2ae99 1:#cae8f0'
    // ]
    // const color1 = 'l(180) 0:#ec6945 0.5:#f2ae99 1:#fae1da' // 橙色系
    // const color2 = 'l(180) 0:#52b7d1 0.5:#f2ae99 1:#cae8f0' // 蓝色系
    return (
      <Chart data={trueData} width={835} height={400} padding={[20, 300, 20, 0]} scale={scale}>
        {(() => {
          if (data.length) {
            return (
              <div>
                <Tooltip />
                <Axis dataKey="key" label={label} tickLine={tickLine} line={line} />
                <Axis dataKey="count" label={null} title={null} />
                <Coord type="rect" direction="LB" />
                <Interval
                  position="key*count"
                  size="22"
                  opacity={1}
                  label={barLabel}
                  color="l(180) 0:#2181ea 1:#90c0f4"
                />
              </div>
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
