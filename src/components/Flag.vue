<script lang="ts">
import { defineComponent } from "vue";
import { sleep } from "../models/Functions";

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
    };
  },
  methods: {},
  async mounted() {
    await sleep(this.delay);
    this.show = true;
    await sleep(this.duration);
    this.show = false;
  },
});
</script>

<template>
  <img
    :class="show && this.flag == 'peoples-republic' ? 'scale-100' : 'scale-0'"
    class="pointer-events-none transition-all scale-0 ease-in-out duration-300 absolute top-[55%] left-[50%] z-[100]"
    src="./../assets/sprites/flag/peoples_republic_of_kampuchea.png"
  />
  <img
    :class="show && this.flag == 'khmer-republic' ? 'scale-100' : 'scale-0'"
    class="pointer-events-none transition-all scale-0 ease-in-out duration-300 absolute top-[55%] left-[50%] z-[100]"
    src="./../assets/sprites/flag/khmer-republic.png"
  />
  <img
    :class="show && this.flag == 'khmer-rouge' ? 'scale-100' : 'scale-0'"
    class="pointer-events-none absolute top-[55%] left-[50%] z-[100]"
    src="./../assets/sprites/flag/khmer-rouge.png"
  />
  <img
    :class="show && this.flag == 'kingdom-cambodia' ? 'scale-100' : 'scale-0'"
    class="pointer-events-none transition-all scale-0 ease-in-out duration-300 absolute top-[55%] left-[40%] z-[100]"
    src="./../assets/sprites/flag/kingdom-cambodia.png"
  />
</template>

<style scoped></style>
