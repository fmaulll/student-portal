import {
  Box,
  Divider,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { type } from "@testing-library/user-event/dist/type";
import Axios from "axios";
import React, { FC, useEffect, useState } from "react";
import Loader from "../../components/Loader";
import OverallPoints from "../../components/OverallPoints";
import StudentCard from "../../components/StudentCard";
import { useAppDispatch } from "../../hooks";
import { studentActions } from "../../store/student-slice";
import { doGetStudentData } from "./ApiServiceDashboard";

const useStyles = makeStyles({
  root: {
    padding: "30px 20px",
  },
});

type pointInfoProps = {
  gpa: number;
  activityPoint: number;
  comsevHour: number;
};

const Dashboard: FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [pointInfo, setPointInfo] = useState<pointInfoProps>({
    gpa: 0,
    activityPoint: 0,
    comsevHour: 0,
  });
  const [isLoading, setIsloading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    doGetStudentData()
      .then((res) => {
        setIsloading(true);
        if (res?.status === 200) {
          dispatch(studentActions.getStudentInfo(res?.data));
          setTimeout(() => {
            setIsloading(false);
          }, 2000);
        }
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sx={{ marginBottom: !matches ? "20px" : "10px" }}>
          <Typography sx={{ fontWeight: 500, fontSize: 24, color: "#202020" }}>
            Dashboard
          </Typography>
          <Divider />
        </Grid>
        <Grid
          item
          container
          spacing={4}
          sx={
            {
              // border: "1px solid red",
            }
          }
        >
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
              <Paper
                sx={{
                  display: "flex",
                  padding: "20px",
                  alignItems: "center",
                  borderRadius: "10px",
                  position: "relative",
                }}
              >
                <StudentCard isLoading={isLoading} />
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={!matches ? 6 : 12}>
            <Typography sx={{ marginBottom: "10px" }}>
              Overall Points
            </Typography>
            <Paper
              sx={{
                display: "flex",
                padding: "20px",
                alignItems: "center",
                borderRadius: "10px",
                position: "relative",
              }}
            >
              <OverallPoints isLoading={isLoading} />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
