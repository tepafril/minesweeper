<script lang="ts">
import { defineComponent } from "vue";
import Soldier from "./Soldier.vue";
import RepublicSoldiers from "./RepublicSoldiers.vue";
import KhmerRougeSoldiers from "./KhmerRougeSoldiers.vue";
import CPPSoldiers from "./CPPSoldiers.vue";
import Flag from "./Flag.vue";
import { GameManager, StateEnum } from "./../models/GameManager";

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
      this.gameManager.set("state", StateEnum.InGame);
      this.gameManager.assets.audio.pause();
      this.gameManager.assets.bgAudio.play();
    },
  },
  async mounted() {
    this.gameManager = GameManager.Instance();
    await this.sleep(170000);
    this.gameManager.set("state", StateEnum.InGame);
    this.gameManager.assets.audio.play();
  },
});
</script>

<template>
  <div>
    <Flag :delay="1000" :duration="12000" flag="khmer-republic" />
    <Flag :delay="61000" :duration="16000" flag="khmer-rouge" />
    <Flag :delay="120000" :duration="16000" flag="kingdom-cambodia" />
    <RepublicSoldiers :delay="0" />
    <KhmerRougeSoldiers :delay="0" />
    <CPPSoldiers :delay="58500" />
    <div
      class="text-xl font-bold text-white absolute bottom-[5%] left-[47%] underline cursor-pointer"
      @click="skip"
    >
      skip
    </div>
  </div>
</template>

<style scoped></style>
