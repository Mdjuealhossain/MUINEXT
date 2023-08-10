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
import Image from "next/image";
import { theme } from "@/app/ThemingContainet/createTheme";
import { MuiButtonBase, NavTextBox } from "./components/Box";
import Link from "next/link";
import { deshdata } from "./components/data";

export const mainListItems = (
  <AppBar
    position="fixed"
    sx={{
      left: 0,
      right: 1265,
      width: "auto",
      background: theme.palette.background.default,
    }}
  >
    <Box
      component="div"
      sx={{
        display: "flex",
        padding: "16px",
        marginLeft: "12px",
      }}
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

    <Box
      component="div"
      sx={{
        paddingLeft: "16px",
        paddingRight: "16px",
        height: "100%",

        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        component="p"
        sx={{
          fontWeight: 700,
          fontSize: "12px",
          padding: "0px 18px",
          margin: "0px 0px 4px",
          textTransform: "uppercase",
          color: theme.palette.text.primary,
        }}
      >
        Dashboard
      </Box>
      <Box>
        {deshdata.map((data) => {
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
  </AppBar>
);

// export const secondaryListItems = (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       Saved reports
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItemButton>
//   </React.Fragment>
// );
