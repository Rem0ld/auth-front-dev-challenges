<script setup lang="ts">
import { ref } from "vue";
import AuthApi from "~/api/Auth.api";
import { socialsConnect, regexes } from "~/constants";
const emit = defineEmits(["changeForm"]);

const inputs = ref<{ email: string; password: string }>({
  email: "",
  password: "",
});

const change = () => {
  emit("changeForm");
};

const changeInput = (inputName: "email" | "password", value: string) => {
  inputs.value[inputName] = value;
};

const onSubmit = async () => {
  console.log(inputs.value.email, inputs.value.password);
  const result = await AuthApi.register({
    email: inputs.value.email,
    password: inputs.value.password
  })
  console.log(result)
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
    <form class="flex flex-col gap-3" @submit.prevent="onSubmit">
      <Input
        @change-input="changeInput"
        type="email"
        name="email"
        :pattern="regexes.email"
        placeholder="Email"
        icon="material-symbols:mail"
        title="Please enter a valid email"
      />
      <Input
        @change-input="changeInput"
        type="password"
        name="password"
        placeholder="Password"
        icon="material-symbols:lock"
        title="Password must contain at least min 8 characters, 1 lowercase, 1 uppercase, 1 special character and 1 digit"
      />
      <Button type="submit" text="Start coding now" />
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
