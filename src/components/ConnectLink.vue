<script setup lang="ts">
import { Icon } from '@iconify/vue';
defineProps<{ icon: string; name: string; link: string }>();
</script>

<template>
  <div
    class="grid place-items-center border border-gray-400 rounded-full"
  >
    <a
      rel="noreferrer"
      :href="link"
      target="_blank"
      class="p-2"
      :title="name.charAt(0).toUpperCase() + name.slice(1)"
    >
      <Icon :icon="icon" text="gray-500" w="24px" h="24px"
    /></a>
  </div>
</template>
