import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { FC, useState, useEffect } from "react";

interface Props {
  course: {
    courseName: string;
    courseId: string;
    class: string;
    progress: number;
  };
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

const CourseBox: FC<Props> = ({ course }) => {
  const [progressBar, setProgressBar] = useState<number>(0);

  useEffect(() => {
    setProgressBar((course.progress * 100) / 100);
  }, [progressBar]);

  return (
    <Paper sx={styles.paper}>
      <Grid container direction="column">
        <Grid item>
          <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
            {course.courseName}
          </Typography>
        </Grid>
        <Grid item>
          <Typography>{course.courseId}</Typography>
        </Grid>
        <Grid item>
          <Typography>{course.class}</Typography>
        </Grid>
        <Grid item container sx={{ marginTop: "30px" }}>
          <Grid item container justifyContent="space-between">
            <Grid item>
              <Typography sx={{ fontSize: 13 }}>Class progress:</Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ fontWeight: 600 }}>
                {course.progress}%
              </Typography>
            </Grid>
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
                  height: "20px",
                  background: "#FFE600",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CourseBox;
