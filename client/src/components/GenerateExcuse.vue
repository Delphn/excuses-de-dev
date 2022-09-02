<template>
  <div>
    <!-- button with a loading state during generateExcuse function call -->
    <button  class="generate-btn" @click="generateExcuse" :disabled="loading">
      <div v-if="loading" class="loader-wrapper">
        <div class="loader"></div>
      </div>
      <span v-else>Générer une excuse</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Excuse } from '@/types/ExcusesAPI'
import type { Store } from '@/types/Store'
import { ref, inject } from 'vue'

const store: Store | undefined = inject('store')
const loading = ref(false)
const emit = defineEmits(['get-excuse'])

// function to generate an excuse and emit the event to
// the parent component with the excuseMessage
const generateExcuse = () => {
  const randomTime = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000
  loading.value = true
  setTimeout(() => {
    loading.value = false
    const randomExcuse: Excuse | undefined = store?.getters?.randomExcuse()
    emit('get-excuse', randomExcuse?.message)
  }, randomTime)
}
</script>

<style scoped>
.generate-btn {
  margin: 10px 0;
  width: 150px;
  height: 40px;
}
.loader-wrapper {
  display: flex;
  align-items: center;
  padding-left: 10px;
}

.loader {
  /* center in the middle of the wrapper */
  margin: 0 auto;
  border: 2px solid #f3f3f3;
  border-radius: 70%;
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  width: 17px;
  height: 17px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>