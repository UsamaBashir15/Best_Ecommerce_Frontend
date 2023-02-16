import jwtDecode from "jwt-decode";

export const currentAuth = () => {
  const loginToken = localStorage.getItem("auth_Data");
  if (loginToken) {
    let decodeToken = jwtDecode(loginToken);
    const userId = decodeToken["_id"];

    return userId;
  }
};
