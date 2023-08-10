import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { AppBar, Box, ButtonBase, Container } from "@mui/material";
import { theme } from "@/app/ThemingContainet/createTheme";
import Link from "next/link";
import {
  deshdata,
  mangmenrdata,
} from "../TemplateMui/Deshboard/ListItem/components/data";
import {
  MuiButtonBase,
  NavTextBox,
} from "../TemplateMui/Deshboard/ListItem/components/Box";

const SidNav = () => {
  return (
    <Box sx={{ overflowX: "hidden", maxHeight: " calc(100vh - 70px)" }}>
      <AppBar
        sx={{
          top: 60,
          left: 0,
          right: 1252,
          width: "auto",
          background: theme.palette.background.default,
        }}
      >
        <Box>
          <Box sx={{ maxHeight: "calc(100vh - 70px)" }}>
            <Box
              component="div"
              sx={{
                paddingLeft: 2,
                paddingRight: 2,
                height: "100%",
                direction: "inherit",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                component="p"
                sx={{
                  fontWeight: 700,
                  fontSize: "12px",
                  marginTop: "20px",
                  marginLeft: "15px",
                  marginBottom: "10px",
                  textTransform: "uppercase",
                  color: theme.palette.text.primary,
                }}
              >
                Dashboard
              </Box>
              {deshdata.map((data: any) => {
                return (
                  <Link href={data.url}>
                    <MuiButtonBase>
                      {data.icon}
                      <NavTextBox>{data.name}</NavTextBox>
                    </MuiButtonBase>
                  </Link>
                );
              })}

              <Box
                component="p"
                sx={{
                  fontWeight: 700,
                  fontSize: "12px",
                  marginTop: "20px",
                  marginLeft: "15px",
                  marginBottom: "10px",
                  textTransform: "uppercase",
                  color: theme.palette.text.primary,
                }}
              >
                MANAGEMENT
              </Box>
              {mangmenrdata.map((data: any) => {
                return (
                  <Link href={data.url}>
                    <MuiButtonBase>
                      {data.icon}
                      <NavTextBox>{data.name}</NavTextBox>
                    </MuiButtonBase>
                  </Link>
                );
              })}
            </Box>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
};

export default SidNav;
