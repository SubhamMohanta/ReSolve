"use client";
/*
 * Documentation:
 * Pie Chart — https://app.subframe.com/e59d7c686ab0/library?component=Pie+Chart_0654ccc7-054c-4f3a-8e9a-b7c81dd3963c
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface PieChartRootProps
  extends React.ComponentProps<typeof SubframeCore.PieChart> {
  className?: string;
}

const PieChartRoot = React.forwardRef<HTMLElement, PieChartRootProps>(
  function PieChartRoot({ className, ...otherProps }: PieChartRootProps, ref) {
    return (
      <SubframeCore.PieChart
        className={SubframeCore.twClassNames("h-52 w-52", className)}
        ref={ref as any}
        colors={[
          "#22c55e",
          "#bbf7d0",
          "#16a34a",
          "#86efac",
          "#15803d",
          "#4ade80",
        ]}
        {...otherProps}
      />
    );
  }
);

export const PieChart = PieChartRoot;
