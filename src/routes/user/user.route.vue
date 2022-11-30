<script setup lang="ts">
import { ref, onMounted } from "vue";
import UserApi from "../../api/User.api";
import Profile from "./Profile/Profile.vue";
import Navbar from "../../components/Navbar.vue";
import { KEY_ACCESS_TOKEN } from "~/constants";

const router = useRouter();

const props = defineProps<{ id: string }>();

const data = ref<TUser | null>(null);
const loading = ref<boolean>(false);
const error = ref<string | null>(null);

const fetchData = async () => {
  loading.value = true;
  try {
    const result: TUser = await UserApi.get(props.id);
    data.value = result;

    if (!result.avatar && !result.avatarUrl) {
      const ava = `https://avatars.dicebear.com/api/identicon/${Math.random()
        .toString(36)
        .slice(2)}.svg`;

      data.value.avatarUrl = ava;
    }
  } catch (e: unknown) {
    const err = e as Error;

    if (err.message.includes("JWT expired")) {
      localStorage.removeItem(KEY_ACCESS_TOKEN);
      return router.replace({ name: "Home" });
    }

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
  <Navbar :avatar="data?.avatar || data?.avatarUrl" />
  <Profile
    :id="props.id"
    :avatar="data?.avatar || data?.avatarUrl"
    :bio="data?.bio"
    :fullname="data?.fullname"
    :email="data?.email"
  />
</template>
