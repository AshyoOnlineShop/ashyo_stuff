<template>
  <div class="w-full h-screen flex justify-center items-center bg-global_grey">
    <div
      class="w-[65%] flex flex-col justify-center items-center gap-8 bg-global_grey h-full"
    >
      <div class="w-full text-center">
        <h1
          class="text-[36px] text-global_blue font-medium font-mono tracking-wider select-none"
        >
          SIGN IN
        </h1>
        <p class="text-[20px] text-global_blue"></p>
      </div>
      <vee-form
        :validation-schema="schema"
        @submit="save"
        class="w-3/5 flex flex-col gap-5"
      >
        <VInput
          type="text"
          name="email"
          label="Email"
          placeholder="example@gmail.com"
        ></VInput>
        <VPasswordInput
          name="password"
          placeholder="***************"
        ></VPasswordInput>
        <VButton btn_type="primary" :isLoading="loading" type="submit">
          {{ btn_title }}
        </VButton>
      </vee-form>
    </div>
  </div>
</template>

<script setup lang="ts">
//@ts-nocheck
import { computed, ref } from "vue";
import VInput from "@/components/form/VInput.vue";
import VPasswordInput from "@/components/form/VPasswordInput.vue";
import VButton from "@/components/form/VButton.vue";
import router from "../../router/index";
import { useAdminStore } from "../../stores/admin";

const store = useAdminStore();

const schema = computed(() => {
  return {
    email: "required|email:20",
    password: "required|min:3|max:15",
  };
});

const loading = ref(false);
const btn_title = computed(() => {
  if (loading.value) {
    return "Loading";
  } else {
    return "Send";
  }
});

const save = async (values) => {
  // console.log(values);
  const data = await store.adminSignIn(values);  

  localStorage.setItem("role", data?.stuff.role);
  localStorage.setItem("token", data?.tokens?.access_token);
  store.staff = data.stuff
  if (data.stuff.role === "admin") {
    
    router.push({ name: "admin" });
  } else if (data.stuff.role === "deliver") {
    router.push({ name: "deliver" });
  }
};
</script>

<style lang="scss" scoped></style>
