import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  ButtonBase,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { theme } from "@/app/ThemingContainet/createTheme";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";

const HeaderPage = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        paddingTop: "1rem",
        paddingBottom: "1rem",
        background: "transparent",
        backdropFilter: "blur(3px)",
        width: "auto",
        left: 328,
        right: 48,
        boxShadow: "none",
      }}
    >
      <Box
        sx={{
          paddingLeft: 0,
          paddingRight: 0,
          minHeight: "auto",
          display: "flex",
        }}
      >
        <IconButton sx={{ paddingRight: 33 }}>
          <SearchIcon></SearchIcon>
        </IconButton>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Box>
          <IconButton>
            <SignalCellularAltIcon />
          </IconButton>
          <IconButton>
            <LightModeRoundedIcon sx={{ color: theme.palette.warning.light }} />
          </IconButton>
          <IconButton>
            <Avatar
              sx={{ height: 24, width: 24 }}
              sizes="small"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
            ></Avatar>
          </IconButton>

          <IconButton>
            <NotificationsRoundedIcon />
          </IconButton>
          <IconButton>
            <AppsRoundedIcon />
          </IconButton>

          <Button
            variant="outlined"
            size="small"
            sx={{
              border: `1px solid ${theme.palette.grey[400]}`,
              boxShadow: "none",
              borderRadius: 30,
              textTransform: "none",
            }}
          >
            <Typography> Hi Aron cooper</Typography>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <Avatar
                  sx={{
                    width: 6,
                    height: 6,
                    background: theme.palette.success.main,
                    color: theme.palette.success.main,
                    boxShadow: theme.shadows[1],
                    border: `2px solid ${theme.palette.common.white}`,
                    marginBottom: 0.5,
                    marginRight: 0.4,
                  }}
                >
                  .
                </Avatar>
              }
            >
              <Avatar
                sx={{ height: 24, width: 24 }}
                alt="Travis Howard"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_90XT0DAgy57bSuIxvJo5OpQIF5Gx-o-Umw&usqp=CAU"
              />
            </Badge>
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
};

export default HeaderPage;
