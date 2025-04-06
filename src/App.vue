<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <RouterView />
    </transition>
  </div>
</template>
