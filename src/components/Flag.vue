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
    :class="show && this.flag == 'khmer-republic' ? 'scale-100' : 'scale-0'"
    class="transition-all scale-0 ease-in-out duration-300 absolute top-[55%] left-[50%]"
    src="./../assets/sprites/flag/khmer-republic.png"
  />
  <img
    :class="show && this.flag == 'khmer-rouge' ? 'scale-100' : 'scale-0'"
    class="absolute top-[55%] left-[50%]"
    src="./../assets/sprites/flag/khmer-rouge.png"
  />
  <img
    :class="show && this.flag == 'kingdom-cambodia' ? 'scale-100' : 'scale-0'"
    class="transition-all scale-0 ease-in-out duration-300 absolute top-[55%] left-[50%]"
    src="./../assets/sprites/flag/kingdom-cambodia.png"
  />
</template>

<style scoped></style>
