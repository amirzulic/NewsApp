import axios from 'axios';

const DEFAULT_URL = 'http://localhost:8000';
export const getAllReports = async () => {
  return await axios.get(DEFAULT_URL + '/reports');
};

export const getSingleReport = async (id) => {
  return await axios.get(DEFAULT_URL + '/reports/' + id);
};
