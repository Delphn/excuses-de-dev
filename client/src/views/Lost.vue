<template>
    <div class="lost">
        <h1>I'm lost</h1>
        <img src="../assets/lost.gif" alt="lost">
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
    
// redirect to the home page after 5 seconds
onMounted(() => {
    setTimeout(() => {
        router.push('/')
    }, 5000)
})

</script>

<style scoped>
.lost {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.lost h1 {
    margin-bottom: 30px;
}
</style>