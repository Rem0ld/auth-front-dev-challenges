<script setup lang="ts">
import { isDark } from "../composables";
import { Icon } from "@iconify/vue";

const props = defineProps<{
  avatar?: string;
}>();

const ava =
  props.avatar ||
  `https://avatars.dicebear.com/api/identicon/${Math.random()
    .toString(36)
    .slice(2)}.svg`;
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

    <div relative>
      <div w="32px" rounded="md">
        <img :src="ava" alt="Avatar" />
      </div>
      <div
        flex
        flex-col
        absolute
        bg-white
        rounded="lg"
        py="3"
        px="2"
        top="100%"
        left="100%"
        class="-translate-x-full translate-y-1 border dark:text-white dark:bg-hex-1e1e1e dark:border-gray-600"
      >
        <div
          flex
          items-center
          gap="3"
          h="39px"
          w="200px"
          py="2"
          px="3"
          rounded="lg"
          class="hover:dark:bg-gray-500"
        >
          <Icon icon="mdi:person-circle" w="16px" h="16px" />
          <span> My Profile </span>
        </div>

        <div w="full" h="2px" class="dark:bg-white" my="3" rounded="full" />
        <div
          flex
          items-center
          gap="3"
          h="39px"
          w="200px"
          py="2"
          px="3"
          rounded="lg"
          class="hover:dark:bg-gray-500 text-red-500"
        >
          <Icon icon="material-symbols:exit-to-app-rounded" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  </div>
</template>
