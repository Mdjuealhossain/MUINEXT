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
import { Box, ButtonBase, Container } from "@mui/material";
import Image from "next/image";

export const mainListItems = (
  <React.Fragment>
    <Box
      component="div"
      sx={{ display: "flex", padding: "16px", marginLeft: "12px" }}
    >
      <Image
        src="https://uko-react.vercel.app/static/logo/logo.svg"
        alt="Picture of the author"
        width={18}
        height={22}
      />
      <Box sx={{ paddingLeft: "8px", fontWeight: 700, fontSize: "20px" }}>
        UKO
      </Box>
    </Box>
    <Container
      sx={{
        height: "auto",
        direction: "inherit",
        position: "relative",
        display: "block",
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
          color: "rgb(140, 163, 186)",
        }}
      >
        Dashboard
      </Box>
      <Box component="div">
        <ButtonBase>
          <Box
            sx={{
              fontSize: "13px",
              paddingLeft: "0.8rem",
              fontWeight: 500,
              color: "rgb(140, 163, 186)",
            }}
          >
            LMS
          </Box>
        </ButtonBase>
      </Box>
    </Container>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
