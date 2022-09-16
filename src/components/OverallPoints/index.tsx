import { Grid } from "@mui/material";
import React, { FC } from "react";
import ComsevGraph from "./ComsevGraph";
import GPAGraph from "./GPAGraph";
import ActivityPointGraph from "./ActivityPointGraph";
import { useAppSelector } from "../../hooks";
import Loader from "../Loader";

export interface Props {
  isLoading: boolean;
}

const OverallPoints: FC<Props> = ({ isLoading }) => {
  const grades = useAppSelector((state) => state.student.grades);
  return (
    <div style={{ width: "100%" }}>
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
    </div>
  );
};

export default OverallPoints;
