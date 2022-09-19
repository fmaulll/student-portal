import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface StudentState {
  studentId: number;
  infoCard: {
    firstName: string;
    lastName: string;
    studentId: number;
    major: string;
  };
  profileInfo: {
    firstName: string;
    lastName: string;
    email: string;
  };
  grades: {
    gpa: number;
    activityPoint: number;
    comsevHour: number;
  };
  courses: {
    courseName: string;
    courseId: string;
    class: string;
    progress: number;
  }[];
}

const initialState: StudentState = {
  studentId: 0,
  infoCard: {
    firstName: "",
    lastName: "",
    studentId: 0,
    major: "",
  },
  profileInfo: {
    firstName: "",
    lastName: "",
    email: "",
  },
  grades: {
    gpa: 0,
    activityPoint: 0,
    comsevHour: 0,
  },
  courses: [{
    courseName: "",
    courseId: "",
    class: "",
    progress: 0
  }]
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setStudentId(state, action) {
      const inputValue = action.payload

      state.studentId = inputValue
    },

    getStudentId(state) {
      const id = localStorage.getItem('studentId') || ""

      state.studentId = parseInt(id)
    },

    getInfoCard(state, action) {
      const student = action.payload;

      state.infoCard = {
        firstName: student.firstName,
        lastName: student.lastName,
        studentId: student.studentId,
        major: student.major,
      };
    },

    getProfileInfo(state, action) {
      const student = action.payload;

      state.profileInfo = {
        firstName: student.firstName,
        lastName: student.lastName,
        email: student.email,
      };
    },

    getStudentScore(state, action) {
      const student = action.payload;

      state.grades = {
        gpa: student.gpa,
        activityPoint: student.activityPoint,
        comsevHour: student.comsevHour,
      };
    },

    getCourses(state, action) {
      const course = action.payload;

      state.courses = course;
    }
  },
});
export const studentActions = studentSlice.actions;

export default studentSlice;
