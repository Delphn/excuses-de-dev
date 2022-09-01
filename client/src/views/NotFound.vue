<!-- a component that shows 404 page with a funny message -->
<template>
  <div class="not-found">
    <h1>Sorry, this page doesn't exist!</h1>
    <img src="../assets/thanos-blip.gif" alt="not found">
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
  .not-found {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px
  }
</style>