import React, { FC, useState } from "react";
import {
  Avatar,
  Box,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ReactComponent as DashboardIcon } from "../../assets/icons/Dashboard.svg";
import { ReactComponent as AssessmentIcon } from "../../assets/icons/Assessment.svg";
import { ReactComponent as ArticleIcon } from "../../assets/icons/Article.svg";
import { ReactComponent as CalendarIcon } from "../../assets/icons/Calendar.svg";
import { ReactComponent as AnnouncementIcon } from "../../assets/icons/Announcement.svg";
import { ReactComponent as AccountIcon } from "../../assets/icons/Account.svg";
import { ReactComponent as LogoutIcon } from "../../assets/icons/Logout.svg";
import { ReactComponent as UniversityLogo } from "../../assets/logo/UPL-logo.svg";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(180deg, #1C4779 51.04%, #345A87 83.33%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    minHeight: "100vh",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 0 0 0",
  },
});

export interface Props {
  items: {
    id: number;
    title: string;
    value: string;
    icon: JSX.Element;
    url: string;
  }[];
}

const Sidebar: FC<Props> = ({items}) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [selectedMenu, setSelectedMenu] = useState<Number>(0);
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Box className={classes.logoContainer}>
            <UniversityLogo />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <List>
            {items.map((item) => (
              <ListItemButton
                style={{ margin: "20px 0" }}
                key={item.id}
                selected={selectedMenu === item.id}
                onClick={() => {
                  setSelectedMenu(item.id);
                  navigate(item.url);
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.title}
                  style={{ color: "#FFFFFF", fontWeight: 400 }}
                />
              </ListItemButton>
            ))}
          </List>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <List sx={{ width: "100%", maxWidth: 360 }}>
            <ListItemButton onClick={() => setOpen(true)}>
              <ListItemAvatar>
                <Avatar>
                  <AccountIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Fikri Maulana ibrahim"
                secondary="maul2821@gmail.com"
                sx={{
                  color: "#FFFFFF",
                  ".MuiListItemText-secondary": { color: "#FFFFFF" },
                }}
              />
            </ListItemButton>
          </List>
        </Grid>
        <Menu
          id="basic-menu"
          open={open}
          onClose={() => setOpen(false)}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          // sx={{ marginLeft: "200px" }}
        >
          <MenuItem onClick={() => {}}>Profile</MenuItem>
          <MenuItem onClick={() => {}}>My account</MenuItem>
          <MenuItem onClick={() => {}}>Logout</MenuItem>
        </Menu>
      </Grid>
    </div>
  );
};

export default Sidebar;
