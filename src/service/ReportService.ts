import axios from 'axios';

const DEFAULT_URL = 'http://localhost:8000';
export const getAllReports = async (controller) => {
  return await axios.get(DEFAULT_URL + '/reports', { signal: controller.signal });
};

export const getSingleReport = async (id, controller) => {
  return await axios.get(DEFAULT_URL + '/reports/' + id, { signal: controller.signal });
};
