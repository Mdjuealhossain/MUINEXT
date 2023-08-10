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
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        position: "fixed",
        backdropFilter: "blur(3px)",
        width: "100%",
      }}
    >
      <Box>
        <IconButton>
          <SearchIcon></SearchIcon>
        </IconButton>
      </Box>
      <Box></Box>
      <Box>
        <IconButton>
          <SignalCellularAltIcon />
        </IconButton>
        <IconButton>
          <LightModeRoundedIcon sx={{ color: theme.palette.warning.light }} />
        </IconButton>
        <IconButton>
          <Avatar
            sx={{ height: 20, width: 20 }}
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
          sx={{ boxShadow: "none", borderRadius: 30, textTransform: "none" }}
        >
          <Typography> Hi Aron cooper</Typography>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <Avatar
                sx={{
                  background: theme.palette.success.main,
                  color: theme.palette.success.main,
                  boxShadow: theme.shadows[1],
                  marginBottom: 1,
                  marginRight: 0.1,
                  border: "2px solid #FFF",
                }}
              >
                .
              </Avatar>
            }
          >
            <Avatar
              sx={{ height: 20, width: 20 }}
              alt="Travis Howard"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_90XT0DAgy57bSuIxvJo5OpQIF5Gx-o-Umw&usqp=CAU"
            />
          </Badge>
        </Button>
      </Box>
    </AppBar>
  );
};

export default HeaderPage;
