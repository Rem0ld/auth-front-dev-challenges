<script setup lang="ts">
import { ref, onMounted } from "vue";
import UserApi from "../../api/User.api";
import Profile from "./Profile/Profile.vue";
import Navbar from "../../components/Navbar.vue";

const props = defineProps<{ id: string }>();
const data = ref(null);
const loading = ref<boolean>(false);
const error = ref(null);

const fetchData = async () => {
  loading.value = true;
  try {
    const result = await UserApi.get(props.id);
    console.log(result);
    data.value = result;
  } catch (e: unknown) {
    const err = e as Error;
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <Navbar :avatar="data?.avatar || data?.avatarUrl || ''" />
  <Profile :id="props.id" />
</template>
