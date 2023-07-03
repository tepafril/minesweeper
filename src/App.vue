<script lang="ts">
import { defineComponent } from "vue";
import MovingCloud from "./components/MovingCloud.vue";
import WarScene from "./components/WarScene.vue";
import Effect from "./components/UI/Effect.vue";
import AudioSource from "./components/Base64/AudioSource.vue";
import { GameManager, StateEnum } from "./models/GameManager";
import Board from "./components/Game/Board.vue";

export default defineComponent({
  components: {
    MovingCloud,
    WarScene,
    Effect,
    AudioSource,
    Board,
  },
  data() {
    return {
      StateEnum,
      warScene: false as boolean,
      gameManager: {} as GameManager,
    };
  },
  computed: {
    state() {
      return this.gameManager.state;
    },
  },
  methods: {
    start() {
      this.gameManager.set("state", StateEnum.Story);
      this.gameManager.assets.audio.play();
    },
    play() {
      const audio = this.$refs.khmerRepublic as HTMLAudioElement;
      this.gameManager.init({ audio: audio });

      this.warScene = !this.warScene;
      this.warScene
        ? this.gameManager.assets.audio.play()
        : (this.gameManager.assets.audio.pause(),
          (this.gameManager.assets.audio.currentTime = 0));
    },
  },
  mounted() {
    document.getElementById("preloading-container").style.display = "none";
    this.gameManager = GameManager.Instance();
    const audio = this.$refs.khmerRepublic as HTMLAudioElement;
    const bgAudio = this.$refs.bgHappy as HTMLAudioElement;
    this.gameManager.init({ audio: audio, bgAudio: bgAudio });
    document.addEventListener("readystatechange", ($event: any) => {
      if ($event.target.readyState === "complete") {
        this.gameManager.set("state", StateEnum.Ready);
      }
    });
  },
});
</script>

<template>
  <div class="h-screen flex items-center justify-center">
    <audio ref="khmerRepublic" autoplay>
      <AudioSource />
    </audio>
    <audio ref="bgHappy" autoplay>
      <AudioSource />
    </audio>
    <div
      ref="container"
      class="w-[927px] h-[700px] border-[#af753b] border-[1px] absolute"
    >
      <div class="bord1er-[#412c17] bor1der-[8px]">
        <div class="bor1der-[#b78b2d] bo1rder-[4px]">
          <div class="overflow-hidden relative">
            <!-- <div
              class="bg-black text-white text-3xl w-full h-full absolute z-[100] transition-all duration-1000 ease-out"
              :class="[
                state == StateEnum.Loading || state == StateEnum.Ready
                  ? 'top-0'
                  : '-top-[1000px]',
              ]"
            >
              <div
                class="select-none h-full grid place-content-center blink transition-all"
                v-if="state == StateEnum.Loading"
              >
                LOADING...
              </div>
              <div
                class="select-none h-full grid place-content-center blink transition-all cursor-pointer"
                v-if="state == StateEnum.Ready"
                @click="start"
              >
                PRESS START
              </div>
            </div> -->
            <!-- <img class="w-full relative" src="./assets/background.jpg" />
            <MovingCloud /> -->

            <!-- <war-scene v-if="state == StateEnum.Story" /> -->
            <!-- <Effect v-else :delay="100" /> -->
            <Board />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
