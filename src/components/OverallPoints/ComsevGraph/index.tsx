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

interface Props {
  data: number;
}

const ComsevGraph: FC<Props> = ({ data }) => {
  const classes = useStyles();
  const [point, setPoint] = useState<number>(0);
  const [progressBar, setProgressBar] = useState<number>(0);

  useEffect(() => {
    setPoint(data);
    setProgressBar((data * 100) / 30);
  }, [point, progressBar]);

  return (
    <div style={{ width: "100%" }}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography className={classes.text}>
            Hour of Community Service
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.text} sx={{ fontSize: 32 }}>
            {point}/30 Hour
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              background: "#f4f7fb",
            }}
          >
            <Box
              sx={{
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

export default ComsevGraph;
