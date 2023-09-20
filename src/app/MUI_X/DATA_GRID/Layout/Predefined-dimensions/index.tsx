import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { Card, CardContent, CardHeader } from "@mui/material";

export default function FixedSizeGrid() {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 22,
    maxColumns: 10,
  });

  return (
    <Card>
      <CardHeader title="Data Grid Layout Percentage dimensions"></CardHeader>
      <CardContent>
        <div style={{ width: "100%" }}>
          <div style={{ height: 350, width: "100%" }}>
            <DataGrid {...data} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
