import { Divider, List } from "@mui/material";
import React from "react";
import {
  mainListItems,
  secondaryListItems,
} from "../TemplateMui/Deshboard/ListItem";

const SidNav = () => {
  return (
    <List component="nav">
      {mainListItems}
      <Divider sx={{ my: 1 }} />
      {secondaryListItems}
    </List>
  );
};

export default SidNav;
