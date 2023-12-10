<script lang="ts">
import { defineComponent } from "vue";
import { sleep } from "../../models/Functions";
import { GameManager, StateEnum } from "../../models/GameManager";
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
      gameManager: {} as GameManager,
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
    mailTo() {
      document.location.href = "mailto:tepafril@gmail.com";
    },
    linkTo() {
      window.open(
        "https://www.linkedin.com/in/afril-tep-56b404b1/",
        "_blank",
        ""
      );
    },
    backToStory() {
      this.gameManager.assets.audio.currentTime = 0;
      this.gameManager.assets.audio.play();
      this.gameManager.set("state", StateEnum.Story);
    },
    toCredits() {
      this.gameManager.set("state", StateEnum.Credits);
    },
    toGame() {
      this.gameManager.set("state", StateEnum.InGame);
    },
    mute(bool: boolean) {
      this.gameManager.set("mute", bool);
    },
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
    this.gameManager = GameManager.Instance();
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
        class="pointer-events-none absolute top-[23%] left-[43%] w-[14%] z-10 animate-scale"
        src="/sprites/ui/mine.png"
      />
      <img
        class="pointer-events-none absolute top-[2%] left-[30%] w-[40%] z-0 animate-rotate transition-all"
        src="/sprites/ui/effect.png"
      />
      <img
        class="pointer-events-none absolute top-[6.5%] left-[10%] w-4/5 z-10"
        src="/sprites/ui/title.png"
      />
      <img
        class="pointer-events-none absolute top-[33%] left-[34%] w-[32%] z-10"
        src="/sprites/ui/frame.png"
      />
    </div>

    <SquareButton
      name="music"
      class="absolute left-[3%] bottom-[5%]"
      @disable="mute(true)"
      @enable="mute(false)"
    />
    <SquareButton
      disableNone
      name="linkedin"
      class="absolute right-[3%] bottom-[5%]"
      @click="linkTo"
    />
    <SquareButton
      disableNone
      name="gmail"
      class="absolute right-[10%] bottom-[5%]"
      @click="mailTo"
    />
    <Button
      name="play"
      class="absolute right-[42%] bottom-[45%] z-50"
      @click="toGame"
    />
    <Button
      name="story"
      class="absolute right-[42%] bottom-[33%] z-50"
      @click="backToStory"
    />
    <Button
      name="credit"
      class="absolute right-[42%] bottom-[21%] z-50"
      @click="toCredits"
    />
  </div>
</template>

<style scoped>
.bg-bomb {
  background-image: url(./../assets/sprites/bomb.png);
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
