import axios from 'axios';

const DEFAULT_URL = 'http://localhost:8000';
export const getAllComments = async () => {
  return await axios.get(DEFAULT_URL + '/comments');
};
