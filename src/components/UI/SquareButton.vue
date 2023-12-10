<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  props: {
    name: {
      type: String,
      required: true,
    },
    disableNone: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      actionAnimationInterval: undefined as any,
      spriteSheet: null as null | HTMLElement,
      toggle: true as boolean,
    };
  },
  computed: {
    sprite(): {
      spriteSheetWidth: number;
      spriteWidth: number;
    } {
      return { spriteSheetWidth: 224, spriteWidth: 56 };
    },
  },
  methods: {
    mouseover() {
      if (this.toggle) {
        this.spriteSheet = this.$refs.musicButton;
        this.spriteSheet.style.backgroundPosition = `-${this.sprite.spriteWidth}px 0px`;
      }
    },
    mouseleave() {
      if (this.toggle) {
        this.spriteSheet = this.$refs.musicButton;
        this.spriteSheet.style.backgroundPosition = `0px 0px`;
      }
    },
    mousedown() {
      this.toggle = !this.toggle;
      this.spriteSheet = this.$refs.musicButton;
      if (this.toggle || this.disableNone) {
        this.spriteSheet.style.backgroundPosition = `-${
          this.sprite.spriteWidth * 2
        }px 0px`;
        this.$emit("enable");
      } else {
        this.spriteSheet.style.backgroundPosition = `-${
          this.sprite.spriteWidth * 3
        }px 0px`;
        this.$emit("disable");
      }
    },
  },
});
</script>

<template>
  <div
    ref="musicButton"
    class="w-[56px] h-[56px] cursor-pointer"
    @mouseover="mouseover"
    @mouseleave="mouseleave"
    @mousedown="mousedown"
    @mouseup="mouseover"
    @click="$emit('click')"
    :style="`background-image: url('./sprites/ui/${name}-button.png')`"
  ></div>
</template>

<style scoped></style>
