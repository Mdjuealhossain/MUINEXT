import HailOutlinedIcon from "@mui/icons-material/HailOutlined";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
import DeviceHubOutlinedIcon from "@mui/icons-material/DeviceHubOutlined";
import PermPhoneMsgOutlinedIcon from "@mui/icons-material/PermPhoneMsgOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AssistWalkerIcon from "@mui/icons-material/AssistWalker";
import { theme } from "@/app/ThemingContainet/createTheme";

export const deshdata = [
  {
    name: "LMS",
    url: "#",
    icon: (
      <AssistWalkerIcon
        sx={{
          marginRight: "4px",
          color: theme.palette.text.primary,
          fontSize: "18px",
        }}
      ></AssistWalkerIcon>
    ),
  },
  {
    name: "Sales 1",
    url: "#",
    icon: (
      <SettingsIcon
        sx={{
          marginRight: "4px",
          color: theme.palette.text.primary,
          fontSize: "18px",
        }}
      ></SettingsIcon>
    ),
  },
  {
    name: "Sales 2",
    url: "#",
    icon: (
      <ContactMailIcon
        sx={{
          marginRight: "4px",
          color: theme.palette.text.primary,
          fontSize: "18px",
        }}
      ></ContactMailIcon>
    ),
  },
  {
    name: "Hiring",
    url: "#",
    icon: (
      <HailOutlinedIcon
        sx={{
          marginRight: "4px",
          color: theme.palette.text.primary,
          fontSize: "18px",
        }}
      ></HailOutlinedIcon>
    ),
  },
  {
    name: "Project 1",
    url: "#",
    icon: (
      <LibraryAddCheckOutlinedIcon
        sx={{
          marginRight: "4px",
          color: theme.palette.text.primary,
          fontSize: "18px",
        }}
      ></LibraryAddCheckOutlinedIcon>
    ),
  },
  {
    name: "Project 2",
    url: "#",
    icon: (
      <DeviceHubOutlinedIcon
        sx={{
          marginRight: "4px",
          color: theme.palette.text.primary,
          fontSize: "18px",
        }}
      ></DeviceHubOutlinedIcon>
    ),
  },
];
