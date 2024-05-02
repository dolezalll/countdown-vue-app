<script setup>
import PBclient from '../features/pocketbase/index.js'

// you can also fetch all records at once via getFullList
const records = await PBclient.collection('posts').getFullList({
  sort: '-created'
})
console.log(records)
</script>

<template>
  <div class="greetings">
    <h1 class="green">Příspěvky</h1>
    <ul>
      <li v-for="record in records" :key="record.id">{{ record.title }}</li>
    </ul>
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
