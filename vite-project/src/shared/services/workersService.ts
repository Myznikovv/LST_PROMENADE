import axiosInstance from "../api/axiosInstance";
import IWorker from "../interfaces/IWorker";

async function getWorkers(): Promise<IWorker[]> {
  return axiosInstance.get(`/workers/get`);
}

async function getWorkersById(id: number): Promise<IWorker> {
  return axiosInstance.get(`/workers/get/${id}`);
}

const WorkersService = {
  getWorkersById,
  getWorkers,
};

export default WorkersService;
