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

// const generateRandomText = () => {
//   const words = [
//     'Ahoj',
//     'Jak',
//     'se',
//     'máš',
//     'Jsem',
//     'tady',
//     'na',
//     'kávě',
//     's',
//     'kamarádem',
//     'a',
//     'nevim',
//     'co',
//     'děláme'
//   ]

//   const getRandomWord = () => {
//     const randomIndex = Math.floor(Math.random() * words.length)
//     return words[randomIndex]
//   }

//   let randomText = ''
//   const wordCount = Math.floor(Math.random() * 50000) + 100000
//   for (let i = 0; i < wordCount; i++) {
//     randomText += getRandomWord() + ' '
//   }

//   return randomText.trim()
// }

// const data = {
//   title: 'test',
//   text: generateRandomText()
// }
// const time = new Date().toUTCString()
// const postADD = await PBclient.collection('posts').create(data)
// for (let i = 0; i < 100; i++) {
//   const randomData = {
//     title: 'Příspěvek ' + time + ' ' + i,
//     text: generateRandomText()
//   }
//   await PBclient.collection('posts').create(randomData)
// }
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
