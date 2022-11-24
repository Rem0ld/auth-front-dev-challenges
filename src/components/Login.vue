<script setup lang="ts">
import { socialsConnect } from '~/constants';
const emit = defineEmits(["changeForm"]);

const change = () => {
  emit("changeForm");
};
</script>

<template>
  <div class="flex flex-col gap-y-8">
    <h2 text="left bold lg">Login</h2>
    <form class="flex flex-col gap-3">
      <Input type="text" placeholder="Email" icon="material-symbols:mail" />
      <Input type="password" placeholder="Password" icon="material-symbols:lock" />
      <Button text="Login" />
    </form>
    <div class="flex flex-col gap-y-6">
      <span class="text-sm text-gray-400"
        >or continue with these social profile</span
      >
      <div class="flex gap-6 justify-center">
        <ConnectLink
          v-for="social in socialsConnect"
          :name="social.name"
          :link="social.link"
          :icon="social.icon"
          :key="social.name"
        />
      </div>
      <span class="text-sm text-gray-400"
        >Don't have an account yet?
        <button @click="change" color="blue-400">Register</button></span
      >
    </div>
  </div>
</template>
