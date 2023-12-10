<script lang="ts">
import { defineComponent } from "vue";
import { sleep } from "../models/Functions";

export default defineComponent({
  props: {
    thumbnail: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: true,
    },
    delay: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      show: false as boolean,
    };
  },
  computed: {
    thumbnailSrc() {
      if (this.thumbnail) {
        return `./sprites/characters/${this.thumbnail}.png`;
      } else return null;
    },
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
  <div
    :class="[show ? 'scale-100 translate-y-0' : 'scale-0 -translate-y-20']"
    class="duration-300 ease-in-out transition transform bg-white text-center py-6 px-10 absolute top-[8%] border-solid border-gray-900 font-medium left-[17%] w-2/3 rounded-3xl border-8 text-3xl flex align-middle"
  >
    <img
      v-if="thumbnailSrc"
      :src="thumbnailSrc"
      alt=""
      class="pr-8 pointer-events-none"
    />
    <div class="grid place-content-center">{{ text }}</div>
  </div>
</template>
