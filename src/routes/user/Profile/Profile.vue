<script setup lang="ts">
import { useRouter } from "vue-router";
import Button from "../../../components/Button.vue";

defineProps<{
  id: string;
  email?: string;
  bio?: string;
  fullname?: string;
  avatar?: string;
}>();

const router = useRouter();
</script>

<template>
  <div flex flex-col gap="10" mt="8" px="2">
    <div>
      <h2 text="24px">Personal info</h2>
      <p text="sm">Basic info, like your name and photo</p>
    </div>
    <div flex justify-between items-center>
      <div text="left" w="40%">
        <h3 text="24px">Profile</h3>
        <p text="xs">Some info may be visible to other people</p>
      </div>
      <button border bg-white rounded-xl px="6" py="2" w="fit">Edit</button>
    </div>

    <div>
      <div flex justify-between items-center h="90px" border-b border-gray-300>
        <span text-gray-300 uppercase>Photo</span>
        <img w="72px" rounded="lg" :src="avatar" alt="avatar" />
      </div>

      <div flex justify-between items-center h="90px" border-b border-gray-300>
        <span text-gray-300 uppercase>Name</span>
        <div>
          <span>{{ fullname || "n/a" }}</span>
        </div>
      </div>

      <div flex justify-between items-center h="90px" border-b border-gray-300>
        <span text-gray-300 uppercase>Bio</span>
        <div>
          <span>{{ bio || "n/a" }}</span>
        </div>
      </div>

      <div flex justify-between items-center h="90px" border-b border-gray-300>
        <span text-gray-300 uppercase>Email</span>
        <div>
          <span>{{ email }}</span>
        </div>
      </div>

      <div flex justify-between items-center h="90px" border-b border-gray-300>
        <span text-gray-300 uppercase>Password</span>
        <div>
          <span>***********</span>
        </div>
      </div>
    </div>
  </div>
</template>
