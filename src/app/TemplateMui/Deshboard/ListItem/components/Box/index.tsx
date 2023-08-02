import { theme } from "@/app/ThemingContainet/createTheme";
import styled from "@emotion/styled";
import { Box, ButtonBase } from "@mui/material";

export const NavTextBox = styled(Box)({
  fontSize: "13px",
  paddingLeft: "0.8rem",
  fontWeight: 600,
  color: theme.palette.text.primary,
});

export const MuiButtonBase = styled(ButtonBase)({
  margin: " 0px 0px 4px",
  padding: " 18px",
});
