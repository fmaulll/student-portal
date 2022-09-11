import {
  Box,
  Collapse,
  Fade,
  Grid,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { FC, useState } from "react";
import { ReactComponent as UniversityLogo } from "../../assets/logo/UPL-logo.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/Menu.svg";
import { ReactComponent as CrossIcon } from "../../assets/icons/Cross.svg";
import zIndex from "@mui/material/styles/zIndex";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    height: 100,
    background: "linear-gradient(180deg, #1C4779 51.04%, #345A87 83.33%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 20px",
    boxShadow: "0px 10px 10px 4px rgba(0, 0, 0, 0.25)",
  },
  menu: {
    width: "100%",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    background: "linear-gradient(180deg, #1C4779 51.04%, #345A87 83.33%)",
    zIndex: 1,
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

const Header: FC<Props> = ({ items }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [selectedMenu, setSelectedMenu] = useState<number>(0);

  return (
    <div className={classes.root}>
      <Fade in={openMenu}>
        <Box className={classes.menu}>
          <Grid container>
            <Grid
              item
              container
              alignItems="center"
              justifyContent="space-between"
              sx={{
                height: "100px",
                padding: "0 20px",
              }}
            >
              <Grid item>
                <Typography
                  style={{
                    fontFamily: "'Encode Sans', sans-serif",
                    fontSize: 32,
                    color: "#FFFFFF",
                  }}
                >
                  UNIVERSITY
                </Typography>
              </Grid>
              <Grid item>
                <IconButton onClick={() => setOpenMenu(false)}>
                  <CrossIcon />
                </IconButton>
              </Grid>
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
                      setOpenMenu(false);
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
        </Box>
      </Fade>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <UniversityLogo style={{ width: 80 }} />
        </Grid>
        <Grid item>
          <IconButton onClick={() => setOpenMenu(true)}>
            <MenuIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
