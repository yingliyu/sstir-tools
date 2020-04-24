import React, { useEffect } from 'react'
import G6 from '@antv/g6'

export default function Graph(props) {
  const { data, fieldKey } = props
  useEffect(() => {
    if (data && data.length) {
      initGraph()
    }
  }, [])
  const initGraph = () => {
    const width = 800
    const height = 500
    const graph = new G6.Graph({
      container: 'container',
      width,
      height,
      renderer: 'svg',
      groupByTypes: false,
      layout: {
        type: 'force',
        preventOverlap: true,
        linkDistance: (d) => {
          if (d.source.id === 'node0') {
            return 50
          }
          return 30
        },
        nodeSize: (d) => {
          return d.size + 10
        },
        nodeStrength: (d) => {
          if ((Number(d.index) + 1) % 2) {
            return -60
          } else {
            return -30
          }
        },
        edgeStrength: (d) => {
          return d.target.size / 110
        }
        // collideStrength: (d) => {
        //   return 0.8
        // },
        // alphaDecay: (d) => {
        //   return 0.01
        // }
      },
      defaultNode: {
        color: '#5B8FF9',
        style: {
          lineWidth: 2,
          fill: '#C6E5FF'
        }
      },
      labelCfg: {
        style: {
          fill: '#ffffff',
          fontSize: 18
        }
      },
      defaultEdge: {
        size: 1,
        color: '#e2e2e2'
      }
    })

    data.forEach((item, index) => {
      item.label = item.key + '\n' + item.count
      item.size = item.count
      item.id = `node${index + 1}`
    })
    data.push({
      id: 'node0',
      size: 100,
      label: fieldKey
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
    graph.data({
      nodes,
      edges: dataMap.edges.map(function (edge, i) {
        edge.id = 'edge' + i
        return { ...edge }
      })
    })
    graph.render()

    graph.on('node:dragstart', function (e) {
      graph.layout()
      refreshDragedNodePosition(e)
    })
    graph.on('node:drag', function (e) {
      refreshDragedNodePosition(e)
    })
    graph.on('node:dragend', function (e) {
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
      <div id="container" />
    </div>
  )
}
