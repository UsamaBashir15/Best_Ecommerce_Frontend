import axios from "axios";

export const postSignInApi = async (props) => {
  try {
    const res = await axios.post("http://localhost:5000/api/LoginUser", props);
    localStorage.setItem("auth_Data", res.data);

    return { res: res, get: "OK" };
  } catch (error) {
    return { error: error, get: "NOT" };
  }
};
