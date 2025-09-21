import axios, { AxiosInstance, AxiosRequestConfig, isAxiosError } from "axios";

import { TServiceError } from "./types";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
  /*try {
    if (user?.access_token) {
      config.headers["Authorization"] = `Bearer ${user.access_token}`;
    }
  } catch {
    // eslint-disable-next-line no-console
    console.error("Unable to get a Keycloak User data");
  }*/

  return config;
});

export type ResponseData<T, E = TServiceError> =
  | {
      data: T;
      error: null;
    }
  | {
      error: E;
      data: null;
    };

const request =
  (instance: AxiosInstance = axiosInstance) =>
  async <T>({
    method = "GET",
    params,
    ...otherConfig
  }: AxiosRequestConfig): Promise<ResponseData<T>> => {
    try {
      const response = await instance.request<T>({
        method,
        ...(params && {
          params: Object.entries(params).reduce<typeof params>(
            (result, [key, value]) => {
              if (
                value ||
                typeof value === "number" ||
                typeof value === "boolean"
              ) {
                result[key] = value;
              }

              return result;
            },
            {},
          ),
        }),
        paramsSerializer: {
          indexes: null,
        },
        ...otherConfig,
      });

      return { data: response.data, error: null };
    } catch (error) {
      if (isAxiosError(error)) {
        return {
          data: null,
          error: {
            errorMessage: error.response?.data?.error,
            statusCode: error.response?.status ?? 0,
          },
        };
      }

      return {
        data: null,
        error: {
          errorMessage: "",
          statusCode: 0,
        },
      };
    }
  };

export default request();
