<script lang="ts">
import { defineComponent } from "vue";
import { sleep } from "../../models/Functions";
import Button from "./Button.vue";
import SquareButton from "./SquareButton.vue";

export default defineComponent({
  components: {
    Button,
    SquareButton,
  },
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
    sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
  },
  async mounted() {
    await sleep(this.delay);
    this.show = true;
  },
});
</script>

<template>
  <div
    class="transition-all duration-[1s] eas-in-out"
    :class="[this.show ? 'opacity-[100%]' : 'opacity-[0%]']"
  >
    <div>
      <img
        class="absolute top-[23%] left-[43%] w-[14%] z-10 animate-scale"
        src="/sprites/ui/mine.png"
      />
      <img
        class="absolute top-[2%] left-[30%] w-[40%] z-0 animate-rotate transition-all"
        src="/sprites/ui/effect.png"
      />
      <img
        class="absolute top-[5%] left-[10%] w-4/5 z-10"
        src="/sprites/ui/title.png"
      />
      <img
        class="absolute top-[33%] left-[34%] w-[32%] z-10"
        src="/sprites/ui/frame.png"
      />
    </div>

    <SquareButton name="music" class="absolute left-[3%] bottom-[5%]" />
    <SquareButton name="linkedin" class="absolute right-[3%] bottom-[5%]" />
    <SquareButton name="gmail" class="absolute right-[10%] bottom-[5%]" />
    <Button name="play" class="absolute right-[42%] bottom-[45%] z-50" />
    <Button name="story" class="absolute right-[42%] bottom-[33%] z-50" />
    <Button name="credit" class="absolute right-[42%] bottom-[21%] z-50" />
  </div>
</template>

<style scoped>
.bg-bomb {
  background-image: url(./../assets/sprites/bomb.png);
}

.animate-rotate {
  animation: infiniteRotation 10s linear infinite;
}

@keyframes infiniteRotation {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.5);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}

.animate-scale {
  animation: infiniteTransformScale 3s ease-in-out infinite;
}

@keyframes infiniteTransformScale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.075);
  }
  100% {
    transform: scale(1);
  }
}
</style>
