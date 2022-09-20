import { Grid, Paper } from "@mui/material";
import React, { FC } from "react";
import ComsevGraph from "./ComsevGraph";
import GPAGraph from "./GPAGraph";
import ActivityPointGraph from "./ActivityPointGraph";
import { useAppSelector } from "../../hooks";
import Loader from "../Loader";

export interface Props {
  isLoading: boolean;
}

const styles = {
  paper: {
    display: "flex",
    padding: "20px",
    alignItems: "center",
    borderRadius: "10px",
    position: "relative",
  },
};

const OverallPoints: FC<Props> = ({ isLoading }) => {
  const grades = useAppSelector((state) => state.student.grades);
  return (
    <Paper sx={styles.paper}>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <Grid container>
          <Grid item xs={12} sx={{ marginBottom: "20px" }}>
            <GPAGraph data={grades.gpa} />
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: "20px" }}>
            <ActivityPointGraph data={grades.activityPoint} />
          </Grid>
          <Grid item xs={12}>
            <ComsevGraph data={grades.comsevHour} />
          </Grid>
        </Grid>
      )}
    </Paper>
  );
};

export default OverallPoints;
