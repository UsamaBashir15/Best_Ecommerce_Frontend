import axios from "axios";

export const postRegisterApi = async (props) => {
  try {
    const res = await axios.post("http://localhost:5000/api/User", props);
    localStorage.setItem("auth_Data", res.data);

    return { res: res, get: "OK" };
  } catch (error) {
    console.log("Post Register Error", error);
    return { error: error, get: "NOT" };
  }
};

export const putRegisterApi = async ({ id, data }) => {
  try {
    const res = await axios.put(`http://localhost:5000/api/User/${id}`, data);
    return res;
  } catch (error) {
    console.log("Put Register Error", error);
  }
};

export const getRegisterApi = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/User");
    return res;
  } catch (error) {
    console.log("Get Register Error", error);
  }
};

export const deleteRegisterApi = async ({ id, data }) => {
  try {
    const res = await axios.delete(
      `http://localhost:5000/api/User/${id}`,
      data
    );
    return res;
  } catch (error) {
    console.log("Delete Register Error", error);
  }
};
