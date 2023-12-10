<script lang="ts">
import { defineComponent } from "vue";
import { sleep } from "../models/Functions";

export default defineComponent({
  components: {},
  props: {
    actions: {
      type: Array,
      required: true,
    },
    positionX: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      actionAnimationInterval: undefined as any,
      moveAnimationInterval: null as null | number,
      spriteSheet: null as null | HTMLElement,

      direction: "right" as "right" | "left",

      position: 100 as number,

      inc: 0 as number,
    };
  },
  computed: {
    sprite(): { spriteSheetWidth: number; spriteWidth: number } {
      return { spriteSheetWidth: 600, spriteWidth: 150 };
    },
  },
  methods: {
    animateSprite(speed: number, loop = true as boolean) {
      try {
        this.spriteSheet = this.$refs.tankSpriteImage;
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
              } else {
                position = this.sprite.spriteWidth;
              }
            } else if (position == this.sprite.spriteSheetWidth) {
            } else {
              position = position + diff;
            }
          }
        }, speed);
      } catch (e: any) {
        //
      }
    },
    async delay(ms: number) {
      await sleep(ms);
      this.clearAnimation();
    },
    sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    moveSprite(speed = 100) {
      try {
        this.spriteSheet = this.$refs.tankSpriteImage;
        const diff = 1;

        this.moveAnimationInterval = setInterval(() => {
          if (this.spriteSheet) {
            if (this.direction == "right") {
              this.position -= diff;
            } else {
              this.position += diff;
            }
            this.spriteSheet.style.marginLeft = `${this.position}px`;
          }
        }, speed);
      } catch (e: any) {
        //
      }
    },
    clearAnimation() {
      try {
        if (this.actionAnimationInterval) {
          clearInterval(this.actionAnimationInterval);
          this.actionAnimationInterval = null;
        }
        if (this.moveAnimationInterval) {
          clearInterval(this.moveAnimationInterval);
          this.moveAnimationInterval = null;
        }
        if (this.sprite) {
          this.spriteSheet = this.$refs.tankSpriteImage;
          this.spriteSheet.style.backgroundPosition = `-${this.sprite.spriteWidth}px 0px`;
        }
      } catch (e: any) {
        //
      }
    },
    run() {
      try {
        this.animateSprite(100);
        this.moveSprite(10);
      } catch (e: any) {
        //
      }
    },
    idle() {
      //
    },
    turnLeft() {
      try {
        this.direction = "left";
        this.spriteSheet = this.$refs.tankSpriteImage;
        this.spriteSheet.style.transform = "scaleX(1)";
      } catch (e: any) {
        //
      }
    },
    turnRight() {
      try {
        this.direction = "right";
        this.spriteSheet = this.$refs.tankSpriteImage;
        this.spriteSheet.style.transform = "scaleX(-1)";
      } catch (e: any) {
        //
      }
    },
    async activate(actions: any) {
      try {
        if (this.inc < actions.length) {
          const func = actions[this.inc].actionName as string;
          const duration = actions[this.inc].duration as number;
          this[func]();
          if (duration > 0) {
            await this.delay(duration);
          }
          this.inc++;
          await this.activate(actions);
        }
      } catch (e: any) {
        //
      }
    },
  },
  async mounted() {
    try {
      if (this.positionX) {
        this.spriteSheet = this.$refs.tankSpriteImage;
        this.position = this.positionX;
        this.spriteSheet.style.marginLeft = `${this.position}px`;
      }
      await this.activate(this.actions);
    } catch (e: any) {
      //
    }
  },
});
</script>

<template>
  <div>
    <div class="w-[150px] h-[103px]">
      <div ref="tankSpriteImage" class="h-full w-full relative bg-tank"></div>
    </div>
  </div>
</template>

<style scoped>
.bg-tank {
  background-image: url(./../assets/sprites/tank.png);
}
</style>
