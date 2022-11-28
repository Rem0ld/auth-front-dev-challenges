<script setup lang="ts">
import AuthApi from "~/api/Auth.api";
import { regexes, socialsConnect } from "~/constants";
const emit = defineEmits(["changeForm"]);
const router = useRouter();

const inputs = ref<{ email: string; password: string }>({
  email: "",
  password: "",
});

const errors = ref<ErrorRegister>({
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
  try {
    const result: { id: string } = await AuthApi.login({
      email: inputs.value.email,
      password: inputs.value.password,
    });
    console.log(result);

    router.push({ name: "/user", params: { id: result.id } });
  } catch (e: unknown) {
    const error = e as ErrorRegister;
    errors.value.email = error.email || "";
    errors.value.password = error.password || "";
  }
};
</script>

<template>
  <div class="flex flex-col gap-y-8">
    <h2 text="left bold lg">Login</h2>
    <form @submit.prevent="onSubmit" class="flex flex-col gap-3">
      <Input
        @change-input="changeInput"
        type="text"
        name="email"
        :pattern="regexes.email"
        placeholder="Email"
        icon="material-symbols:mail"
        title="Please enter a valid email"
        :error="errors.email"
      />
      <Input
        @change-input="changeInput"
        type="password"
        name="password"
        placeholder="Password"
        icon="material-symbols:lock"
        :error="errors.email"
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
        <button @click="change" type="submit" color="blue-400">
          Register
        </button></span
      >
    </div>
  </div>
</template>
