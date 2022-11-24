<script setup lang="ts">
import {Icon} from "@iconify/vue"
withDefaults(
  defineProps<{
    placeholder: string;
    type?: "text" | "password";
    icon?: string;
  }>(),
  {
    type: "text",
    icon: "",
  }
);
onUpdated(() => {
console.log((isDark.value))

})
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
    />
  </div>
</template>
