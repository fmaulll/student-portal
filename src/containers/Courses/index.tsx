import {
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CourseBox from "../../components/CourseBox";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { studentActions } from "../../store/student-slice";
import { doGetCourses } from "../ApiServices";

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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    doGetCourses(studentId).then((res) => {
      if (res?.status === 200) {
        dispatch(studentActions.getCourses(res?.data.courses));
        setIsLoading(false);
      }
    });
  }, [studentId, dispatch]);
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
              <CourseBox isLoading={isLoading} course={course} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Courses;
