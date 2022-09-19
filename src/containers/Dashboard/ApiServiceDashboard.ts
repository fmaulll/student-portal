import Axios from "axios";

const headersSetting = {
  "Content-Type": "application/json",
};

const baseUrl = "http://localhost:4646/student"

export const doGetProfileInfo = async (studentId: number) => {
  try {
    const result = await Axios({
      url: `${baseUrl}/getProfileInfo/${6051901232}`,
      method: "GET",
      headers: headersSetting,
    });
    return result;
  } catch (err) {
    alert(`Terjadi Kesalahan: ! \n${err}`);
  }
};

export const doGetInfoCard = async (studentId: number) => {
  try {
    const result = await Axios({
      url: `${baseUrl}/getInfoCard/${studentId}`,
      method: "GET",
      headers: headersSetting,
    });
    return result;
  } catch (err) {
    alert(`Terjadi Kesalahan: ! \n${err}`);
  }
};

export const doGetStudentGrades = async (studentId: number) => {
  try {
    const result = await Axios({
      url: `${baseUrl}/getStudentGrades/${studentId}`,
      method: "GET",
      headers: headersSetting,
    });
    return result;
  } catch (err) {
    alert(`Terjadi Kesalahan: ! \n${err}`);
  }
};

export const doGetCourses = async (studentId: number) => {
  try {
    const result = await Axios({
      url: `${baseUrl}/getCourses/${studentId}`,
      method: "GET",
      headers: headersSetting,
    });
    return result;
  } catch (err) {
    alert(`Terjadi Kesalahan: ! \n${err}`);
  }
};
