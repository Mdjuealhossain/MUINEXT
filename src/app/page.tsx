"use client";
import "./globals.css";

import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { theme } from "./ThemingContainet/createTheme";
import Bars from "./MuiX-Chart/Bars";
import BasicBars from "./MuiX-Chart/Bars";
import BarsDataset from "./MuiX-Chart/BarsDataset";
// import GridCom from "./MuiStuleComponents/GridCompon";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <BasicBars></BasicBars>
      <BarsDataset></BarsDataset>

      {/* <Paper
        sx={{
          background: theme.palette.background.default,
          marginRight: 5,
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          padding: 3,
        }}
      >
        <Box>
          <Typography>
            ufiygkgb Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quis non nihil placeat nostrum aperiam illo sapiente reprehenderit
            impedit. Neque ratione itaque voluptates molestiae culpa consequatur
            laborum vero officiis recusandae enim.
          </Typography>
          <Typography>
            ufiygkgb Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quis non nihil placeat nostrum aperiam illo sapiente reprehenderit
            impedit. Neque ratione itaque voluptates molestiae culpa consequatur
            laborum vero officiis recusandae enim.
          </Typography>
          <Typography>
            ufiygkgb Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quis non nihil placeat nostrum aperiam illo sapiente reprehenderit
            impedit. Neque ratione itaque voluptates molestiae culpa consequatur
            laborum vero officiis recusandae enim.
          </Typography>
          <Typography>
            ufiygkgb Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quis non nihil placeat nostrum aperiam illo sapiente reprehenderit
            impedit. Neque ratione itaque voluptates molestiae culpa consequatur
            laborum vero officiis recusandae enim.
          </Typography>
          <Typography>
            ufiygkgb Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quis non nihil placeat nostrum aperiam illo sapiente reprehenderit
            impedit. Neque ratione itaque voluptates molestiae culpa consequatur
            laborum vero officiis recusandae enim.
          </Typography>
          <Typography>
            ufiygkgb Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quis non nihil placeat nostrum aperiam illo sapiente reprehenderit
            impedit. Neque ratione itaque voluptates molestiae culpa consequatur
            laborum vero officiis recusandae enim.
          </Typography>
        </Box>
        <Typography>ASDXASDCXAS</Typography>
        <Box>
          <Image
            src="https://uko-react.vercel.app/static/illustration/sales-earning.svg"
            alt="uko"
            height={163}
            width={220}
          ></Image>
        </Box>
      </Paper>
      <Container sx={{ bgcolor: theme.palette.background.default }}>
        <Typography variant="h1">yasgdhb</Typography>
      </Container> */}
    </Box>
  );
}
