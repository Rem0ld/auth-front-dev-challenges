<script setup lang="ts">
import { socialsConnect } from "~/constants";
const emit = defineEmits(["changeForm"]);

const change = () => {
  emit("changeForm");
};
</script>

<template>
  <div class="flex flex-col gap-y-8">
    <div class="flex flex-col gap-2 w-10/12">
      <h2 text="left lg" font="bold">
        Join thousands of learners from around the world
      </h2>
      <p text="left" font="normal">
        Master web development by making real-life projects. There are multiple
        paths for you to choose.
      </p>
    </div>
    <form class="flex flex-col gap-3">
      <Input type="text" placeholder="Email" icon="material-symbols:mail" />
      <Input type="password" placeholder="Password" icon="material-symbols:lock" />
      <Button text="Start coding now" />
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
        >Already a member?
        <button @click="change" color="blue-400">Login</button></span
      >
    </div>
  </div>
</template>
