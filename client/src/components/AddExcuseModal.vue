<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            Ajouter une excuse
            <button class="close-btn"  @click="$emit('close')">X</button>
          </div>

          <div class="modal-body">
            <!-- a textarea of text max 250 characters -->
            <textarea v-model="excuseText" rows="4" cols="34" maxlength="50" placeholder="Votre excuse"></textarea>
          </div>

          <div class="modal-footer">
            <!-- a send button to send an excuse through the API and store it in the MongoDB -->
            <!-- <button class="btn btn-primary" @click="sendExcuse">Envoyer</button> -->
            <!-- a button to call express API and get an excuse-->
            <!-- <button @click="$emit('get-excuse', excuseMessage)" class="btn btn-primary">Get Excuse</button> -->
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  show: Boolean
})

const excuseText = ref('')

// send an excuse to the API
// const sendExcuse = async () => {
//   const response = await fetch('http://localhost:3000/api/excuses', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ excuse: excuseText.value })
//   })
//   const data = await response.json()
//   console.log(data)
//   $emit('close')
// }
</script>

<style scoped>
  .modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.close-btn {
  float: right;
}
  </style>