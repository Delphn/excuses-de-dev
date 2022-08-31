<template>
  <div>
    <!-- button with a loading state during generateExcuse function call -->
    <button  class="generate-btn" @click="generateExcuse" :disabled="loading">
      <div v-if="loading" class="loader-wrapper">
        <div class="loader"></div><span class="loader--text">loading</span>
      </div>
      <span v-else>Générer une excuse</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)
const excuseMessage = ref("Yeah, I din't do it")
const emit = defineEmits(['get-excuse'])

// function to generate an excuse and emit the event to
// the parent component with the excuseMessage
const generateExcuse = () => {
  const randomTime = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000

  console.log("randomTime", randomTime)
  loading.value = true
  setTimeout(() => {
    console.log('generateExcuse')
    loading.value = false
    emit('get-excuse', excuseMessage)
  }, randomTime)
}
</script>

<style scoped>
.generate-btn {
  margin: 10px 0;
  width: 100px;
}
.loader-wrapper {
  display: flex;
  align-items: center;
  padding-left: 10px;
}

.loader--text {
  color: black;
  padding-left: 10px;
}

.loader {
  border: 2px solid #f3f3f3;
  border-radius: 70%;
  border-top: 2px solid black;
  border-right: 2px solid black;
  width: 7px;
  height: 7px;
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