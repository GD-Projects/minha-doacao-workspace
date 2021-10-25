/* eslint-disable consistent-return */

import api from './api';

export const emailPost = async (adressEmail: string) => {
  try {
    const response = await api.post('/newsLetter', { email: adressEmail });
    console.log(`Foi até NewsLwetter=${adressEmail}`);
    return response;
  } catch {
    console.log('Deu ruim');
  }
};
