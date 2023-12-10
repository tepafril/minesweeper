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
      if (this.state == StateEnum.Ready) {
        this.gameManager.set("state", StateEnum.Story);
        this.gameManager.assets.audio.play();
      }
    },
    backToMenu() {
      this.gameManager.set("state", StateEnum.Menu);
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
  <div class="h-screen flex items-center justify-center select-none">
    <audio ref="khmerRepublic" autoplay>
      <AudioSource />
    </audio>
    <audio ref="bgHappy" autoplay>
      <AudioSource />
    </audio>
    <div ref="container" class="w-[927px] h-[700px] absolute">
      <img
        class="absolute z-[100000] scale-[1.09] pointer-events-none"
        draggable="false"
        dragstart="false"
        src="./assets/frame.png"
      />
      <div class="bord1er-[#412c17] bor1der-[8px]">
        <div class="bor1der-[#b78b2d] bo1rder-[4px]">
          <div class="overflow-hidden relative">
            <div
              class="bg-black text-white text-3xl w-full h-full absolute z-[100] transition-all duration-1000 ease-out"
              v-if="state != StateEnum.InGame"
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
                CLICK START
              </div>
            </div>
            <img
              class="w-full relative pointer-events-none"
              src="./assets/background.jpg"
            />
            <MovingCloud />

            <war-scene v-if="state == StateEnum.Story" />
            <Effect v-else-if="state == StateEnum.Menu" :delay="100" />
            <Board
              v-else-if="
                state == StateEnum.InGame ||
                state == StateEnum.GameOverExploded ||
                state == StateEnum.GameOverUnveilAll ||
                state == StateEnum.GameOverRetry ||
                state == StateEnum.GameOverWinning
              "
            />
            <div
              v-if="state == StateEnum.GameOverRetry"
              class="select-none flex items-center"
            >
              <img
                draggable="false"
                dragstart="false"
                class="cursor-pointer absolute top-[40%] left-[30%] w-[40%] -z-1 animate-scale transition-all"
                src="./assets/gameover.png"
                @click="gameManager.state = StateEnum.Menu"
              />
            </div>
            <div
              v-else-if="state == StateEnum.GameOverWinning"
              class="select-none flex items-center"
            >
              <img
                draggable="false"
                dragstart="false"
                class="cursor-pointer absolute top-[40%] left-[30%] w-[40%] -z-1 animate-scale transition-all"
                src="./assets/congrats.png"
                @click="gameManager.state = StateEnum.Menu"
              />
            </div>
            <div v-else-if="state == StateEnum.Credits" class="select-none">
              <div class="scale-[.5] absolute z-[100000] top-[25%]">
                <img
                  class="pointer-events-none animate-scale"
                  draggable="false"
                  dragstart="false"
                  src="./assets/developer.png"
                />
              </div>
              <img
                class="pointer-events-none absolute top-[5%] left-[15%] w-[70%] -z-1 animate-rotate transition-all"
                src="/sprites/ui/effect.png"
              />
              <div
                class="text-lg text-white absolute bottom-[6%] left-[6%] hover:underline cursor-pointer"
                @click="backToMenu"
              >
                {{ `<< Back` }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
