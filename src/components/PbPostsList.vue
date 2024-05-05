<script setup>
import PBclient from '../features/pocketbase/index.js'

// you can also fetch all records at once via getFullList
// const records = await PBclient.collection('posts').getFullList({
//   sort: '-created'
// })

const records = await PBclient.collection('posts').getList(1, 5, {
  sort: '-created'
})

async function loadMore() {
  const newRecords = await PBclient.collection('posts').getList(records.page + 1, 5, {
    sort: '-created'
  })
  records.items = records.items.concat(newRecords.items)
  records.page = newRecords.page
  console.log(records)
}

console.log(records)
</script>

<template>
  <div class="greetings">
    <h1 class="green">Příspěvky</h1>
    <ul>
      <li v-for="record in records.items" :key="record.id">
        <a :href="'/post/' + record.id"> {{ record.title }} </a>
      </li>
    </ul>
    <button id="loadMoreBTN" @click="loadMore">Load More</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

#loadMoreBTN {
  background-color: #4caf50; /* Green background */
  border: none; /* Remove borders */
  color: white; /* White text */
  padding: 10px 32px; /* Some padding */
  text-align: center; /* Centered text */
  text-decoration: none; /* Remove underline */
  display: inline-block;
  font-size: 16px;
  margin: 25px 2px;
  cursor: pointer; /* Mouse pointer on hover */
  border-radius: 12px; /* Rounded corners */
  transition-duration: 0.4s; /* Transition effects */
}

#loadMoreBTN:hover {
  background-color: #055709; /* Darker green on hover */
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
