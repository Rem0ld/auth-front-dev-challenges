<script setup lang="ts">
import { Icon } from "@iconify/vue";

withDefaults(
  defineProps<{
    placeholder: string;
    type?: "email" | "text" | "password";
    icon?: string;
    name: string;
    pattern?: string
    title?: string
    error?: string
  }>(),
  {
    type: "text",
    icon: "",
  }
);

</script>

<template>
  <div border="1 gray-400" rounded="8px" py="4" px="3" class="container-input flex gap-3">
    <Icon :icon="icon" color="gray" w="24px" h="24px" />
    <input
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :pattern="pattern"
      w="full"
      outline-none
      :title="title"
      class="dark:bg-hex-121212"
      @input="(e: any) => $emit('changeInput', name, e.target.value)"
    />
  </div>
</template>
