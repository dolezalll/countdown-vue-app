<script>
export default {
  methods: {
    goHome() {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
<template>
  <div>
    <h1>Ajejeje chyba</h1>
    <p>Tady by si asi neměl být.</p>
    <button class="custom-button" @click="goHome">Jít domu</button>
  </div>
</template>

<style>
.custom-button {
  background-color: green;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
