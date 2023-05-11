import api from "./api";

const register = async (payload: object) => {
  const url = "register";
  try {
    const { data } = await api.post(url, payload);
    localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

const login = async (payload: object) => {
  const url = "login";
  try {
    const { data } = await api.post(url, payload);
    localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

const forgotPassword = async (payload: object) => {
  const url = "forgot-password";
  try {
    const { data } = await api.post(url, payload);
    console.log("forgot", data);
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

const resetPassword = async (payload: object) => {
  const url = "reset-password";
  try {
    const res = await api.post(url, payload);
    console.log("reset", res);
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

export { register, login, forgotPassword, resetPassword };
