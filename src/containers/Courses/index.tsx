import {
  Divider,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { studentActions } from "../../store/student-slice";
import { doGetCourses } from "../Dashboard/ApiServiceDashboard";

const styles = {
  root: { padding: "30px 20px" },
  title: {
    fontWeight: 500,
    fontSize: 24,
    color: "#202020",
  },
  paper: {
    display: "flex",
    padding: "20px",
    alignItems: "center",
    borderRadius: "10px",
    position: "relative",
  },
};

const Courses = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useAppDispatch();
  const studentId = useAppSelector((state) => state.student.studentId);
  const courses = useAppSelector((state) => state.student.courses);

  useEffect(() => {
    doGetCourses(studentId).then((res) => {
      if (res?.status === 200) {
        dispatch(studentActions.getCourses(res?.data.courses));
      }
    });
  }, []);
  return (
    <div style={styles.root}>
      <Grid container>
        <Grid item xs={12} sx={{ marginBottom: !matches ? "20px" : "10px" }}>
          <Typography sx={styles.title}>Courses</Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ marginBottom: "10px" }}>
            Even Semester 2022
          </Typography>
        </Grid>
        <Grid
          item
          container
          xs={12}
          spacing={2}
          sx={{
            marginBottom: !matches ? 0 : "20px",
          }}
        >
          {courses.map((course) => (
            <Grid item xs={4}>
              <Paper sx={styles.paper}>
                <Typography>{course.courseName}</Typography>
                <Typography>{course.courseId}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Courses;
