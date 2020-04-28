import React, { useEffect, useRef } from 'react'
import G6 from '@antv/g6'
import Loading from '@/components/loading'
export default function Graph(props) {
  const { data, loading } = props
  console.log(data)

  const graph = useRef()

  useEffect(() => {
    if (data && data.length) {
      initGraph()
    }
  }, [data])

  const initGraph = () => {
    const width = 800
    const height = 500
    graph.current = new G6.Graph({
      container: 'container',
      width,
      height,
      // renderer: 'svg',
      groupByTypes: false,
      layout: {
        type: 'force',
        preventOverlap: true,
        center: [430, 250],
        linkDistance: (d) => {
          if (d.source.id === 'node0') {
            return 80
          }
          return d.size > 80 ? 80 : d.size - 10
        },
        // 用于碰撞检测
        nodeSize: (d) => {
          return d.size > 80 ? 80 : d.size - 10
        },
        // 节点作用力，正数引力，负数斥力
        nodeStrength: (d) => {
          if (d.isLeaf) {
            return -100
          } else {
            return -80
          }
        },
        edgeStrength: (d) => {
          if (d.source.id === 'node0') {
            return 0.7
          }
          return 0.5
        }
      },
      defaultNode: {
        color: '#5B8FF9',
        style: {
          lineWidth: 2,
          fill: '#C6E5FF'
        },
        labelCfg: {
          style: {
            fill: '#333'
          }
        }
      },

      defaultEdge: {
        size: 1,
        color: '#e2e2e2'
      }
    })

    const dataMap = {
      nodes: data,
      edges: [
        { source: 'node0', target: 'node1' },
        { source: 'node0', target: 'node2' },
        { source: 'node0', target: 'node3' },
        { source: 'node0', target: 'node4' },
        { source: 'node0', target: 'node5' },
        { source: 'node0', target: 'node6' },
        { source: 'node0', target: 'node7' },
        { source: 'node0', target: 'node8' },
        { source: 'node0', target: 'node9' },
        { source: 'node0', target: 'node10' }
      ]
    }

    const nodes = dataMap.nodes

    nodes.forEach((node) => {
      if (!node.style) {
        node.style = {}
      }

      if (node.id === 'node0') {
        node.style.fill = '#2181ea'
      }
    })
    graph.current.data({
      nodes,
      edges: dataMap.edges.map(function (edge, i) {
        edge.id = 'edge' + i
        return { ...edge }
      })
    })
    graph.current.render()

    graph.current.on('node:dragstart', function (e) {
      graph.current.layout()
      refreshDragedNodePosition(e)
    })
    graph.current.on('node:drag', function (e) {
      refreshDragedNodePosition(e)
    })
    graph.current.on('node:dragend', function (e) {
      e.item.get('model').fx = null
      e.item.get('model').fy = null
    })

    function refreshDragedNodePosition(e) {
      const model = e.item.get('model')
      model.fx = e.x
      model.fy = e.y
    }
  }

  return (
    <div>
      <div id="container">
        {(() => {
          if (!data.length) {
            if (loading) {
              return (
                <div style={{ textAlign: 'center', paddingTop: '30px' }}>
                  <Loading tip="加载中..." />
                </div>
              )
            } else {
              return <div style={{ textAlign: 'center', paddingTop: '30px' }}>暂无数据</div>
            }
          }
        })()}
      </div>
    </div>
  )
}
