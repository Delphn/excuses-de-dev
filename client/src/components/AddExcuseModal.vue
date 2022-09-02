<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            Ajouter une excuse
            <button class="close-btn"  @click="closeModal">X</button>
          </div>

          <div class="modal-body">
            <textarea v-model="excuseText" rows="4" cols="34" maxlength="50" placeholder="Votre excuse"></textarea>
            <p class="error-msg">{{ errorMessage }}</p>
          </div>

          <div class="modal-footer">
            <button class="btn btn-primary" @click="sendExcuse">Envoyer</button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import type { Store } from '@/types/Store'

// get the value of the show prop
defineProps({ show: Boolean })

const store: Store | undefined = inject('store')
const emit = defineEmits(['close'])
const excuseText = ref('')
const errorMessage = ref('')

const closeModal = () => {
  excuseText.value = ''
  emit('close')
}

// send an excuse to the API
const sendExcuse = () => {
  // if the excuse is empty, display an error message
  if (excuseText.value === '') {
    errorMessage.value = 'Vous devez fournir une excuse !'
    return
  }

  const tags = ["Inexcusable", "random", "Novelty Implementations", "Substance", "Somebody Else's Problem"]

  // get a random number between 800 and 1000
  const httpCode = Math.floor(Math.random() * (1000 - 800 + 1)) + 800

  // get a random word from the list of tags
  const tag = tags[Math.floor(Math.random() * tags.length)]


  const excuse = {
    http_code: httpCode,
    tag: tag,
    message: excuseText.value
  }

  store?.methods?.addExcuse(excuse).then(() => {
    errorMessage.value = ''
    closeModal()
  }).catch((err: string) => {
    errorMessage.value = err
  })
}
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

.error-msg {
  color: red;
  margin-top: 5px;
}
  </style>