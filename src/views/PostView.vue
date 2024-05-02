<script setup>
import PbPosts from '../components/PbPosts.vue'
</script>

<template>
  <main>
    <Suspense>
      <template #default>
        <PbPosts />
      </template>
      <template #fallback>
        <div class="greetings">
          <h1 class="green">Načítání</h1>
        </div>
      </template>
    </Suspense>
  </main>
</template>
