<script setup lang="ts">
import { Icon } from "@iconify/vue";

withDefaults(
  defineProps<{
    placeholder: string;
    type?: "text" | "password";
    icon?: string;
    name: string;
  }>(),
  {
    type: "text",
    icon: "",
  }
);

</script>

<template>
  <div border="1 gray-400" rounded="8px" py="4" px="3" class="flex gap-3">
    <Icon icon-btn :icon="icon" color="gray" w="24px" h="24px" />
    <input
      :type="type"
      :placeholder="placeholder"
      w="full"
      outline-none
      class="dark:bg-hex-121212"
      @input="(e: any) => $emit('changeInput', name, e.target.value)"
    />
  </div>
</template>
