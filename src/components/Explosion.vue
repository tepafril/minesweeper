<script lang="ts">
import { defineComponent } from "vue";
import { sleep } from "../models/Functions";

export default defineComponent({
  components: {},
  props: {
    positionX: {
      type: Number,
      required: true,
    },
    delay: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      actionAnimationInterval: undefined as any,
      spriteSheet: null as null | HTMLElement,
      position: 100 as number,
      show: false as boolean,
    };
  },
  computed: {
    sprite(): {
      spriteSheetWidth: number;
      spriteWidth: number;
    } {
      return { spriteSheetWidth: 880, spriteWidth: 110 };
    },
  },
  methods: {
    animateSprite(speed: number, loop = true as boolean) {
      this.spriteSheet = this.$refs.explosionSpriteImage;
      let position = this.sprite.spriteWidth;
      const diff = this.sprite.spriteWidth;

      this.actionAnimationInterval = setInterval(() => {
        if (this.spriteSheet) {
          this.spriteSheet.style.backgroundPosition = `-${position}px 0px`;
          if (position >= this.sprite.spriteSheetWidth) {
            if (!loop) {
              clearInterval(this.actionAnimationInterval);
              this.actionAnimationInterval = null;
              this.spriteSheet.style.backgroundPosition = `${this.sprite.spriteWidth}px 0px`;
              this.show = false;
            } else {
              position = this.sprite.spriteWidth;
            }
          } else if (position == this.sprite.spriteSheetWidth) {
          } else {
            position = position + diff;
          }
        }
      }, speed);
    },
  },
  async mounted() {
    try {
      await sleep(this.delay);
      this.show = true;
      if (this.positionX) {
        this.spriteSheet = this.$refs.explosionSpriteImage;
        this.spriteSheet.style.marginLeft = `${this.positionX}px`;
      }
      this.animateSprite(100, false);
    } catch (e: any) {
      //
    }
  },
});
</script>

<template>
  <div :class="[show ? '' : 'hidden']">
    <div class="w-[20px] h-[20px]">
      <div
        ref="explosionSpriteImage"
        class="h-full w-full relative bg-explosion"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.bg-explosion {
  background-image: url(./../assets/sprites/explosion.png);
}
</style>
