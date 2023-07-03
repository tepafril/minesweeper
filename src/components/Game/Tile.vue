<script lang="ts">
import { defineComponent, PropType } from "vue";
import { sleep } from "../../models/Functions";
import { Tile } from "../../models/MineSweeper";

export default defineComponent({
  components: {},
  props: {
    modelValue: {
      type: Object as PropType<Tile>,
      required: true,
    },
  },
  data() {
    return {
      actionAnimationInterval: undefined as any,
      spriteSheet: null as null | HTMLElement,
      position: 100 as number,
      show: false as boolean,
      ready: false as boolean,
    };
  },
  computed: {
    color() {
      return (this.modelValue.rowIndex % 2 == 0 &&
        this.modelValue.colIndex % 2 == 1) ||
        (this.modelValue.rowIndex % 2 == 1 && this.modelValue.colIndex % 2 == 0)
        ? "bg-[#86a501]"
        : "bg-[#6f8901]";
    },
    isUnveiledColor() {
      return "bg-[#facd89] shadow-inner";
    },
  },
  methods: {
    //
    unveil() {
      this.modelValue.unveil();
    },
  },
  async mounted() {
    //
    await sleep(
      1000 + (this.modelValue.rowIndex + this.modelValue.colIndex) * 50
    );
    this.ready = true;
  },
});
</script>

<template>
  <div
    class="cursor-pointer inline-block w-[32px] h-[32px] transition-all duration-[500ms] overflow-hidden"
    :class="[
      ready ? 'scale-1 rotate-0' : 'scale-0 rotate-180',
      modelValue.isMine
        ? 'bg-red-900'
        : modelValue.isUnveiled
        ? isUnveiledColor
        : `${color} hover:bg-[#9bc203]`,
    ]"
    @click="unveil"
  >
    <div class="flex items-center justify-center h-full">
      {{
        modelValue.isMine
          ? ""
          : modelValue.nearByMines > 0
          ? modelValue.nearByMines
          : ""
      }}
    </div>
  </div>
</template>

<style scoped></style>
