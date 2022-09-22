import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { FC, useState, useEffect } from "react";
import Loader from "../Loader";

interface Props {
  course: {
    courseName: string;
    courseId: string;
    class: string;
    progress: number;
  };
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

const CourseBox: FC<Props> = ({ course, isLoading }) => {
  const [progressBar, setProgressBar] = useState<number>(course.progress);

  useEffect(() => {
    setProgressBar((progressBar * 100) / 100);
  }, [progressBar]);

  return (
    <Paper sx={styles.paper}>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
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
      )}
    </Paper>
  );
};

export default CourseBox;
