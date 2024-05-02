<template>
  <div class="text">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  data() {
    return {
      message: 'Příspěvky najdes v navbaru "Posts"'
    }
  }
}
</script>

<style scoped>
.text {
  text-align: center;
  margin-top: 60px;
}
</style>
