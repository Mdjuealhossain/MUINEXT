"use client";
import { theme } from "@/app/ThemingContainet/createTheme";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const LMS = () => {
  return (
    <Container>
      <Box sx={{ background: theme.palette.background.default }}>
        <Typography>Welcome Back! Watson</Typography>
        <Typography>
          You have done 76% more sales today. Check your inventory and update
          your stocks.
        </Typography>
      </Box>
    </Container>
  );
};

export default LMS;
