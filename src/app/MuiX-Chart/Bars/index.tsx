import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Card, CardHeader } from "@mui/material";
import { CardContent } from "@mui/material";

export default function BasicBars() {
  return (
    <Card>
      <CardHeader
        title="Product Calculation"
        subheader="August 11, 2023"
      ></CardHeader>
      <CardContent
        sx={{ paddingTop: 0, marginTop: 0, paddingBottom: 0, marginBottom: 0 }}
      >
        <BarChart
          xAxis={[
            { scaleType: "band", data: ["group A", "group B", "group C"] },
          ]}
          series={[
            { data: [4, 3, 5] },
            { data: [1, 6, 3] },
            { data: [2, 5, 6] },
          ]}
          width={400}
          height={300}
        />
      </CardContent>
    </Card>
  );
}
