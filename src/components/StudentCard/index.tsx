import { Avatar, Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ReactComponent as StudentCardImage } from "../../assets/images/StudentCard.svg";
import { ReactComponent as AccountIcon } from "../../assets/icons/Account.svg";
import React, { FC } from "react";

const useStyles = makeStyles({
  root: {
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    position: "relative",
  },
});

export interface Props {
  card: {
    firstName: string;
    lastName: string;
    major: string;
    nim: number;
  };
}

const StudentCard: FC<Props> = ({ card }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ width: 56, height: 56 }}>
          <AccountIcon />
        </Avatar>
        <Grid container direction="column" sx={{ marginLeft: "20px" }}>
          <Grid item>
            <Typography
              sx={{
                fontFamily: "'Encode Sans', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                color: "#202020",
              }}
            >
              {card.firstName + " " + card.lastName}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                fontFamily: "'Encode Sans', sans-serif",
                fontSize: 12,
                fontWeight: 400,
                color: "#202020",
              }}
            >
              {card.nim}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                fontFamily: "'Encode Sans', sans-serif",
                fontSize: 12,
                fontWeight: 400,
                color: "#202020",
              }}
            >
              {card.major}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default StudentCard;
