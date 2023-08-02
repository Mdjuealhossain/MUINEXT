import { Divider, List } from "@mui/material";
import React from "react";
import {
  mainListItems,
  secondaryListItems,
} from "../TemplateMui/Deshboard/ListItem";
import { theme } from "../ThemingContainet/createTheme";

const SidNav = () => {
  return (
    <List sx={{ boxShadow: theme.shadows[8] }} component="nav">
      {mainListItems}
    </List>
  );
};

export default SidNav;
