<script setup>
import PBclient from '../features/pocketbase/index.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const postID = router.currentRoute.value.params.id
let post = null

try {
  post = await PBclient.collection('posts').getOne(postID)
} catch (error) {
  console.error(error)
  router.push({ name: '404' })
}
</script>

<template>
  <div class="greetings" v-if="post">
    <h1 class="green">{{ post.title }}</h1>
    <p>{{ post.text }}</p>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
