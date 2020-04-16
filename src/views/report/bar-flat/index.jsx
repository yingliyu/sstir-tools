import { Chart, Tooltip, Axis, Interval, Coord } from 'viser-react'
// import * as $ from 'jquery'
import * as React from 'react'

const data = [
  {
    type: '汽车',
    value: 34
  },
  {
    type: '建材家居',
    value: 85
  },
  {
    type: '住宿旅游',
    value: 103
  },
  {
    type: '交通运输与仓储邮政',
    value: 142
  },
  {
    type: '建筑房地产',
    value: 251
  },
  {
    type: '教育',
    value: 367
  },
  {
    type: 'IT 通讯电子',
    value: 491
  },
  {
    type: '社会公共管理',
    value: 672
  },
  {
    type: '医疗卫生',
    value: 868
  },
  {
    type: '金融保险',
    value: 1234
  }
]
const scale = [
  {
    dataKey: 'value',
    max: 1300,
    min: 0,
    nice: false,
    alias: '销量（百万）'
  }
]
const label = {
  textStyle: {
    fill: '#8d8d8d',
    fontSize: 12
  }
}
const tickLine = {
  alignWithLabel: false,
  length: 0
}

const line = {
  lineWidth: 0
}

const title = {
  offset: 30,
  textStyle: {
    fontSize: 12,
    fontWeight: 300
  }
}
const barLabel = [
  'value',
  {
    textStyle: {
      fill: '#8d8d8d'
    },
    offset: 10
  }
]

export default class App extends React.Component {
  state = {
    // sortType: 'negative'
  }
  componentDidMount() {
    this.setStyle()
    // const that = this
    // $('.sort-button').click(function () {
    //   const sortTypeOri = that.state.sortType
    //   const sortType = sortTypeOri === 'positive' ? 'negative' : 'positive'
    //   that.setState({
    //     sortType
    //   })
    // })
  }

  sortData = (sortType, data) => {
    if (sortType === 'positive') {
      data.sort(function (a, b) {
        return b.value - a.value
      })
    } else {
      data.sort(function (a, b) {
        return a.value - b.value
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
    // const bottomBox = document.createElement('div')
    // bottomBox.setAttribute('class', 'bottom-tool-box')
    // bottomBox.innerHTML = `<img class="sort-button" src="/assets/image/sortbar.png">`
    // document.getElementsByTagName('body')[0].appendChild(bottomBox)
  }

  render() {
    const sortType = this.state.sortType
    const trueData = this.sortData(sortType, data)
    return (
      <Chart forceFit data={trueData} height={400} padding={[20, 40, 50, 124]} scale={scale}>
        <Tooltip />
        <Axis dataKey="type" label={label} tickLine={tickLine} line={line} />
        <Axis dataKey="value" label={null} title={title} />
        <Coord type="rect" direction="LB" />
        <Interval position="type*value" size="26" opacity={1} label={barLabel} />
      </Chart>
    )
  }
}
