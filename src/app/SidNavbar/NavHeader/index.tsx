import React from "react";
import Image from "next/image";
import { Box, IconButton } from "@mui/material";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";

const NavHeader = () => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        position: "fixed",
        padding: "16px",
        marginLeft: "12px",
      }}
    >
      <Box sx={{ display: "flex" }}>
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
      <IconButton sx={{ marginLeft: 16, marginTop: -1 }}>
        <KeyboardTabIcon></KeyboardTabIcon>
      </IconButton>
    </Box>
  );
};

export default NavHeader;
