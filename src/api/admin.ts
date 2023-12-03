import axiosClient from "@/api/axios/apiClient";

export const adminApi = {
  getProducts(q: Object) {
    const url = `/product/all/${q}`;
    return axiosClient.get(url);
  },

  adminLogin(payload: Object) {
    const url = "/stuff/signin";
    return axiosClient.post(url, payload);
  },

  getCategories(q: Object) {
    const url = `/category/all/${q}`;
    return axiosClient.get(url);
  },

  getBrands(q: Object) {
    const url = `/brand/all/${q}`;
    return axiosClient.get(url);
  },

  getStaffById(id: number) {
    const url = `/stuff/${id}`;
    return axiosClient.get(url);
  },
};
