import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface StudentState {
  studentInfo: {
    firstName: string;
    lastName: string;
    email: string;
    studentId: number;
    major: string;
  };
  grades: {
    gpa: number;
    activityPoint: number;
    comsevHour: number;
  };
}

const initialState: StudentState = {
  studentInfo: {
    firstName: "",
    lastName: "",
    email: "",
    studentId: 0,
    major: "",
  },
  grades: {
    gpa: 0,
    activityPoint: 0,
    comsevHour: 0,
  },
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    getStudentInfo(state, action) {
      const student = action.payload;

      state.studentInfo = {
        firstName: student.studentInfo.firstName,
        lastName: student.studentInfo.lastName,
        email: student.studentInfo.email,
        studentId: student.studentInfo.studentId,
        major: student.studentInfo.major,
      };

      state.grades = {
        gpa: student.grades.gpa,
        activityPoint: student.grades.activityPoint,
        comsevHour: student.grades.comsevHour,
      };

      console.log(student.studentInfo);
    },
  },
});
export const studentActions = studentSlice.actions;

export default studentSlice;
