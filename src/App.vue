<script lang="ts">
import { defineComponent } from "vue";
import MovingCloud from "./components/MovingCloud.vue";
import WarScene from "./components/WarScene.vue";

export default defineComponent({
  components: {
    MovingCloud,
    WarScene,
  },
  data() {
    return {
      warScene: false as boolean,
    };
  },
  methods: {
    play() {
      const audio = this.$refs.khmerRepublic as any;
      this.warScene = !this.warScene;
      this.warScene ? audio.play() : (audio.pause(), (audio.currentTime = 0));
    },
  },
  mounted() {},
});
</script>

<template>
  <div class="">
    <audio hidden="true" ref="khmerRepublic" autoplay>
      <source src="./assets/audio/completed.mp3" type="audio/mpeg" />
    </audio>
    <div
      ref="container"
      class="my-auto mx-auto w-[927px] h-[700px] border-[#d19d5c] border-[12px] grid place-content-center"
      @click="play"
    >
      <div class="overflow-hidden relative">
        <img class="w-full relative" src="./assets/background.jpg" />
        <MovingCloud />
        <war-scene v-if="warScene" />
      </div>
    </div>
  </div>
</template>

<style></style>
