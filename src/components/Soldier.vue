<script lang="ts">
import { defineComponent } from "vue"
import soldier from "./../json/soldier.json"

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

      action: null as null | "run" | "die" | "crouch" | "idle" | "jump" | "turnLeft" | "turnRight",

      sprites: soldier as {
        run: { spriteSheetWidth: number; spriteWidth: number }
        idle: { spriteSheetWidth: number; spriteWidth: number }
        die: { spriteSheetWidth: number; spriteWidth: number }
        jump: { spriteSheetWidth: number; spriteWidth: number }
        crouch: { spriteSheetWidth: number; spriteWidth: number }
      },

      direction: "right" as "right" | "left",

      position: 100 as number,

      inc: 0 as number,

      shooting: false as boolean,
    }
  },
  computed: {
    sprite() {
      return this.sprites[this.action]
    },
  },
  methods: {
    animateSprite(speed: number, loop = true as boolean) {
      this.spriteSheet = this.$refs.soilderSpriteImage
      let position = this.sprite.spriteWidth
      const diff = this.sprite.spriteWidth

      this.actionAnimationInterval = setInterval(() => {
        if (this.spriteSheet) {
          this.spriteSheet.style.backgroundPosition = `-${position}px 0px`
          if (position >= this.sprite.spriteSheetWidth) {
            if (!loop) {
              clearInterval(this.actionAnimationInterval)
              this.actionAnimationInterval = null
              this.spriteSheet.style.backgroundPosition = `${this.sprite.spriteWidth}px 0px`
            } else {
              position = this.sprite.spriteWidth
            }
          } else if (position == this.sprite.spriteSheetWidth) {
          } else {
            position = position + diff
          }
        }
      }, speed)
    },
    async delay(ms: number) {
      await this.sleep(ms)
      this.clearAnimation()
    },
    sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms))
    },
    moveSprite(speed = 100) {
      this.spriteSheet = this.$refs.soilderSpriteImage
      const diff = 1

      this.moveAnimationInterval = setInterval(() => {
        if (this.spriteSheet) {
          if (this.direction == "right") {
            this.position += diff
          } else {
            this.position -= diff
          }
          this.spriteSheet.style.marginLeft = `${this.position}px`
        }
      }, speed)
    },
    setAction(action: string) {
      this.spriteSheet = this.$refs.soilderSpriteImage
      this.spriteSheet.classList.remove(`bg-soldier-${this.color}-${this.action}`)
      this.spriteSheet.classList.add(`bg-soldier-${this.color}-${action}`)
      this.action = action
    },
    clearAnimation() {
      if (this.actionAnimationInterval) {
        clearInterval(this.actionAnimationInterval)
        this.actionAnimationInterval = null
      }
      if (this.moveAnimationInterval) {
        clearInterval(this.moveAnimationInterval)
        this.moveAnimationInterval = null
      }
      if (this.sprite) {
        this.spriteSheet = this.$refs.soilderSpriteImage
        this.spriteSheet.style.backgroundPosition = `-${this.sprite.spriteWidth}px 0px`
      }
    },
    run() {
      this.shooting = false
      this.setAction("run")
      this.animateSprite(100)
      this.moveSprite(50)
    },
    runShoot() {
      this.shooting = true
      this.setAction("run")
      this.animateSprite(100)
      this.moveSprite(50)
    },
    die() {
      this.shooting = false
      this.setAction("die")
      this.animateSprite(100, false)
    },
    crouch() {
      this.shooting = false
      this.setAction("crouch")
      this.animateSprite(300, false)
    },
    crouchShoot() {
      this.shooting = true
      this.setAction("crouch")
      this.animateSprite(300, false)
    },
    idle() {
      this.shooting = false
      this.setAction("idle")
      this.animateSprite(100)
    },
    idleShoot() {
      this.shooting = true
      this.setAction("idle")
      this.animateSprite(100)
    },
    jump() {
      this.shooting = false
      this.setAction("jump")
      this.animateSprite(100)
    },
    turnLeft() {
      this.direction = "left"
      this.spriteSheet = this.$refs.soilderSpriteImage
      this.spriteSheet.style.transform = "scaleX(-1)"
    },
    turnRight() {
      this.direction = "right"
      this.spriteSheet = this.$refs.soilderSpriteImage
      this.spriteSheet.style.transform = "scaleX(1)"
    },
    async activate(actions: any) {
      if (this.inc < actions.length) {
        const func = actions[this.inc].actionName as string
        const duration = actions[this.inc].duration as number
        this[func]()
        if (duration > 0) {
          await this.delay(duration)
        }
        this.inc++
        await this.activate(actions)
      }
    },
  },
  async mounted() {
    if (this.positionX) {
      this.spriteSheet = this.$refs.soilderSpriteImage
      this.position = this.positionX
      this.spriteSheet.style.marginLeft = `${this.position}px`
    }
    await this.activate(this.actions)
  },
})
</script>

<template>
  <div class="z-50">
    <div class="w-[48px] h-[48px]">
      <div ref="soilderSpriteImage" class="h-full w-full relative">
        <img
          src="./../assets/sprites/flash.png"
          class="absolute right-0 z-50"
          :class="[shooting ? 'blink' : 'hidden', action == 'crouch' ? 'bottom-5' : 'bottom-6']"
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
