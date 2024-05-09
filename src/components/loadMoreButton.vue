<template>
  <div>
    <button v-if="!isLoading" id="loadMoreBTN" @click="loadMore">Načíst více</button>
    <div v-else class="spinner"></div>
  </div>
</template>
<script>
import PBclient from '../features/pocketbase/index.js'
export default {
  props: ['records'],
  data() {
    return {
      localRecords: JSON.parse(JSON.stringify(this.records)),
      isLoading: false
    }
  },
  methods: {
    async loadMore() {
      if (this.isLoading) return // Přidání kontroly, zda již probíhá načítání
      this.isLoading = true
      const newRecords = await this.fetchMoreRecords()
      this.isLoading = false
      if (newRecords && newRecords.items.length > 0) {
        this.localRecords.items = [...this.localRecords.items, ...newRecords.items]
        this.localRecords.page = newRecords.page
        this.localRecords.hasMore = newRecords.totalItems > this.localRecords.items.length
        this.$emit('update', this.localRecords)
      } else {
        console.error('Nepodařilo se načíst nové záznamy')
        this.localRecords.hasMore = false
        this.$emit('update', this.localRecords)
      }
    },
    async fetchMoreRecords() {
      try {
        const newRecords = await PBclient.collection('posts').getList(
          this.localRecords.page + 1,
          5,
          {
            sort: '-created'
          }
        )
        return newRecords
      } catch (error) {
        console.error('Chyba při načítání záznamů:', error)
        return null
      }
    }
  },
  watch: {
    records: {
      deep: true,
      handler(newVal) {
        this.localRecords = JSON.parse(JSON.stringify(newVal))
      }
    }
  }
}
</script>

<style scoped>
#loadMoreBTN {
  background-color: #4caf50; /* Zelené pozadí */
  border: none; /* Odstranění okrajů */
  color: white; /* Bílý text */
  padding: 10px 32px; /* Nějaké polstrování */
  text-align: center; /* Zarovnaný text */
  text-decoration: none; /* Odstranění podtržení */
  display: inline-block;
  font-size: 16px;
  margin: 25px 2px;
  cursor: pointer; /* Ukazatel myši při najetí */
  border-radius: 12px; /* Zaoblené rohy */
  transition-duration: 0.4s; /* Efekty přechodu */
}

#loadMoreBTN:hover {
  background-color: #055709; /* Tmavě zelené při najetí */
}

.spinner {
  display: inline-block;
  border: 4px solid rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  border-top-color: #fff;
  width: 32px;
  height: 32px;
  animation: spin 1s linear infinite;
  margin: 25px 2px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
