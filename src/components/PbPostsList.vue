<script setup>
import { ref } from 'vue'
import PBclient from '../features/pocketbase/index.js'
import loadMoreButton from '@/components/loadMoreButton.vue'

const records = ref({
  items: [],
  page: 0,
  hasMore: true
})

async function fetchInitialRecords() {
  const initialRecords = await PBclient.collection('posts').getList(1, 5, {
    sort: '-created'
  })
  records.value = initialRecords
  records.value.hasMore = initialRecords.items.length === 5
  console.log(records.value)
}

fetchInitialRecords()

function handleUpdate(updatedRecords) {
  records.value = updatedRecords
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">Příspěvky</h1>
    <ul>
      <li v-for="(record, index) in records.items" :key="record.id">
        <a :href="'/post/' + record.id"> {{ index + 1 }} - {{ record.title }} </a>
      </li>
    </ul>
    <loadMoreButton :records="records" @update="handleUpdate" v-if="records.hasMore" />
    <p v-if="!records.hasMore">Další příspěvky nebyly nalezeny.</p>
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
