import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import React, { FC } from "react";
import { useAppSelector } from "../../hooks";
import Loader from "../Loader";

const styles = {
  paper: {
    display: "flex",
    padding: "20px",
    alignItems: "center",
    borderRadius: "10px",
    position: "relative",
  },
};

interface Props {
  isLoading: boolean;
}

const StudentCard: FC<Props> = ({ isLoading }) => {
  const student = useAppSelector((state) => state.student.infoCard);

  return (
    <Paper sx={styles.paper}>
      {/* <div className={classes.root}> */}
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
      {/* </div> */}
    </Paper>
  );
};

export default StudentCard;
