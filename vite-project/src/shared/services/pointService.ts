import axiosInstance from "../api/axiosInstance";

async function getPoints() {
  return axiosInstance.get("/points/get");
}

async function getPointsById(id: number) {
  return axiosInstance.get(`/points/get/${id}`);
}

async function updatePointsById(id: number) {
  return axiosInstance.put(`/points/get/${id}`);
}

async function deletePointsById(id: number) {
  return axiosInstance.delete(`/points/get/${id}`);
}

async function uploadPoints() {
  return axiosInstance.post("/points/upload", {
    // key1: 'value1', здесь нужно будет файл запихнуть для загрузки
  });
}

async function addPoints(
  id: string,
  address: string,
  when_connected: string,
  is_delivered: boolean,
  days_passed: number,
  approved_ammount: number,
  given_ammount: number
) {
  return axiosInstance.post("/points/upload", {
    id,
    address,
    when_connected,
    is_delivered,
    days_passed,
    approved_ammount,
    given_ammount,
  });
}

const PointService = {
  getPoints,
  getPointsById,
  updatePointsById,
  deletePointsById,
  uploadPoints,
  addPoints,
};

export default PointService;
