import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:2000/api",
});

export const getUsers = async () => {
  const res = await instance.get("/users");
  return res.data.users;
};

export const getUser = async ({ id }) => {
  const res = await instance.get(`/user/${id}`);
  return res.data.user;
};

export const addUser = async ({ name, surname, isMarried }) => {
  const res = await instance.post("/add-user", { name, surname, isMarried });
  return res.data.user;
};

export const deleteUser = async ({ id }) => {
  const res = await instance.delete(`/delete-user/${id}`);
  return res.data.user;
};

export const updateUser = async ({ id, isMarried }) => {
  const res = await instance.patch(`/update-marital-status`, { id, isMarried });
  return res.data.user;
};

export const getMarriedUsers = async () => {
  const res = await instance.get(`/users/married`);
  return res.data.count;
};

export const getNotMarriedUsers = async () => {
  const res = await instance.get(`/users/notmarried`);
  return res.data.count;
};
