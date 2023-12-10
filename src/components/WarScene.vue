<script lang="ts">
import { defineComponent } from "vue";
import Soldier from "./Soldier.vue";
import RepublicSoldiers from "./RepublicSoldiers.vue";
import KhmerRougeSoldiers from "./KhmerRougeSoldiers.vue";
import CPPSoldiers from "./CPPSoldiers.vue";
import Flag from "./Flag.vue";
import { GameManager, StateEnum } from "./../models/GameManager";
import { sleep } from "../models/Functions";

export default defineComponent({
  components: {
    Soldier,
    Flag,
    RepublicSoldiers,
    KhmerRougeSoldiers,
    CPPSoldiers,
  },
  data() {
    return {
      gameManager: {} as GameManager,
    };
  },
  methods: {
    sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    skip() {
      this.gameManager.set("state", StateEnum.Menu);
      this.gameManager.assets.audio.pause();
      this.gameManager.assets.audio.currentTime = 182;
      this.gameManager.assets.audio.play();
    },
  },
  async mounted() {
    this.gameManager = GameManager.Instance();
    await sleep(182000 - 2000);
    this.gameManager.assets.audio.pause();
    this.gameManager.set("state", StateEnum.Menu);
    this.gameManager.assets.audio.currentTime = 182;
    this.gameManager.assets.audio.play();
  },
});
</script>

<template>
  <div>
    <Flag :delay="1000" :duration="12000" flag="khmer-republic" />
    <Flag :delay="61000" :duration="16000" flag="khmer-rouge" />
    <Flag :delay="110000" :duration="14000" flag="peoples-republic" />
    <Flag :delay="124000" :duration="16000" flag="kingdom-cambodia" />
    <RepublicSoldiers :delay="0" />
    <KhmerRougeSoldiers :delay="0" />
    <CPPSoldiers :delay="58500" />
    <div
      class="text-lg text-white absolute bottom-[6%] right-[6%] hover:underline cursor-pointer"
      @click="skip"
    >
      Skip >>
    </div>
  </div>
</template>

<style scoped></style>
