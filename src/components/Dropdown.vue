<script setup lang="ts">
import { onMounted, VNodeRef } from "vue";
import { useIsOpen } from "../composables";

const { isOpen, toggle } = useIsOpen();
const refDropdown = ref<VNodeRef | null>(null);

onMounted(() => {
  console.log(refDropdown.value);
});

// TODO: look into watcheffect, unmounting and click event on window
watchEffect(() => {
  console.log(refDropdown.value);
  if (refDropdown.value) {
    refDropdown.value.addEventListener("click", e => {
      console.log(e.target.value);
    });
  }
});
</script>

<template>
  <div relative mr="12px">
    <slot name="button" :toggle="toggle" />
    <Transition>
      <div
        ref="refDropdown"
        v-if="isOpen"
        flex
        flex-col
        absolute
        top="100%"
        left="100%"
        py="3"
        px="2"
        border
        rounded="xl"
        bg-white
        z="1"
        shadow="md"
        class="-translate-x-full translate-y-1 dark:text-white dark:bg-hex-1e1e1e dark:border-gray-600"
      >
        <slot name="content" :toggle="toggle" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
