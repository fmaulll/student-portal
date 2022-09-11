import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import StudentCard from "../../components/StudentCard";

const useStyles = makeStyles({
  root: {
    padding: "30px 20px",
  },
});

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sx={{ marginBottom: "30px" }}>
          <Typography style={{ fontWeight: 600, fontSize: 24, color: "#202020" }}>Dashboard</Typography>
        </Grid>
        <Grid item xs={12}>
          <StudentCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
