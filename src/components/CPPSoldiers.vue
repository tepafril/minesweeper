<script lang="ts">
import { defineComponent } from "vue";
import Soldier from "./Soldier.vue";
import Tank from "./Tank.vue";
import Dialog from "./Dialog.vue";
import { sleep } from "../models/Functions";

export default defineComponent({
  components: {
    Soldier,
    Tank,
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
  methods: {},
  async mounted() {
    await sleep(this.delay);
    this.show = true;
  },
});
</script>
<template>
  <div v-if="show">
    <Dialog
      :delay="50000"
      :duration="10000"
      text="On January 7, 1979, Vietnamese troops seize the Cambodian capital of Phnom Penh, toppling the brutal regime of Pol Pot and his Khmer Rouge."
    />
    <Dialog
      :delay="60000"
      :duration="10000"
      text="The United Nations voted to give the resistance movement against communists, which included the Khmer Rouge, a seat in its General Assembly."
    />

    <Dialog
      :delay="70000"
      :duration="10000"
      text="October 1991 saw eighteen countries signing the Paris Agreements ending the conflict
in Cambodia and opening the way for Cambodia’s national reconciliation and national
development."
    />

    <Dialog
      :delay="79000 + 1000"
      :duration="7000"
      thumbnail="sunmeng"
      text="Hooray! Victory! We did it! We're the champions! We've won! "
    />
    <Dialog
      :delay="79000 + 8000"
      :duration="3000"
      thumbnail="razong"
      text="Hot pot?"
    />
    <Dialog
      :delay="79000 + 11000"
      :duration="6000"
      thumbnail="vuthy"
      text="Hot pot? How much is it?"
    />
    <Dialog
      :delay="79000 + 17000"
      :duration="3000"
      thumbnail="pheng"
      text="Mehhhhh.....!"
    />
    <Dialog
      :delay="79000 + 20000"
      :duration="7000"
      thumbnail="sunmeng"
      text="After the Hot Pot, Let's clean the minefield...!"
    />
    <Dialog
      :delay="79000 + 27000"
      :duration="3000"
      thumbnail="razong"
      text="Ohh Yeah!"
    />

    <Soldier
      color="green"
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
      color="green"
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
      color="green"
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
      color="green"
      :positionX="625"
      :actions="[
        { actionName: 'idle', duration: 34000 },
        { actionName: 'turnLeft', duration: 0 },
        { actionName: 'runShoot', duration: 17000 - 1000 },
        { actionName: 'run', duration: 3000 + 2000 },
        { actionName: 'idle', duration: 0 },
      ]"
      class="absolute bottom-[21%] scale-[150%]"
    />

    <Soldier
      color="green"
      :positionX="625"
      :actions="[
        { actionName: 'idle', duration: 35000 },
        { actionName: 'turnLeft', duration: 0 },
        { actionName: 'runShoot', duration: 16000 - 1000 },
        { actionName: 'run', duration: 6000 + 2000 },
        { actionName: 'idle', duration: 0 },
      ]"
      class="absolute bottom-[21%] scale-[150%]"
    />

    <Soldier
      color="green"
      :positionX="625"
      :actions="[
        { actionName: 'idle', duration: 36000 },
        { actionName: 'turnLeft', duration: 0 },
        { actionName: 'runShoot', duration: 15000 - 1000 },
        { actionName: 'run', duration: 6000 + 2000 },
        { actionName: 'idle', duration: 0 },
      ]"
      class="absolute bottom-[21%] scale-[150%]"
    />

    <Soldier
      color="green"
      :positionX="625"
      :actions="[
        { actionName: 'idle', duration: 38000 },
        { actionName: 'turnLeft', duration: 0 },
        { actionName: 'runShoot', duration: 13000 - 1000 },
        { actionName: 'run', duration: 6000 + 2000 },
        { actionName: 'idle', duration: 0 },
      ]"
      class="absolute bottom-[21%] scale-[150%]"
    />

    <Soldier
      color="green"
      :positionX="625"
      :actions="[
        { actionName: 'idle', duration: 38500 },
        { actionName: 'turnLeft', duration: 0 },
        { actionName: 'runShoot', duration: 12000 - 1000 },
        { actionName: 'run', duration: 6000 + 2000 },
        { actionName: 'idle', duration: 0 },
      ]"
      class="absolute bottom-[21%] scale-[150%]"
    />

    <Soldier
      color="green"
      :positionX="625"
      :actions="[
        { actionName: 'idle', duration: 40000 },
        { actionName: 'turnLeft', duration: 0 },
        { actionName: 'runShoot', duration: 11000 - 1000 },
        { actionName: 'run', duration: 6000 + 2000 },
        { actionName: 'turnRight', duration: 0 },
        { actionName: 'idle', duration: 0 },
      ]"
      class="absolute bottom-[21%] scale-[150%]"
    />

    <Soldier
      color="green"
      :positionX="625"
      :actions="[
        { actionName: 'idle', duration: 43000 },
        { actionName: 'turnLeft', duration: 0 },
        { actionName: 'runShoot', duration: 8000 - 1000 },
        { actionName: 'run', duration: 6000 + 2000 },
        { actionName: 'turnRight', duration: 0 },
        { actionName: 'idle', duration: 0 },
      ]"
      class="absolute bottom-[21%] scale-[150%]"
    />

    <Soldier
      color="green"
      :positionX="625"
      :actions="[
        { actionName: 'idle', duration: 44000 },
        { actionName: 'turnLeft', duration: 0 },
        { actionName: 'runShoot', duration: 7000 - 1000 },
        { actionName: 'run', duration: 6000 + 2000 },
        { actionName: 'turnRight', duration: 0 },
        { actionName: 'idle', duration: 0 },
      ]"
      class="absolute bottom-[21%] scale-[150%]"
    />

    <Soldier
      color="green"
      :positionX="625"
      :actions="[
        { actionName: 'idle', duration: 45000 },
        { actionName: 'turnLeft', duration: 0 },
        { actionName: 'runShoot', duration: 6000 - 1000 },
        { actionName: 'run', duration: 6000 + 2000 },
        { actionName: 'turnRight', duration: 0 },
        { actionName: 'idle', duration: 0 },
      ]"
      class="absolute bottom-[21%] scale-[150%]"
    />

    <Soldier
      color="green"
      :positionX="625"
      :actions="[
        { actionName: 'idle', duration: 45500 },
        { actionName: 'turnLeft', duration: 0 },
        { actionName: 'runShoot', duration: 5000 - 1000 },
        { actionName: 'run', duration: 6000 + 2000 },
        { actionName: 'turnRight', duration: 0 },
        { actionName: 'idle', duration: 0 },
      ]"
      class="absolute bottom-[21%] scale-[150%]"
    />

    <Soldier
      color="green"
      :positionX="625"
      :actions="[
        { actionName: 'idle', duration: 47000 },
        { actionName: 'turnLeft', duration: 0 },
        { actionName: 'runShoot', duration: 4000 - 1000 },
        { actionName: 'run', duration: 6000 + 2000 },
        { actionName: 'turnRight', duration: 0 },
        { actionName: 'idle', duration: 0 },
      ]"
      class="absolute bottom-[21%] scale-[150%]"
    />

    <Soldier
      color="green"
      :positionX="625"
      :actions="[
        { actionName: 'idle', duration: 48000 },
        { actionName: 'turnLeft', duration: 0 },
        { actionName: 'runShoot', duration: 3000 - 1000 },
        { actionName: 'run', duration: 6000 + 2000 },
        { actionName: 'turnRight', duration: 0 },
        { actionName: 'idle', duration: 0 },
      ]"
      class="absolute bottom-[21%] scale-[150%]"
    />

    <Soldier
      color="green"
      :positionX="625"
      :actions="[
        { actionName: 'idle', duration: 49000 },
        { actionName: 'turnLeft', duration: 0 },
        { actionName: 'runShoot', duration: 2000 - 1000 },
        { actionName: 'run', duration: 6000 + 2000 },
        { actionName: 'turnRight', duration: 0 },
        { actionName: 'idle', duration: 0 },
      ]"
      class="absolute bottom-[21%] scale-[150%]"
    />

    <Tank
      v-for="i in 12"
      :key="i"
      :positionX="780"
      :actions="[
        { actionName: 'idle', duration: 56000 + 4000 * i },
        { actionName: 'run', duration: 12000 },
      ]"
      class="absolute bottom-[23%] scale-[120%] z-0"
    />
  </div>
</template>
