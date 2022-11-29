<script setup lang="ts">
import AuthApi from "~/api/Auth.api";
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import ErrorMessage from "../components/ErrorMessage.vue";
import { regexes, socialsConnect } from "~/constants";
import ConnectLink from "./ConnectLink.vue";

const emit = defineEmits(["changeForm"]);
const router = useRouter();

const inputs = ref<{ email: string; password: string }>({
  email: "",
  password: "",
});

const error = ref<string>("");

const change = () => {
  emit("changeForm");
};

const changeInput = (inputName: "email" | "password", value: string) => {
  inputs.value[inputName] = value;
};

const onSubmit = async () => {
  try {
    const result: { id: string } = await AuthApi.login({
      email: inputs.value.email,
      password: inputs.value.password,
    });

    router.push({ name: "Profile", params: { id: result.id } });
  } catch (e: unknown) {
    const err = e as Error;

    error.value = err.message;
  }
};
</script>

<template>
  <div class="flex flex-col gap-y-8">
    <h2 text="left bold lg">Login</h2>
    <ErrorMessage v-if="error" :error="error" />
    <form @submit.prevent="onSubmit" class="flex flex-col gap-3">
      <Input
        @change-input="changeInput"
        type="text"
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
      />
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
        <button @click="change" type="submit" color="blue-400">Register</button>
      </span>
    </div>
  </div>
</template>
