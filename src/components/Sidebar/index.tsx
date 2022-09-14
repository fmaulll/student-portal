import React, { FC, useState } from "react";
import {
  Avatar,
  Box,
  Collapse,
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
import { ReactComponent as AccountIcon } from "../../assets/icons/AccountBox.svg";
import { ReactComponent as LogoutIcon } from "../../assets/icons/Logout.svg";
import { ReactComponent as ChevronDown } from "../../assets/icons/ChevronDown.svg";
import { ReactComponent as ChevronUp } from "../../assets/icons/ChevronUp.svg";
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
    // position: "fixed",
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

const Sidebar: FC<Props> = ({ items }) => {
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
                sx={{ margin: "20px 0" }}
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
                  sx={{ color: "#FFFFFF", fontWeight: 400 }}
                />
              </ListItemButton>
            ))}
          </List>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <ListItemButton onClick={() => setOpen(!open)}>
            <ListItemText
              primary="Fikri Maulana ibrahim"
              secondary="maul2821@gmail.com"
              sx={{
                color: "#FFFFFF",
                ".MuiListItemText-secondary": { color: "#FFFFFF" },
              }}
            />
            {!open ? <ChevronDown /> : <ChevronUp />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <AccountIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{ color: "#FFFFFF", fontWeight: 400 }}
                  primary="Profile"
                />
              </ListItemButton>
            </List>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{ color: "#FFFFFF", fontWeight: 400 }}
                  primary="Logout"
                />
              </ListItemButton>
            </List>
          </Collapse>
        </Grid>
      </Grid>
    </div>
  );
};

export default Sidebar;
