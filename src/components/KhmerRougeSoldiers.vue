<script lang="ts">
import { defineComponent } from "vue";
import Soldier from "./Soldier.vue";
import Bomb from "./Bomb.vue";
import Explosion from "./Explosion.vue";
import Dialog from "./Dialog.vue";

export default defineComponent({
  components: {
    Soldier,
    Explosion,
    Bomb,
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
    };
  },
  methods: {
    sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
  },
  async mounted() {
    await this.sleep(this.delay);
    this.show = true;
  },
});
</script>
<template>
  <Dialog
    :delay="55000"
    :duration="15000"
    text="April 17, 1975 ended five years of foreign interventions, bombardment, and civil war in Cambodia. On this date, Phnom Penh, a major city in Cambodia, fell to the Khmer Rouge."
  />
  <Dialog
    :delay="70000"
    :duration="15000"
    text="Millions of mines were laid by the Khmer Rouge and have led to thousands of deaths and disabilities."
  />
  <Soldier
    color="black"
    :positionX="625"
    :actions="[
      { actionName: 'idle', duration: 30000 },
      { actionName: 'turnLeft', duration: 0 },
      { actionName: 'runShoot', duration: 7000 },
      { actionName: 'die', duration: 0 },
    ]"
    class="absolute bottom-[21%] scale-[150%]"
  />

  <Soldier
    color="black"
    :positionX="625"
    :actions="[
      { actionName: 'idle', duration: 32000 },
      { actionName: 'turnLeft', duration: 0 },
      { actionName: 'runShoot', duration: 6500 },
      { actionName: 'die', duration: 0 },
    ]"
    class="absolute bottom-[21%] scale-[150%]"
  />

  <Soldier
    color="black"
    :positionX="625"
    :actions="[
      { actionName: 'idle', duration: 33000 },
      { actionName: 'turnLeft', duration: 0 },
      { actionName: 'runShoot', duration: 7000 },
      { actionName: 'die', duration: 0 },
    ]"
    class="absolute bottom-[21%] scale-[150%]"
  />

  <Soldier
    color="black"
    :positionX="625"
    :actions="[
      { actionName: 'idle', duration: 34000 },
      { actionName: 'turnLeft', duration: 0 },
      { actionName: 'runShoot', duration: 20000 },
      { actionName: 'run', duration: 3000 },
      { actionName: 'idle', duration: 31000 },
      { actionName: 'turnRight', duration: 0 },
      { actionName: 'run', duration: 500 },
      { actionName: 'crouchShoot', duration: 18000 },
      { actionName: 'die', duration: 0 },
    ]"
    class="absolute bottom-[21%] scale-[150%]"
  />

  <Soldier
    color="black"
    :positionX="625"
    :actions="[
      { actionName: 'idle', duration: 35000 },
      { actionName: 'turnLeft', duration: 0 },
      { actionName: 'runShoot', duration: 19000 },
      { actionName: 'run', duration: 6000 },
      { actionName: 'idle', duration: 28000 },
      { actionName: 'turnRight', duration: 0 },
      { actionName: 'run', duration: 1200 },
      { actionName: 'crouchShoot', duration: 19000 },
      { actionName: 'die', duration: 0 },
    ]"
    class="absolute bottom-[21%] scale-[150%]"
  />

  <Soldier
    color="black"
    :positionX="625"
    :actions="[
      { actionName: 'idle', duration: 36000 },
      { actionName: 'turnLeft', duration: 0 },
      { actionName: 'runShoot', duration: 18000 },
      { actionName: 'run', duration: 6000 },
      { actionName: 'idle', duration: 28000 },
      { actionName: 'turnRight', duration: 0 },
      { actionName: 'run', duration: 500 },
      { actionName: 'crouchShoot', duration: 18000 },
      { actionName: 'die', duration: 0 },
    ]"
    class="absolute bottom-[21%] scale-[150%]"
  />

  <Soldier
    color="black"
    :positionX="625"
    :actions="[
      { actionName: 'idle', duration: 38000 },
      { actionName: 'turnLeft', duration: 0 },
      { actionName: 'runShoot', duration: 16000 },
      { actionName: 'run', duration: 6000 },
      { actionName: 'idle', duration: 28000 },
      { actionName: 'turnRight', duration: 0 },
      { actionName: 'crouchShoot', duration: 16000 },
      { actionName: 'die', duration: 0 },
    ]"
    class="absolute bottom-[21%] scale-[150%]"
  />

  <Soldier
    color="black"
    :positionX="625"
    :actions="[
      { actionName: 'idle', duration: 38500 },
      { actionName: 'turnLeft', duration: 0 },
      { actionName: 'runShoot', duration: 15000 },
      { actionName: 'run', duration: 6000 },
      { actionName: 'idle', duration: 28000 },
      { actionName: 'turnRight', duration: 0 },
      { actionName: 'crouchShoot', duration: 18000 },
      { actionName: 'die', duration: 0 },
    ]"
    class="absolute bottom-[21%] scale-[150%]"
  />

  <Soldier
    color="black"
    :positionX="625"
    :actions="[
      { actionName: 'idle', duration: 40000 },
      { actionName: 'turnLeft', duration: 0 },
      { actionName: 'runShoot', duration: 14000 },
      { actionName: 'run', duration: 6000 },
      { actionName: 'turnRight', duration: 0 },
      { actionName: 'idle', duration: 28000 },
      { actionName: 'idleShoot', duration: 3000 },
      { actionName: 'crouchShoot', duration: 8000 },
      { actionName: 'turnLeft', duration: 0 },
      { actionName: 'run', duration: 6000 },
      { actionName: 'turnRight', duration: 0 },
      { actionName: 'crouchShoot', duration: 2000 },
      { actionName: 'die', duration: 0 },
    ]"
    class="absolute bottom-[21%] scale-[150%]"
  />

  <Soldier
    color="black"
    :positionX="625"
    :actions="[
      { actionName: 'idle', duration: 43000 },
      { actionName: 'turnLeft', duration: 0 },
      { actionName: 'runShoot', duration: 11000 },
      { actionName: 'run', duration: 6000 },
      { actionName: 'turnRight', duration: 0 },
      { actionName: 'idle', duration: 28000 },
      { actionName: 'idleShoot', duration: 3000 },
      { actionName: 'crouchShoot', duration: 6000 },
      { actionName: 'turnLeft', duration: 0 },
      { actionName: 'run', duration: 7500 },
      { actionName: 'turnRight', duration: 0 },
      { actionName: 'crouchShoot', duration: 2000 },
      { actionName: 'die', duration: 0 },
    ]"
    class="absolute bottom-[21%] scale-[150%]"
  />

  <Soldier
    color="black"
    :positionX="625"
    :actions="[
      { actionName: 'idle', duration: 44000 },
      { actionName: 'turnLeft', duration: 0 },
      { actionName: 'runShoot', duration: 10000 },
      { actionName: 'run', duration: 6000 },
      { actionName: 'turnRight', duration: 0 },
      { actionName: 'idle', duration: 28000 },
      { actionName: 'idleShoot', duration: 3000 },
      { actionName: 'crouchShoot', duration: 3000 },
      { actionName: 'turnLeft', duration: 0 },
      { actionName: 'run', duration: 8000 },
      { actionName: 'turnRight', duration: 0 },
      { actionName: 'crouchShoot', duration: 2000 },
      { actionName: 'die', duration: 0 },
    ]"
    class="absolute bottom-[21%] scale-[150%]"
  />

  <Soldier
    color="black"
    :positionX="625"
    :actions="[
      { actionName: 'idle', duration: 45000 },
      { actionName: 'turnLeft', duration: 0 },
      { actionName: 'runShoot', duration: 9000 },
      { actionName: 'run', duration: 6000 },
      { actionName: 'turnRight', duration: 0 },
      { actionName: 'idle', duration: 28000 },
      { actionName: 'idleShoot', duration: 3000 },
      { actionName: 'crouchShoot', duration: 3000 },
      { actionName: 'die', duration: 0 },
    ]"
    class="absolute bottom-[21%] scale-[150%]"
  />

  <Soldier
    color="black"
    :positionX="625"
    :actions="[
      { actionName: 'idle', duration: 45500 },
      { actionName: 'turnLeft', duration: 0 },
      { actionName: 'runShoot', duration: 8000 },
      { actionName: 'run', duration: 6000 },
      { actionName: 'turnRight', duration: 0 },
      { actionName: 'idle', duration: 28000 },
      { actionName: 'idleShoot', duration: 3000 },
      { actionName: 'crouchShoot', duration: 2000 },
      { actionName: 'die', duration: 0 },
    ]"
    class="absolute bottom-[21%] scale-[150%]"
  />

  <Soldier
    color="black"
    :positionX="625"
    :actions="[
      { actionName: 'idle', duration: 47000 },
      { actionName: 'turnLeft', duration: 0 },
      { actionName: 'runShoot', duration: 7000 },
      { actionName: 'run', duration: 6000 },
      { actionName: 'turnRight', duration: 0 },
      { actionName: 'idle', duration: 28000 },
      { actionName: 'idleShoot', duration: 3000 },
      { actionName: 'die', duration: 0 },
    ]"
    class="absolute bottom-[21%] scale-[150%]"
  />

  <Soldier
    color="black"
    :positionX="625"
    :actions="[
      { actionName: 'idle', duration: 48000 },
      { actionName: 'turnLeft', duration: 0 },
      { actionName: 'runShoot', duration: 6000 },
      { actionName: 'run', duration: 6000 },
      { actionName: 'turnRight', duration: 0 },
      { actionName: 'idle', duration: 28000 },
      { actionName: 'run', duration: 500 },
      { actionName: 'idleShoot', duration: 2000 },
      { actionName: 'die', duration: 0 },
    ]"
    class="absolute bottom-[21%] scale-[150%]"
  />
  <Explosion
    :delay="92500 + 1000"
    :positionX="350"
    class="absolute bottom-[22%] scale-[150%]"
  />
  <Explosion
    :delay="92000 + 1000"
    :positionX="370"
    class="absolute bottom-[22%] scale-[150%]"
  />
  <Explosion
    :delay="91500 + 1000"
    :positionX="390"
    class="absolute bottom-[22%] scale-[150%]"
  />
  <Explosion
    :delay="91000 + 1000"
    :positionX="410"
    class="absolute bottom-[22%] scale-[150%]"
  />
  <Explosion
    :delay="90500 + 1000"
    :positionX="430"
    class="absolute bottom-[22%] scale-[150%]"
  />
  <Explosion
    :delay="90000 + 1000"
    :positionX="450"
    class="absolute bottom-[22%] scale-[150%]"
  />
  <Explosion
    :delay="89500 + 1000"
    :positionX="470"
    class="absolute bottom-[22%] scale-[150%]"
  />
  <Explosion
    :delay="89000 + 1000"
    :positionX="490"
    class="absolute bottom-[22%] scale-[150%]"
  />

  <Bomb
    :delay="70000 - 1200"
    class="absolute left-[85%] bottom-[10%] scale-[130%]"
  />
  <Bomb
    :delay="70000 - 1050"
    class="absolute left-[75%] bottom-[12%] scale-[75%]"
  />
  <Bomb
    :delay="70000 - 900"
    class="absolute left-[65%] bottom-[3%] scale-[100%]"
  />
  <Bomb
    :delay="70000 - 750"
    class="absolute left-[55%] bottom-[12%] scale-[100%]"
  />
  <Bomb
    :delay="70000 - 600"
    class="absolute left-[45%] bottom-[8%] scale-[75%]"
  />
  <Bomb
    :delay="70000 - 450"
    class="absolute left-[30%] bottom-[10%] scale-[130%]"
  />
  <Bomb
    :delay="70000 - 300"
    class="absolute left-[20%] bottom-[3%] scale-[85%]"
  />
  <Bomb
    :delay="70000 - 150"
    class="absolute left-[5%] bottom-[8%] scale-[100%]"
  />

  <Soldier
    color="black"
    :positionX="625"
    :actions="[
      { actionName: 'idle', duration: 49000 },
      { actionName: 'turnLeft', duration: 0 },
      { actionName: 'runShoot', duration: 5000 },
      { actionName: 'run', duration: 6000 },
      { actionName: 'turnRight', duration: 0 },
      { actionName: 'idle', duration: 28000 },
      { actionName: 'run', duration: 1000 },
      { actionName: 'crouchShoot', duration: 1500 },
      { actionName: 'die', duration: 0 },
    ]"
    class="absolute bottom-[21%] scale-[150%]"
  />
</template>
