import { adminApi } from './../api/admin';
//@ts-nocheck
import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAdminStore = defineStore({
  id: "admin",
  state: () => ({
    staff: {},
    product: {},
    delete_modal: false,
    update_modal: false,
    modal: false,
  }),
  actions: {
    async getProducts(q: Object) {
      try {
        return await adminApi.getProducts(q);
      } catch (error) {
        // this.error = error?.response?.data?.message
        //   ? error?.response?.data?.message
        //   : error.message;
        // console.log(error);
        console.log("Error while getting products", error);
      }
    },

    async adminSignIn(payload: Object) {
      try {
        return await adminApi.adminLogin(payload);
      } catch (error) {
        console.log("Error while signing in", error);
      }
    },

    async getCategories(q: Object) {
      try {
        return await adminApi.getCategories(q);
      } catch (error) {
        console.log("Error while getting products", error);
      }
    },

    async getBrands(q: Object) {
      try {
        return await adminApi.getBrands(q);
      } catch (error) {
        console.log("Error while getting products", error);
      }
    },

    async getStaffById(id: number) {
      try {
        return await adminApi.getStaffById(id);
      } catch (error) {
        console.log("Error while getting products", error);
      }
    },

    async createProduct(payload: Object) {
      try {
        return await adminApi.createProduct(payload);
      } catch (error) {
        console.log("Error while creating porduct", error);
      }
    },

    async updateProduct(payload: Object, id: number) {
      try {
        return await adminApi.updateProduct(payload, id);
      } catch (error) {
        console.log("Error while updating product", error);
      }
    },

    async deleteProduct(id: number) {
      try {
        return await adminApi.deleteProduct(id);
      } catch (error) {
        console.log("Error while deleting product", error);
      }
    },
  },
});
