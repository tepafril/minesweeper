<script lang="ts">
import { defineComponent } from "vue";
import { sleep } from "../models/Functions";

export default defineComponent({
  components: {},
  props: {
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
      return { spriteSheetWidth: 120, spriteWidth: 60 };
    },
  },
  methods: {
    animateSprite(speed: number, loop = true as boolean) {
      this.spriteSheet = this.$refs.bombSpriteImage;
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
    await sleep(this.delay);
    this.show = true;
    if (this.positionX) {
      this.spriteSheet = this.$refs.bombSpriteImage;
      this.spriteSheet.style.marginLeft = `${this.positionX}px`;
    }
    this.animateSprite(150, true);
  },
});
</script>

<template>
  <div>
    <div
      :class="[show ? 'scale-100' : 'scale-0']"
      class="transition-all ease-in-out duration-300"
    >
      <div class="w-[60px] h-[45px]">
        <img
          class="pointer-events-none absolute top-[23%] left-[43%] w-full z-10 animate-scale origin-top"
          src="/sprites/ui/mine.png"
        />
        <!-- <div ref="bombSpriteImage" class="h-full w-full relative bg-bomb"></div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-bomb {
  background-image: url(./../assets/sprites/bomb.png);
}
</style>
