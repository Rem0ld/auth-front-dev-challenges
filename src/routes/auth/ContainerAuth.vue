<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import Register from "../../components/Register.vue";
import Login from "../../components/Login.vue";
import { isDark, toggleDark } from "../../composables/index";

const isLoginForm = ref(true);

const changeForm = () => {
  isLoginForm.value = !isLoginForm.value;
};
</script>

<template>
  <div
    h="full"
    max-w="500px"
    flex
    flex-col
    m="auto"
    justify-between
    sm:items-center
    sm:justify-center
  >
    <div
      class="container-auth gap-y-8"
      flex
      flex-col
      w="full"
      border="gray-400"
      sm:border
      sm:rounded="24px"
      sm:p="14"
    >
      <div class="flex justify-between">
        <img
          v-if="!isDark"
          src="../../../public/authentication-app-master/devchallenges.svg"
          alt="logo devChallenges"
        />
        <img
          v-else
          src="../../../public/authentication-app-master/devchallenges-light.svg"
          alt="logo devChallenges"
        />
        <button icon-btn @click="toggleDark()">
          <Icon
            v-if="!isDark"
            icon="carbon:moon"
            text="gray-500"
            w="24px"
            h="24px"
          />
          <Icon v-else icon="carbon:sun" text="white" w="24px" h="24px" />
        </button>
      </div>
      <Login v-if="isLoginForm" @change-form="changeForm" />
      <Register v-else @change-form="changeForm" />
    </div>
    <div flex justify-between w="full" mt="1" text="14px gray-400">
      <span>created by <span class="underline">Rem0ld </span></span>
      <span>devChallenges.io</span>
    </div>
  </div>
</template>
