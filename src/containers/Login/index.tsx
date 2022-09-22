import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { studentActions } from "../../store/student-slice";
import Background from "../../assets/images/Background.svg";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
});

const styles = {
  root: {},
  paper: {
    position: "absolute",
    padding: "20px",
    borderRadius: "10px",
    marginLeft: "20px",
    marginBottom: "30px",
    bottom: 0,
    left: 0
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    color: "#202020",
  },
};

const Login = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginHandler = () => {
    dispatch(studentActions.setStudentId(parseInt(inputValue)));
    localStorage.setItem("studentId", String(inputValue));
    // setTimeout(() => {
    navigate("/dashboard");
    // }, 3000);
  };
  return (
    <div className={classes.root} style={{ position: "relative" }}>
      <Paper sx={styles.paper}>
        <Grid container direction="column">
          <Grid item>
            <Typography sx={styles.title}>
              Selamat Datang di UPL Student Portal
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              label="Masukkan NIM"
              variant="outlined"
              onChange={(e) => setInputValue(e.target.value)}
            />
          </Grid>
          <Grid item>
            <Button onClick={loginHandler}>Login</Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Login;
