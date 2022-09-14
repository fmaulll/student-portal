import { Grid } from "@mui/material";
import React, { FC } from "react";
import ComsevGraph from "./ComsevGraph";
import GPAGraph from "./GPAGraph";
import ActivityPointGraph from "./ActivityPointGraph";

export interface Props {
  data: {
    gpa: number;
    activityPoint: number;
    comsevHour: number;
  };
}

const OverallPoints: FC<Props> = ({ data }) => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sx={{ marginBottom: "20px" }}>
          <GPAGraph data={data.gpa} />
        </Grid>
        <Grid item xs={12} sx={{ marginBottom: "20px" }}>
          <ActivityPointGraph data={data.activityPoint} />
        </Grid>
        <Grid item xs={12}>
          <ComsevGraph data={data.comsevHour} />
        </Grid>
      </Grid>
    </div>
  );
};

export default OverallPoints;
