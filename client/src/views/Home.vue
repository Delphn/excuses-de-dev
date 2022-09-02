<template>
  <div>
    <h1 class="title">Ma super application</h1>
    <main class="content">
      <div>{{ excuseMessage }}</div>
      <GenerateExcuse @get-excuse="getExcuse" />
      <AddExcuseModal :show="showModal" />
      
      <Teleport to="body">
        <!-- use the modal component, pass in the prop -->
        <AddExcuseModal :show="showModal" @close="showModal = false" />
      </Teleport>
      <button class="add-excuse-btn" @click="showModal = true">Ajouter une excuse</button>
    </main>
  </div>
</template>

<script setup lang="ts">
import AddExcuseModal from '@/components/AddExcuseModal.vue'
import { ref } from 'vue'
import GenerateExcuse from '../components/GenerateExcuse.vue'

const excuseMessage = ref('')
const showModal = ref(false)

const getExcuse = (excuse: string) => {
  excuseMessage.value = excuse
}

</script>

<style>
/* align content horizontally */
.content, .title {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.add-excuse-btn {
  width: 150px;
  height: 40px;
}


/* on page load animate the title in the center of the page with fadeIn animation for 2 second, then move it up to the top */

.title {
  animation: fadeInTitle 5s;
  animation-delay: 0s;
}

@keyframes fadeInTitle  {
  from {
    top: 50vh;
    opacity:0;
    position: relative;
  }
  to {
    top: 50px;
    opacity:1;
  }
}


/* hide the content class for the first 5 seconds */
.content {
  animation: 2s fadeInContent;
  animation-fill-mode: forwards;
  visibility: hidden;
}


@keyframes fadeInContent {
  99% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
}

</style>
