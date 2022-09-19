import { Button, InputBase, Paper } from "@mui/material";
import { stringify } from "querystring";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { studentActions } from "../../store/student-slice";

const Login = () => {
  const [inputValue, setInputValue] = useState<number>(0);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginHandler = () => {
    dispatch(studentActions.setStudentId(inputValue));
    localStorage.setItem("studentId", String(inputValue));
    // setTimeout(() => {
    navigate("/dashboard");
    // }, 3000);
  };
  return (
    <div style={{ height: "100vh" }}>
      <Paper>
        <InputBase onChange={(e) => setInputValue(parseInt(e.target.value))} />
        <Button onClick={loginHandler}>Login</Button>
      </Paper>
    </div>
  );
};

export default Login;
