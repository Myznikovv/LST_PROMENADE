import axiosInstance from "../api/axiosInstance";
import { IUser } from "../interfaces/IUser";

async function login(login: string, password: string): Promise<{ id: number }> {
  return axiosInstance.post("/workers/login", {
    login,
    password,
  });
}

async function getUserById(id: number): Promise<IUser> {
  return axiosInstance.post(`/workers/get/${id}`);
}

const LoginService = {
  login,
  getUserById,
};

export default LoginService;
