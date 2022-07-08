import api from '../api/api';
import { constants as API_CONST } from '../api/url';

export const GetAllSections = (pagination) => {
  return new Promise((resolve, reject) => {
    return api
      .getWithToken(API_CONST.GET_SECTION + pagination)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
