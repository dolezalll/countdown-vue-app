<script setup>
import PbPostsList from '../components/PbPostsList.vue'
</script>

<template>
  <main>
    <Suspense>
      <template #default>
        <PbPostsList />
      </template>
      <template #fallback>
        <div class="greetings">
          <h1 class="green">Načítání</h1>
        </div>
      </template>
    </Suspense>
  </main>
</template>
