<script setup lang="ts">
import { capFirstLetter } from "../utils/stringManipulation";

defineProps(["error"]);
</script>

<template>
  <Transition>
    <div
      grid
      place-items-center
      bg="red-100"
      rounded="5px"
      mt="-3"
      min-h="40px"
    >
      <span text="red-500">{{ capFirstLetter(error) }}</span>
    </div>
  </Transition>
</template>
