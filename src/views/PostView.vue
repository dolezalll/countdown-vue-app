<script setup>
import post from '../components/post.vue'
</script>

<template>
  <main>
    <Suspense>
      <template #default>
        <post />
      </template>
      <template #fallback>
        <div class="greetings">
          <h1 class="green">Načítání příspěvku...</h1>
        </div>
      </template>
    </Suspense>
  </main>
</template>
