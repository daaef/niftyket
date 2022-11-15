<template>
  <div class="event--card-grid" :class="gridSize === 3 ? 'three' : 'two'">
    <event-card v-for="meta in metadata" :key="meta.id" :meta="meta" :self="linkSelf" />
  </div>
</template>

<script>
import { mapWritableState } from "pinia";
import { useStore } from "@/store";

export default {
  props: {
    gridSize: {
      type: Number,
      default(){
        return 3
      }
    },
    linkSelf: {
      type: Boolean,
      default(){
        return false
      }
    },
    storeId: {
      type: String,
      default(){
        return ''
      }
    }
  },
  setup() {
    const store = useStore()

    return { store }
  },
  computed: {
    ...mapWritableState(useStore, [
      'wallet',
      'details',
      'isConnected',
      'loading',
      'stores',
      'metadata',
    ]),
  },
  async mounted() {
    // await console.log('props',this.storeId)
    await this.store.fetchMetaData(`${this.storeId}`)
  }
}

</script>

<style scoped>

</style>
