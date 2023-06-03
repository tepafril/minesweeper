<script lang="ts">
import { defineComponent } from "vue"
import Soldier from "./Soldier.vue"
import Explosion from "./Explosion.vue"
import Dialog from "./Dialog.vue"

export default defineComponent({
  components: {
    Soldier,
    Explosion,
    Dialog,
  },
  props: {
    delay: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      show: false as boolean,
    }
  },
  methods: {
    sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms))
    },
  },
  async mounted() {
    await this.sleep(this.delay)
    await this.sleep(1000)
    this.show = true
  },
})
</script>
<template>
  <Dialog
    :delay="3000"
    :duration="16000"
    text="By early 1973, about 85% of Cambodian territory was in the hands of the Khmer Rouge, and the Lon
    Nol army was almost unable to go on the offensive."
  />
  <Soldier
    color="green"
    :positionX="120"
    :actions="[
      { actionName: 'turnLeft', duration: 0 },
      { actionName: 'idle', duration: 20000 },
      { actionName: 'turnRight', duration: 0 },
      { actionName: 'idleShoot', duration: 22000 },
      { actionName: 'turnLeft', duration: 0 },
      { actionName: 'run', duration: 200000 },
    ]"
    class="absolute bottom-[21%] scale-[150%]"
  />
  <Soldier
    color="green"
    :positionX="150"
    :actions="[
      { actionName: 'turnLeft', duration: 0 },
      { actionName: 'idle', duration: 20000 },
      { actionName: 'turnRight', duration: 0 },
      { actionName: 'idleShoot', duration: 22000 },
      { actionName: 'turnLeft', duration: 0 },
      { actionName: 'run', duration: 2000 },
      { actionName: 'die', duration: 0 },
    ]"
    class="absolute bottom-[21%] scale-[150%]"
  />
  <Explosion :delay="42000" :positionX="200" class="absolute bottom-[22%] scale-[150%]" />
  <Soldier
    color="green"
    :positionX="190"
    :actions="[
      { actionName: 'turnLeft', duration: 0 },
      { actionName: 'idle', duration: 20000 },
      { actionName: 'turnRight', duration: 0 },
      { actionName: 'idleShoot', duration: 20000 },
      { actionName: 'turnLeft', duration: 0 },
      { actionName: 'run', duration: 2000 },
      { actionName: 'die', duration: 0 },
    ]"
    class="absolute bottom-[21%] scale-[150%]"
  />
  <Soldier
    color="green"
    :positionX="240"
    :actions="[
      { actionName: 'turnLeft', duration: 0 },
      { actionName: 'idle', duration: 20000 },
      { actionName: 'turnRight', duration: 0 },
      { actionName: 'idleShoot', duration: 18000 },
      { actionName: 'turnLeft', duration: 0 },
      { actionName: 'run', duration: 50000 },
    ]"
    class="absolute bottom-[21%] scale-[150%]"
  />
  <Soldier
    color="green"
    :positionX="250"
    :actions="[
      { actionName: 'turnLeft', duration: 0 },
      { actionName: 'idle', duration: 20000 },
      { actionName: 'turnRight', duration: 0 },
      { actionName: 'idleShoot', duration: 18000 },
      { actionName: 'turnLeft', duration: 0 },
      { actionName: 'run', duration: 2000 },
      { actionName: 'die', duration: 0 },
    ]"
    class="absolute bottom-[21%] scale-[150%]"
  />
  <Explosion :delay="40000" :positionX="230" class="absolute bottom-[22%] scale-[150%]" />
  <Soldier
    color="green"
    :positionX="270"
    :actions="[
      { actionName: 'idle', duration: 20000 },
      { actionName: 'idleShoot', duration: 18000 },
      { actionName: 'die', duration: 0 },
    ]"
    class="absolute bottom-[21%] scale-[150%]"
  />
  <Soldier
    color="green"
    :positionX="300"
    :actions="[
      { actionName: 'idle', duration: 20000 },
      { actionName: 'idleShoot', duration: 17000 },
      { actionName: 'die', duration: 0 },
    ]"
    class="absolute bottom-[21%] scale-[150%]"
  />
  <Soldier
    color="green"
    :positionX="330"
    :actions="[
      { actionName: 'crouch', duration: 20000 },
      { actionName: 'idleShoot', duration: 16000 },
      { actionName: 'die', duration: 0 },
    ]"
    class="absolute bottom-[21%] scale-[150%]"
  />
  <Soldier
    color="green"
    :positionX="370"
    :actions="[
      { actionName: 'crouch', duration: 20000 },
      { actionName: 'crouchShoot', duration: 15000 },
      { actionName: 'die', duration: 0 },
    ]"
    class="absolute bottom-[21%] scale-[150%]"
  />
  <Soldier
    color="green"
    :positionX="400"
    :actions="[
      { actionName: 'crouch', duration: 20000 },
      { actionName: 'crouchShoot', duration: 12000 },
      { actionName: 'turnLeft', duration: 0 },
      { actionName: 'run', duration: 4500 },
      { actionName: 'die', duration: 0 },
    ]"
    class="absolute bottom-[21%] scale-[150%]"
  />
  <Soldier
    color="green"
    :positionX="600"
    :actions="[
      { actionName: 'idle', duration: 20000 },
      { actionName: 'turnLeft', duration: 0 },
      { actionName: 'run', duration: 8000 },
      { actionName: 'turnRight', duration: 10 },
      { actionName: 'crouchShoot', duration: 3000 },
      { actionName: 'die', duration: 0 },
    ]"
    class="absolute bottom-[21%] scale-[150%]"
  />
  <Explosion :delay="31000" :positionX="430" class="absolute bottom-[22%] scale-[150%]" />
  <Soldier
    color="green"
    :positionX="610"
    :actions="[
      { actionName: 'idle', duration: 20000 },
      { actionName: 'turnLeft', duration: 0 },
      { actionName: 'run', duration: 6000 },
      { actionName: 'turnRight', duration: 10 },
      { actionName: 'crouchShoot', duration: 4000 },
      { actionName: 'die', duration: 0 },
    ]"
    class="absolute bottom-[21%] scale-[150%]"
  />
  <Explosion :delay="30000" :positionX="480" class="absolute bottom-[22%] scale-[150%]" />
  <Soldier
    color="green"
    :positionX="625"
    :actions="[
      { actionName: 'idle', duration: 20000 },
      { actionName: 'turnLeft', duration: 0 },
      { actionName: 'run', duration: 5000 },
      { actionName: 'turnRight', duration: 10 },
      { actionName: 'crouchShoot', duration: 3000 },
      { actionName: 'die', duration: 0 },
    ]"
    class="absolute bottom-[21%] scale-[150%]"
  />
  <Explosion :delay="28000" :positionX="500" class="absolute bottom-[22%] scale-[150%]" />
</template>
