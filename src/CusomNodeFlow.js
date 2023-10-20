import React, { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';

import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', style: {width: 56}, position: { x: 50, y: 100 }, data: { label: '1' },  sourcePosition: 'right', targetPosition: 'left',},
  { id: '2', style: {width: 56}, position: { x: 150, y: 100 }, data: { label: '2' },  sourcePosition: 'right', targetPosition: 'left', },
  { id: '3', style: {width: 56}, position: { x: 250, y: 50 }, data: { label: '3' },  sourcePosition: 'right', targetPosition: 'left', },
  { id: '4', style: {width: 56}, position: { x: 250, y: 150 }, data: { label: '4' },  sourcePosition: 'right', targetPosition: 'left', },
  { id: '5', style: {width: 56}, position: { x: 350, y: 150 }, data: { label: '5' },  sourcePosition: 'right', targetPosition: 'left', },
  { id: '6', style: {width: 56}, position: { x: 450, y: 100 }, data: { label: '6' },  sourcePosition: 'right', targetPosition: 'left', },
  { id: '7', style: {width: 56}, position: { x: 450, y: 200 }, data: { label: '7' },  sourcePosition: 'right', targetPosition: 'left', },
];
const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e4-5', source: '4', target: '5' },
  { id: 'e4-5', source: '5', target: '6' },
  { id: 'e4-5', source: '5', target: '7' },
];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}