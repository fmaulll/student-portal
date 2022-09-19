import { Avatar, Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ReactComponent as StudentCardImage } from "../../assets/images/StudentCard.svg";
import { ReactComponent as AccountIcon } from "../../assets/icons/Account.svg";
import React, { FC, useEffect } from "react";
import { useAppSelector } from "../../hooks";
import Loader from "../Loader";

const useStyles = makeStyles({
  root: {
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    position: "relative",
    width: "100%",
  },
});

interface Props {
  isLoading: boolean;
}

const StudentCard: FC<Props> = ({ isLoading }) => {
  const student = useAppSelector((state) => state.student.infoCard);
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ width: 56, height: 56 }}>
            {student.firstName ? student.firstName.substring(0, 1) : "A"}
            {student.lastName ? student.lastName.substring(0, 1) : "G"}
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
                {student.firstName + " " + student.lastName}
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
                {student.studentId}
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
                Undergraduate {student.major} Student
              </Typography>
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
};

export default StudentCard;
