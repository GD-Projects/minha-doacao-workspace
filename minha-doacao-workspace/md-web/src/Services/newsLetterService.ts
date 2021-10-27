import api from './api';

export const emailPost = async (adressEmail: string) => {
  await api.post('/newsLetter', {
    email: adressEmail,
  });
};
