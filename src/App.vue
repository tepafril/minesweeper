<script lang="ts">
import { defineComponent } from "vue";
import MovingCloud from "./components/MovingCloud.vue";
import WarScene from "./components/WarScene.vue";
import Effect from "./components/UI/Effect.vue";

export default defineComponent({
  components: {
    MovingCloud,
    WarScene,
    Effect,
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
      class="my-auto mx-auto w-[927px] h-[700px] rounded-2xl border-[#af753b] border-[2px] grid place-content-center"
      @click="play"
    >
      <div class="bord1er-[#412c17] bor1der-[8px]">
        <div class="bor1der-[#b78b2d] bo1rder-[4px]">
          <div class="overflow-hidden relative">
            <img
              class="w-full relative rounded-2xl"
              src="./assets/background.jpg"
            />
            <MovingCloud />
            <war-scene v-if="warScene" />

            <Effect v-else :delay="1000" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
