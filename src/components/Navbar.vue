<script setup lang="ts">
import { isDark } from "../composables";
import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";
import AuthApi from "../api/Auth.api";

defineProps<{
  avatar?: string;
}>();

const router = useRouter();

const logout = async () => {
  await AuthApi.logout();
  router.replace({ name: "Home" });
};
</script>

<template>
  <div flex justify-between>
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
    <Dropdown>
      <template #button="{ toggle }">
        <button @click="toggle" w="32px" rounded="md">
          <img :src="avatar" alt="Avatar" rounded="md" />
        </button>
      </template>
      <template #content="{ toggle }">
        <button
          flex
          items-center
          gap="3"
          h="39px"
          w="200px"
          py="2"
          px="3"
          rounded="lg"
          class="hover:bg-gray-100 hover:dark:bg-gray-500"
        >
          <Icon icon="mdi:person-circle" w="24px" h="24px" />
          <span> My Profile </span>
        </button>
        <button
          flex
          items-center
          gap="3"
          h="39px"
          w="200px"
          py="2"
          px="3"
          rounded="lg"
          class="hover:bg-gray-100 hover:dark:bg-gray-500"
          @click="
            () => {
              toggleDark();
              toggle();
            }
          "
        >
          <Icon v-if="!isDark" icon="carbon:moon" w="24px" h="24px" />
          <Icon v-else icon="carbon:sun" text="white" w="24px" h="24px" />
          <span>Change theme</span>
        </button>

        <div
          w="full"
          h="2px"
          class="bg-gray-200 dark:bg-white"
          my="3"
          rounded="full"
        />
        <button
          @click="
            () => {
              logout();
              toggle();
            }
          "
          flex
          items-center
          gap="3"
          h="39px"
          w="200px"
          py="2"
          px="3"
          rounded="lg"
          class="hover:bg-gray-100 hover:dark:bg-gray-500 text-red-500"
        >
          <Icon icon="material-symbols:exit-to-app-rounded" w="24px" h="24px" />
          <span>Logout</span>
        </button>
      </template>
    </Dropdown>
  </div>
</template>
