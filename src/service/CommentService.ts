import axios from 'axios';

const DEFAULT_URL = 'http://localhost:8000';
export const getAllComments = async (id, controller) => {
  return await axios.get(DEFAULT_URL + '/comments/' + id, { signal: controller.signal });
};

export const postComment = async (comment) => {
  return await axios.post(DEFAULT_URL + '/new-comment', comment);
};
