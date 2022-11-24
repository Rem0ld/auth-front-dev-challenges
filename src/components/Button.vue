<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <button
    mt="2"
    p="y-2 x-6"
    w="full"
    text="white"
    bg="blue-500"
    font="semibold"
    class="rounded-lg"
  >
  {{text}}
  </button>
</template>
