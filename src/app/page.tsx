"use client";
import "./globals.css";
import ButtonCom from "./MuiStuleComponents/ButtonComponents/index";
import AddCard from "./MuiStuleComponents/CardComponents/Addcard";
import Mui from "./MuiStuleComponents/OverrideMuiComponent/index";
import SimpoleCard from "./OverRideThemeFoeCard/simpoleCard/index";
import Typography from "./MuiStuleComponents/Typography/index";
import { theme } from "./ThemingContainet/createTheme";
import ComplexInterCard from "./OverRideThemeFoeCard/ComplexIntCard/index";
import Inputfild from "./OverRideThemeFoeCard/Input/index";
import BtnGroup from "./MuiStuleComponents/ButtonGroup/index";
import Cheekbox from "./MuiStuleComponents/CheeckBox/index";
import FlButton from "./MuiStuleComponents/FAB/index";
import ListMui from "./MuiStuleComponents/List/index";
import { Box } from "@mui/material";
import SignIn from "./TemplateMui/SignIn";
import SignInSide from "./TemplateMui/signIn-Side";
import Dashboard from "./TemplateMui/Deshboard/Deshboard";
import SimpoleLineChart from "./ReChart/LineChart/SimpoleLineChart";
// import GridCom from "./MuiStuleComponents/GridCompon";

export default function Home() {
  return (
    <Box>
      <Box sx={{ height: "80px", background: "#000" }}>kgk</Box>
      <SimpoleLineChart></SimpoleLineChart>
    </Box>
  );
}
