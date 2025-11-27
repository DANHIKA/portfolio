"use client";

import React from "react";
import ReactFlow, {
  Background,
  MarkerType,
  type Edge,
  type Node,
} from "reactflow";
import "reactflow/dist/style.css";
import { AnimatedSvgEdge } from "@/components/animated-svg-edge";
import {
  BaseNode,
  BaseNodeContent,
  BaseNodeFooter,
  BaseNodeHeader,
  BaseNodeHeaderTitle,
} from "@/components/base-node";
import {
  DatabaseSchemaNode,
  DatabaseSchemaNodeBody,
  DatabaseSchemaNodeHeader,
  DatabaseSchemaTableCell,
  DatabaseSchemaTableRow,
} from "@/components/database-schema-node";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formNodeStyle: React.CSSProperties = {
  border: "2px solid hsl(var(--foreground))",
  borderRadius: 12,
  padding: 12,
  background: "hsl(var(--background))",
  color: "hsl(var(--foreground))",
  fontWeight: 600,
  minWidth: 180,
};

const dbNodeStyle: React.CSSProperties = {
  border: "2px solid hsl(var(--primary))",
  borderRadius: 0,
  padding: 0,
  background: "hsl(var(--background))",
  color: "hsl(var(--foreground))",
  fontWeight: 600,
  minWidth: 200,
  overflow: "hidden",
};

const FormNode = () => (
  <BaseNode className="min-w-[180px]">
    <BaseNodeHeader>
      <BaseNodeHeaderTitle className="text-xl font-semibold uppercase tracking-[0.2em]">
        User Login
      </BaseNodeHeaderTitle>
    </BaseNodeHeader>
    <BaseNodeContent>
      <div className="flex flex-col gap-2">
        <Label className="text-left text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Email</Label>
        <Input
          type="email"
          value="john@email.com"
          readOnly
          className="h-8 border-muted bg-muted text-xs font-mono"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label className="text-left text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Password</Label>
        <Input
          type="password"
          value="password123"
          readOnly
          className="h-8 border-muted bg-muted text-xs font-mono"
        />
      </div>
    </BaseNodeContent>
    <BaseNodeFooter className="!flex-row !items-center justify-end gap-2 pt-1">
      <Button size="sm" className="h-7 px-3 text-[12px] font-semibold">
        Sign in
      </Button>
    </BaseNodeFooter>
  </BaseNode>
);

const DbEntityNode = () => (
  <DatabaseSchemaNode>
    <DatabaseSchemaNodeHeader>users</DatabaseSchemaNodeHeader>
    <DatabaseSchemaNodeBody>
      {[
        { name: "id", type: "INT", key: true },
        { name: "name", type: "VARCHAR" },
        { name: "email", type: "VARCHAR" },
        { name: "created_at", type: "TIMESTAMP" },
      ].map((field, idx) => (
        <DatabaseSchemaTableRow key={field.name} className={idx < 3 ? "border-b" : ""}>
          <DatabaseSchemaTableCell className="w-3">
            {field.key ? <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" /> : null}
          </DatabaseSchemaTableCell>
          <DatabaseSchemaTableCell className="font-mono font-semibold">{field.name}</DatabaseSchemaTableCell>
          <DatabaseSchemaTableCell className="text-[10px] font-mono text-muted-foreground">{field.type}</DatabaseSchemaTableCell>
        </DatabaseSchemaTableRow>
      ))}
    </DatabaseSchemaNodeBody>
  </DatabaseSchemaNode>
);

export default function FullStackFlowDiagram() {
  const nodes = React.useMemo<Node[]>(
    () => [
      {
        id: "ui",
        position: { x: 20, y: 20 },
        data: { label: <FormNode /> },
        type: "input",
        style: formNodeStyle,
      },
      {
        id: "db",
        position: { x: 320, y: 20 },
        data: { label: <DbEntityNode /> },
        type: "output",
        style: dbNodeStyle,
      },
    ],
    []
  );

  const edges = React.useMemo<Edge[]>(
    () => [
      {
        id: "ui-db",
        source: "ui",
        target: "db",
        animated: true,
        label: "Persist User",
        labelStyle: {
          fontSize: 11,
          fontWeight: 600,
          fill: "hsl(var(--foreground))",
        },
        labelBgStyle: {
          fill: "hsl(var(--background))",
          fillOpacity: 0.9,
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 20,
          height: 20,
          color: "hsl(var(--foreground))",
        },
        style: { strokeWidth: 2, stroke: "hsl(var(--foreground))" },
        type: "animatedSvgEdge",
        data: {
          duration: 2,
          direction: "forward",
          repeat: "indefinite",
          shape: "package",
          path: "smoothstep",
        },
      },
    ],
    []
  );

  const edgeTypes = React.useMemo(() => ({ animatedSvgEdge: AnimatedSvgEdge }), []);

  return (
    <div
      style={{
        width: "100%",
        height: 280,
        border: "1px solid hsl(var(--border))",
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        edgeTypes={edgeTypes}
        fitView
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        proOptions={{ hideAttribution: true }}
        minZoom={1}
        maxZoom={1}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        preventScrolling={false}
      >
        <Background
          gap={16}
          size={1}
          color="hsl(var(--border))"
          style={{ opacity: 0.3 }}
        />
      </ReactFlow>
    </div>
  );
}