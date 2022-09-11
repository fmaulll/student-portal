import { Avatar, Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ReactComponent as StudentCardImage } from "../../assets/images/StudentCard.svg";
import { ReactComponent as AccountIcon } from "../../assets/icons/Account.svg";
import React from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const StudentCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box style={{ position: "relative" }}>
        <StudentCardImage />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            bottom: 20,
            left: 20,
          }}
        >
          <Avatar>
            <AccountIcon />
          </Avatar>
          <Grid container direction="column" sx={{ marginLeft: "20px" }}>
            <Grid item>
              <Typography
                style={{
                  fontFamily: "'Encode Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#FFFFFF",
                }}
              >
                Fikri Maulana Ibrahim
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                style={{
                  fontFamily: "'Encode Sans', sans-serif",
                  fontSize: 12,
                  fontWeight: 400,
                  color: "#FFFFFF",
                }}
              >
                2301897314
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default StudentCard;
