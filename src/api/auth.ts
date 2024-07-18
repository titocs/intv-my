import { request } from "../utils/handle-request";
import { Token } from "../utils/token";

const BASE_AUTH_URL = '/auth';

export const authApi = {
  login: (payload) => request.post(`${BASE_AUTH_URL}/login`, payload),
  getUser: () => request.get(`${BASE_AUTH_URL}/me`, {}, {
    headers: {
      'Authorization': `Bearer ${Token.getLoggedInIdentifier()}`,
    }
  })
}