import { BaseQueryFn } from "@reduxjs/toolkit/query/react";
import { AxiosRequestConfig } from "axios";

import { TServiceError } from "@/utils/api/types";
import request from "@/utils/api/request";

export const axiosBaseQuery =
  <ServerResponse, ServerRequest>(
    { baseUrl }: { baseUrl: string } = { baseUrl: "" },
  ): BaseQueryFn<
    {
      url: string;
      params: AxiosRequestConfig["params"];
      method: AxiosRequestConfig["method"];
      headers: AxiosRequestConfig["headers"];
      body: ServerRequest;
    },
    ServerResponse | null,
    TServiceError
  > =>
  async ({ url, params, method, headers, body }) => {
    const result = await request<ServerResponse>({
      url: `${baseUrl}/${url}`,
      method,
      data: body,
      params,
      headers,
    });

    const { error, data } = result;

    return error ? { error } : { data };
  };
