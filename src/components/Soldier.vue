<script lang="ts">
import { defineComponent } from "vue";
import { sleep } from "../models/Functions";
import soldier from "./../json/soldier.json";

export default defineComponent({
  components: {},
  props: {
    color: {
      type: String,
      required: true,
    },
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

      action: null as
        | null
        | "run"
        | "die"
        | "crouch"
        | "idle"
        | "jump"
        | "turnLeft"
        | "turnRight",

      sprites: soldier as {
        run: { spriteSheetWidth: number; spriteWidth: number };
        idle: { spriteSheetWidth: number; spriteWidth: number };
        die: { spriteSheetWidth: number; spriteWidth: number };
        jump: { spriteSheetWidth: number; spriteWidth: number };
        crouch: { spriteSheetWidth: number; spriteWidth: number };
      },

      direction: "right" as "right" | "left",

      position: 100 as number,

      inc: 0 as number,

      shooting: false as boolean,
    };
  },
  computed: {
    sprite() {
      return this.sprites[this.action];
    },
  },
  methods: {
    animateSprite(speed: number, loop = true as boolean) {
      try {
        this.spriteSheet = this.$refs.soilderSpriteImage;
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
    moveSprite(speed = 100) {
      try {
        this.spriteSheet = this.$refs.soilderSpriteImage;
        const diff = 1;

        this.moveAnimationInterval = setInterval(() => {
          if (this.spriteSheet) {
            if (this.direction == "right") {
              this.position += diff;
            } else {
              this.position -= diff;
            }
            this.spriteSheet.style.marginLeft = `${this.position}px`;
          }
        }, speed);
      } catch (e: any) {
        //
      }
    },
    setAction(action: string) {
      try {
        this.spriteSheet = this.$refs.soilderSpriteImage;
        this.spriteSheet.classList.remove(
          `bg-soldier-${this.color}-${this.action}`
        );
        this.spriteSheet.classList.add(`bg-soldier-${this.color}-${action}`);
        this.action = action;
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
        if (this.spriteSheet?.style) {
          this.spriteSheet = this.$refs.soilderSpriteImage;
          this.spriteSheet.style.backgroundPosition = `-${this.sprite.spriteWidth}px 0px`;
        }
      } catch (e: any) {
        //
      }
    },
    run() {
      try {
        this.shooting = false;
        this.setAction("run");
        this.animateSprite(100);
        this.moveSprite(50);
      } catch (e: any) {
        //
      }
    },
    runShoot() {
      try {
        this.shooting = true;
        this.setAction("run");
        this.animateSprite(100);
        this.moveSprite(50);
      } catch (e: any) {
        //
      }
    },
    die() {
      try {
        this.shooting = false;
        this.setAction("die");
        this.animateSprite(100, false);
      } catch (e: any) {
        //
      }
    },
    crouch() {
      try {
        this.shooting = false;
        this.setAction("crouch");
        this.animateSprite(300, false);
      } catch (e: any) {
        //
      }
    },
    crouchShoot() {
      try {
        this.shooting = true;
        this.setAction("crouch");
        this.animateSprite(300, false);
      } catch (e: any) {
        //
      }
    },
    idle() {
      try {
        this.shooting = false;
        this.setAction("idle");
        this.animateSprite(100);
      } catch (e: any) {
        //
      }
    },
    idleShoot() {
      try {
        this.shooting = true;
        this.setAction("idle");
        this.animateSprite(100);
      } catch (e: any) {
        //
      }
    },
    jump() {
      try {
        this.shooting = false;
        this.setAction("jump");
        this.animateSprite(100);
      } catch (e: any) {
        //
      }
    },
    turnLeft() {
      try {
        this.direction = "left";
        this.spriteSheet = this.$refs.soilderSpriteImage;
        this.spriteSheet.style.transform = "scaleX(-1)";
      } catch (e: any) {
        //
      }
    },
    turnRight() {
      try {
        this.direction = "right";
        this.spriteSheet = this.$refs.soilderSpriteImage;
        this.spriteSheet.style.transform = "scaleX(1)";
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
    if (this.positionX) {
      this.spriteSheet = this.$refs.soilderSpriteImage;
      this.position = this.positionX;
      this.spriteSheet.style.marginLeft = `${this.position}px`;
    }
    await this.activate(this.actions);
  },
});
</script>

<template>
  <div class="z-50">
    <div class="w-[48px] h-[48px]">
      <div ref="soilderSpriteImage" class="h-full w-full relative">
        <img
          src="./../assets/sprites/flash.png"
          class="pointer-events-none absolute right-0 z-50"
          :class="[
            shooting ? 'blink' : 'hidden',
            action == 'crouch' ? 'bottom-5' : 'bottom-6',
          ]"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.flip-x {
  /* transform: scaleX(-1); */
}
.bg-soldier-black-crouch {
  background-image: url(./../assets/sprites/soldier/black/crouch.png);
}
.bg-soldier-black-die {
  background-image: url(./../assets/sprites/soldier/black/die.png);
}
.bg-soldier-black-idle {
  background-image: url(./../assets/sprites/soldier/black/idle.png);
}
.bg-soldier-black-jump {
  background-image: url(./../assets/sprites/soldier/black/jump.png);
}
.bg-soldier-black-run {
  background-image: url(./../assets/sprites/soldier/black/run.png);
}

.bg-soldier-blue-crouch {
  background-image: url(./../assets/sprites/soldier/blue/crouch.png);
}
.bg-soldier-blue-die {
  background-image: url(./../assets/sprites/soldier/blue/die.png);
}
.bg-soldier-blue-idle {
  background-image: url(./../assets/sprites/soldier/blue/idle.png);
}
.bg-soldier-blue-jump {
  background-image: url(./../assets/sprites/soldier/blue/jump.png);
}
.bg-soldier-blue-run {
  background-image: url(./../assets/sprites/soldier/blue/run.png);
}

.bg-soldier-green-crouch {
  background-image: url(./../assets/sprites/soldier/green/crouch.png);
}
.bg-soldier-green-die {
  background-image: url(./../assets/sprites/soldier/green/die.png);
}
.bg-soldier-green-idle {
  background-image: url(./../assets/sprites/soldier/green/idle.png);
}
.bg-soldier-green-jump {
  background-image: url(./../assets/sprites/soldier/green/jump.png);
}
.bg-soldier-green-run {
  background-image: url(./../assets/sprites/soldier/green/run.png);
}

.blink {
  animation: blinking 200ms linear infinite;
}

@keyframes blinking {
  50% {
    opacity: 0;
  }
}
</style>
