import Axios from "axios";

const headersSetting = {
  "Content-Type": "application/json",
};

export const doGetStudentData = async () => {
  try {
    const result = await Axios({
      url: `http://localhost:4646/student/getStudentData`,
      method: "GET",
      headers: headersSetting,
    });
    return result;
  } catch (err) {
    alert(`Terjadi Kesalahan: ! \n${err}`);
  }
};
