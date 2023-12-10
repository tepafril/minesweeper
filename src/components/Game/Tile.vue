<script lang="ts">
import { defineComponent, PropType } from "vue";
import { sleep } from "../../models/Functions";
import { Tile } from "../../models/MineSweeper";
import Bomb from "../../components/Bomb.vue";

export default defineComponent({
  components: { Bomb },
  props: {
    modelValue: {
      type: Object as PropType<Tile>,
      required: true,
    },
    clickLock: {
      type: Boolean,
      default: false,
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
  watch: {
    async clickLock() {
      if (this.clickLock) {
        await sleep((this.modelValue.rowIndex + this.modelValue.colIndex) * 50);
        this.modelValue.unveilOnlyMe();
      }
    },
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
    toggleFlag() {
      this.modelValue.toggleFlag();
    },
    unveil() {
      if (!this.clickLock) {
        const isMine = this.modelValue.unveil();
        if (isMine) {
          this.$emit("gameover");
        }
      }
    },
    showOrHide(bool: boolean): string {
      return !bool ? "hidden" : "";
    },
    getTileColor(): string {
      let color =
        this.modelValue.isMine && this.modelValue.isUnveiled
          ? "bg-[#D6AF74]"
          : this.modelValue.isMine || this.modelValue.isFlag
          ? `${this.color}`
          : this.modelValue.isUnveiled
          ? this.isUnveiledColor
          : `${this.color}`;

      color +=
        !this.modelValue.isFlag && !this.modelValue.isUnveiled
          ? ` hover:bg-[#9bc203]`
          : "";

      return color;
    },
  },
  async mounted() {
    await sleep((this.modelValue.rowIndex + this.modelValue.colIndex) * 50);
    this.ready = true;
  },
});
</script>

<template>
  <div
    class="inline-block w-[32px] h-[32px] transition-all duration-[200ms] overflow-hidden select-none"
    :class="[
      ready ? 'scale-1 rotate-0' : 'scale-0 rotate-180',
      getTileColor(),
      clickLock ? 'pointer-events-none' : 'cursor-pointer ',
    ]"
    @click="unveil"
    @click.right.prevent="toggleFlag"
  >
    <div class="flex items-center justify-center h-full">
      <template v-if="modelValue.isFlag">
        <img
          class="pointer-events-none w-full z-10 animate-scale origin-top px-2"
          src="../../assets/flag.svg"
        />
      </template>
      <div v-else :class="showOrHide(modelValue.isUnveiled)">
        <template v-if="modelValue.isMine">
          <img
            class="pointer-events-none w-full z-10 animate-scale origin-top px-1"
            src="/sprites/ui/mine.png"
          />
        </template>
        <template v-else>
          <span>{{
            modelValue.nearByMines > 0 ? modelValue.nearByMines : ""
          }}</span>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
