<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <label
    for="my-drawer"
    aria-label="close sidebar"
    class="drawer-overlay"
  />
  <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
    <!-- Sidebar content here -->
    <li>
      <a @click="router.push({name: 'Home'})">Home</a>
    </li>
    <li>
      <a @click="router.push({name: 'IsolationCalculator'})">Calculator</a>
    </li>
  </ul>
</template>
