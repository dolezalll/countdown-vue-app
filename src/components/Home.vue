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
      message:
        'Příspěvky najdeš v menu jako "Blog" + nově si můžeš přečíst jednotlivý příspěvek a také pokud se omylem dostaneš na adresu, která neexistuje, tak se ti zobrazí 404 stránka.'
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
