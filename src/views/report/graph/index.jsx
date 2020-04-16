import React, { useEffect } from 'react'
import G6 from '@antv/g6'

export default function Graph() {
  useEffect(() => {
    initGraph()
  }, [])
  const initGraph = () => {
    const width = 800
    const height = 500
    const graph = new G6.Graph({
      container: 'container',
      width,
      height,
      renderer: 'svg',
      // groupType: 'circle',
      groupByTypes: false,
      layout: {
        type: 'force',
        preventOverlap: true,
        linkDistance: (d) => {
          if (d.source.id === 'node0') {
            return 80
          }
          return 60
        },
        nodeSize: (d) => {
          console.log(d)
          return d.size - 10
        },
        nodeStrength: (d) => {
          if ((Number(d.index) + 1) % 2) {
            return -40
          } else {
            return -30
          }
        },
        edgeStrength: (d) => {
          return d.target.size / 100
        }
        // collideStrength: (d) => {
        //   return Math.random()
        // }
      },
      defaultNode: {
        color: '#5B8FF9',
        style: {
          lineWidth: 2,
          fill: '#C6E5FF'
        }
      },
      defaultEdge: {
        size: 1,
        color: '#e2e2e2'
      }
    })

    const data = {
      nodes: [
        { id: 'node0', size: 100 },
        { id: 'node1', size: 65 },
        { id: 'node2', size: 80 },
        { id: 'node3', size: 60 },
        { id: 'node4', size: 70, isLeaf: true },
        { id: 'node5', size: 80, isLeaf: true },
        { id: 'node6', size: 65, isLeaf: true },
        { id: 'node7', size: 60, isLeaf: true },
        { id: 'node8', size: 55, isLeaf: true },
        { id: 'node9', size: 70, isLeaf: true },
        { id: 'node10', size: 85, isLeaf: true },
        { id: 'node11', size: 80, isLeaf: true },
        { id: 'node12', size: 65, isLeaf: true },
        { id: 'node13', size: 65, isLeaf: true },
        { id: 'node14', size: 60, isLeaf: true },
        { id: 'node15', size: 55, isLeaf: true },
        { id: 'node16', size: 55, isLeaf: true }
      ],
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
        { source: 'node0', target: 'node10' },
        { source: 'node0', target: 'node11' },
        { source: 'node0', target: 'node12' },
        { source: 'node0', target: 'node13' },
        { source: 'node0', target: 'node14' },
        { source: 'node0', target: 'node15' },
        { source: 'node0', target: 'node16' }
      ]
    }
    const nodes = data.nodes
    graph.data({
      nodes,
      edges: data.edges.map(function (edge, i) {
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
