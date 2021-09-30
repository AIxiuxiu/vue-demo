import store from '@/store/index';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus';

const baseURL = import.meta.env.DEV && import.meta.env.VITE_OPEN_PROXY === 'true' ? '/proxy/' : import.meta.env.VITE_APP_API_BASEURL?.toString();

const http: AxiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 60000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
});

http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (sessionStorage.getItem('token')) {
      config.headers.authorization = sessionStorage.getItem('token');
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response: AxiosResponse) => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    if (response.status === 200 && response.data) {
      // 未设置状态码则默认成功状态
      const code = response.data.code || 0;
      if (code == 0) {
        return Promise.resolve(response.data);
      } else if (code == 403) {
        ElMessageBox.confirm('登录状态已过期，您可以继续留在该页面，或者重新登录', '系统提示', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.commit('USER_LOGOUT');
          location.href = process.env.VUE_APP_PUBLIC_PATH + '/login';
        });
      } else if (response.data && response.data.msg && response.data.msg != '') {
        ElMessage({
          message: response.data.msg,
          type: 'error'
        });
        return Promise.reject(response);
      }
    } else {
      return Promise.reject(response);
    }
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

interface Get {
  <T>(url: string, params?: object, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
}

interface Post {
  <T>(url: string, data?: object, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
}

export const get: Get = async (url, params, config) => http.get(url, { params, ...config });

export const post: Post = async (url, data, config) => http.post(url, data, config);

export default http;
