<template>
    <p>Http Error Code: <strong>{{ errorCode }}</strong></p>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const errorCode = ref(route.params.code)  
</script>