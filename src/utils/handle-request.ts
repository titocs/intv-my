import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios'
import qs from 'qs'
// import { handleRequestErr as handleRequestError } from './handle-error'

// function getProductionServerHost() {
//   const port = window.location.port
//   const protocol = window.location.protocol

//   return port === '' ? `${protocol}//${window.location.hostname}` : `${protocol}//${window.location.host}`;
// }

function getServerBaseUrl() {
  const BASE_URL = 'https://dummyjson.com';
  return BASE_URL;
}

export const request = {
  get: <T>(
    url: string,
    parameters: Object = {},
    additionalConfig: AxiosRequestConfig = {}
  ) =>
    axios
      .get<T>(`${getServerBaseUrl()}${url}`, {
        params: parameters,
        paramsSerializer: (parameters) =>
          qs.stringify(parameters, { arrayFormat: 'repeat' }),
        ...additionalConfig,
      })
      // .catch((error) => handleRequestError(error)),
      .catch((error) => {
        return error
      }),

  post: <T>(
    url: string,
    payload: Object = {},
    additionalConfig: AxiosRequestConfig = {}
  ) =>
    axios
      .post<T>(`${getServerBaseUrl()}${url}`, payload, {
        ...additionalConfig,
      }).catch((error) => {
        return error
      }),
      // .catch((error) => handleRequestError(error)),

  put: <T>(
    url: string,
    payload: Object = {},
    additionalConfig: AxiosRequestConfig = {}
  ) =>
    axios
      .put<T>(`${getServerBaseUrl()}${url}`, payload, {
        ...additionalConfig,
      }).catch((error) => {
        return error
      }),
      // .catch((error) => handleRequestError(error)),

  patch: <T>(
    url: string,
    payload: Object = {},
    additionalConfig: AxiosRequestConfig = {}
  ) =>
    axios
      .patch<T>(`${getServerBaseUrl()}${url}`, payload, {
        ...additionalConfig,
      }).catch((error) => {
        return error
      }),
      // .catch((error) => handleRequestError(error)),

  delete: <T>(url: string, additionalConfig: AxiosRequestConfig = {}) =>
    axios
      .delete<T>(`${getServerBaseUrl()}${url}`, {
        ...additionalConfig,
      }).catch((error) => {
        return error
      }),
      // .catch((error) => handleRequestError(error)),
}