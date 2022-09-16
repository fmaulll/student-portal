import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState, useEffect, FC } from "react";

const useStyles = makeStyles({
  text: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export interface Props {
  data: number;
}

const GPAGraph: FC<Props> = ({ data }) => {
  const classes = useStyles();
  const [point, setPoint] = useState<number>(0);
  const [progressBar, setProgressBar] = useState<number>(0);

  useEffect(() => {
    setPoint(data);
    setProgressBar((data * 100) / 4);
  }, [point, progressBar]);

  return (
    <div style={{ width: "100%" }}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography className={classes.text}>GPA</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.text} style={{ fontSize: 32 }}>
            {point}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            style={{
              background: "#FF5C00",
            }}
          >
            <Box
              style={{
                width: `${progressBar}%`,
                height: "30px",
                background: "#FFE600",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default GPAGraph;
