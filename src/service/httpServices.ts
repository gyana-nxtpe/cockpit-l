import { Internal_BASE_URL } from "@/constants/url.constant";
import axios from "axios";

const httpService = {
  serviceHeader: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  serviceHeaderFormData: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data; boundary=any",
  },
  baseURL: Internal_BASE_URL,

  getFullUrl(basePath, url) {
    return `${this.baseURL}/${basePath}${url}`; 
  },

  async getData(
    url,
    isSuccess,
    isError,
    basePath = "partner-profile",
    headers = {} 
  ) {
    const mergedHeaders = {
      ...this.serviceHeader,
      "X-Partner-Code": basePath, 
      ...headers,
    };
    axios
      .get(this.getFullUrl(basePath, url), { headers: mergedHeaders })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          isSuccess(response);
        }
      })
      .catch((error) => {
        if (error?.response?.status === 401) {
          window.location.href = "/error/401";
        } else if (error?.response?.data.error) {
          isError(error?.response?.data.error);
        }
      });
  },

  async postData(
    url,
    data,
    isSuccess,
    isError,
    basePath = "partner-profile",
    headers = {} 
  ) {
    const mergedHeaders = {
      ...(data instanceof FormData
        ? this.serviceHeaderFormData
        : this.serviceHeader),
        "X-Partner-Code": basePath,
        ...headers,
    };
    axios
      .post(this.getFullUrl(basePath, url), data, { headers: mergedHeaders }) 
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          isSuccess(response);
        } else {
          isError(response);
        }
      })
      .catch((error) => {
        if (error?.response?.status === 401) {
          window.location.href = "/error/401";
        } else {
          isError(error.response);
        }
      });
  },

  
};

export default httpService;
