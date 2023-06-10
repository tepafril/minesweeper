<script lang="ts">
import { defineComponent } from "vue";
import MovingCloud from "./components/MovingCloud.vue";
import WarScene from "./components/WarScene.vue";
import Effect from "./components/UI/Effect.vue";
import { GameManager, StateEnum } from "./models/GameManager";

export default defineComponent({
  components: {
    MovingCloud,
    WarScene,
    Effect,
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
    canplay() {
      console.log("canplay");
    },
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
    this.gameManager = GameManager.Instance();
    const audio = this.$refs.khmerRepublic as HTMLAudioElement;
    this.gameManager.init({ audio: audio });
    const audio2 = new Audio("./audio/completed.mp3");
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        console.log("Page completed with image and files!");
        audio2.play();
      }
    };
  },
});
</script>

<template>
  <div class="h-screen flex items-center justify-center">
    <audio @canplay="canplay" ref="khmerRepublic" autoplay>
      <source src="./assets/audio/completed.mp3" type="audio/mpeg" />
    </audio>
    <div
      ref="container"
      class="w-[927px] h-[700px] border-[#af753b] border-[10px]"
    >
      <div class="bord1er-[#412c17] bor1der-[8px]">
        <div class="bor1der-[#b78b2d] bo1rder-[4px]">
          <div class="overflow-hidden relative">
            <div
              class="bg-black text-white text-3xl w-full h-full absolute z-[100] transition-all duration-1000 ease-out"
              :class="[state == StateEnum.Opening ? 'top-0' : '-top-[1000px]']"
            >
              <div
                class="select-none h-full grid place-content-center blink transition-all cursor-pointer"
                @click="start"
              >
                PRESS START
              </div>
            </div>
            <img class="w-full relative" src="./assets/background.jpg" />
            <MovingCloud />
            <war-scene v-if="state == StateEnum.Story" />

            <Effect v-else :delay="1000" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blink {
  animation: blinker 1s infinite;
}

@keyframes blinker {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
