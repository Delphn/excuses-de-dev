<template>
  <div class="home">
    <h1 class="title">Ma super application</h1>
    <main class="content">
      <div>{{ excuseMessage }}</div>
      <GenerateExcuse @get-excuse="getExcuse" />
      <AddExcuseModal :show="showModal" />
      
      <Teleport to="body">
        <!-- use the modal component, pass in the prop -->
        <AddExcuseModal :show="showModal" @close="showModal = false" />
      </Teleport>
      <button @click="showModal = true">Ajouter une excuse</button>
    </main>
  </div>
</template>

<script setup lang="ts">
import GenerateExcuse from '@/components/GenerateExcuse.vue'
import AddExcuseModal from '@/components/AddExcuseModal.vue'
import { ref } from 'vue'

const excuseMessage = ref('')
const showModal = ref(false)

const getExcuse = (excuse: string) => {
  excuseMessage.value = excuse
}

</script>

<style>
  /* center the content of this page */
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }

/* on page load animate the title in the center of the page with fadeIn animation for 2 second, then move it up to the top */
  .title {
    animation: fadeIn 5s;
    animation-delay: 0s;
  }

  @keyframes fadeIn {
    from {
      top: 500px;
      position: relative;
    }
    to {top: 50px;}
  }
</style>
