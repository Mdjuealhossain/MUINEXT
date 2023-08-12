import React from "react";
import Image from "next/image";
import { Box, IconButton } from "@mui/material";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import { theme } from "@/app/ThemingContainet/createTheme";

const NavHeader = () => {
  return (
    <Box
      component="div"
      sx={{
        padding: "24px 16px 8px 32px",
        height: "40px",
        alignItems: "center",
        justifyContent: "space-between",
        display: "flex",
        position: "fixed",
        background: theme.palette.background.default,
        border: "none",
        borderColor: theme.palette.background.default,
        minHeight: "auto",
        left: 0,
        right: 1252,
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
