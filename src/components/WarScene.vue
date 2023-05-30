<script lang="ts">
import { defineComponent } from "vue"
import Soldier from "./Soldier.vue"
import RepublicSoldiers from "./RepublicSoldiers.vue"
import KhmerRougeSoldiers from "./KhmerRougeSoldiers.vue"
import CPPSoldiers from "./CPPSoldiers.vue"
import Flag from "./Flag.vue"

export default defineComponent({
  components: {
    Soldier,
    Flag,
    RepublicSoldiers,
    KhmerRougeSoldiers,
    CPPSoldiers,
  },
  data() {
    return {}
  },
  methods: {
    sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms))
    },
  },
  async mounted() {},
})
</script>

<template>
  <div>
    <Flag :delay="1000" :duration="12000" flag="khmer-republic" />
    <Flag :delay="61000" :duration="16000" flag="khmer-rouge" />
    <RepublicSoldiers :delay="0" />
    <KhmerRougeSoldiers :delay="0" />
    <CPPSoldiers :delay="58500" />
  </div>
</template>

<style scoped></style>
