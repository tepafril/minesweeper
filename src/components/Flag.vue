<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  components: {},
  props: {
    delay: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    flag: {
      type: String,
      default: true,
    },
  },
  data() {
    return {
      show: false as boolean,
    }
  },
  methods: {
    sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms))
    },
  },
  async mounted() {
    await this.sleep(this.delay)
    this.show = true
    await this.sleep(this.duration)
    this.show = false
  },
})
</script>

<template>
  <img
    v-if="show && this.flag == 'khmer-republic'"
    class="absolute top-[55%] left-[50%]"
    src="./../assets/sprites/flag/khmer-republic.png"
  />
  <img
    v-if="show && this.flag == 'khmer-rouge'"
    class="absolute top-[55%] left-[50%]"
    src="./../assets/sprites/flag/khmer-rouge.png"
  />
</template>

<style scoped></style>
