import {
  Divider,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import OverallPoints from "../../components/OverallPoints";
import StudentCard from "../../components/StudentCard";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { studentActions } from "../../store/student-slice";
import { doGetInfoCard, doGetStudentGrades } from "../ApiServices";

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

const Dashboard: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [isLoading, setIsloading] = useState<boolean>(false);

  const studentId = useAppSelector((state) => state.student.studentId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // setIsloading(true);
    doGetInfoCard(studentId)
      .then((res) => {
        if (res?.status === 200) {
          dispatch(
            studentActions.getInfoCard({
              firstName: res?.data.firstName,
              lastName: res?.data.lastName,
              studentId: res?.data.studentId,
              major: res?.data.major,
            })
          );
          // setIsloading(false);
        }
      })
      .catch((err) => {
        alert(err);
      });

    doGetStudentGrades(studentId)
      .then((res) => {
        if (res?.status === 200) {
          dispatch(
            studentActions.getStudentScore({
              gpa: res?.data.gpa,
              activityPoint: res?.data.activityPoint,
              comsevHour: res?.data.comsevHour,
            })
          );
          setIsloading(false);
        }
      })
      .catch((err) => {
        alert(err);
      });
  }, [dispatch]);
  return (
    <div style={styles.root}>
      <Grid container>
        <Grid item xs={12} sx={{ marginBottom: !matches ? "20px" : "10px" }}>
          <Typography sx={styles.title}>Dashboard</Typography>
          <Divider />
        </Grid>
        <Grid item container spacing={4}>
          <Grid
            item
            container
            direction="column"
            xs={12}
            sx={{
              marginBottom: !matches ? 0 : "20px",
            }}
          >
            <Grid item>
              <Typography sx={{ marginBottom: "10px" }}>
                Student Info
              </Typography>
            </Grid>
            <Grid item>
              <StudentCard isLoading={isLoading} />
            </Grid>
          </Grid>
          <Grid item container xs={!matches ? 6 : 12}>
            <Grid item>
              <Typography sx={{ marginBottom: "10px" }}>
                Overall Points
              </Typography>
            </Grid>
            <Grid item>
              <OverallPoints isLoading={isLoading} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
