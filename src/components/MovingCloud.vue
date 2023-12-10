<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<template>
  <img
    id="slow-cloud-1"
    class="pointer-events-none w-full opacity-70 absolute top-0"
    src="./../assets/slow-cloud.png"
  />
  <img
    id="slow-cloud-2"
    class="pointer-events-none w-full opacity-70 absolute top-0"
    src="./../assets/slow-cloud.png"
  />
  <img
    id="slow-cloud-3"
    class="pointer-events-none w-full opacity-70 absolute top-0"
    src="./../assets/slow-cloud.png"
  />

  <img
    id="normal-cloud-1"
    class="pointer-events-none w-full absolute top-0"
    src="./../assets/normal-cloud.png"
  />
  <img
    id="normal-cloud-2"
    class="pointer-events-none w-full absolute top-0"
    src="./../assets/normal-cloud.png"
  />
  <img
    id="normal-cloud-3"
    class="pointer-events-none w-full absolute top-0"
    src="./../assets/normal-cloud.png"
  />

  <img
    id="fast-cloud-1"
    class="pointer-events-none w-full absolute top-0"
    src="./../assets/fast-cloud.png"
  />
  <img
    id="fast-cloud-2"
    class="pointer-events-none w-full absolute top-0"
    src="./../assets/fast-cloud.png"
  />
  <img
    id="fast-cloud-3"
    class="pointer-events-none w-full absolute top-0"
    src="./../assets/fast-cloud.png"
  />
</template>

<style scoped>
#slow-cloud-1 {
  animation: 180s linear forwards moveLeftToRight_skipHalf;
}
#slow-cloud-2 {
  visibility: hidden;
  animation: 360s linear infinite moveLeftToRight;
}
#slow-cloud-3 {
  visibility: hidden;
  animation: 360s 180s linear infinite moveLeftToRight;
}

#normal-cloud-1 {
  animation: 120s linear forwards moveLeftToRight_skipHalf;
}
#normal-cloud-2 {
  visibility: hidden;
  animation: 240s linear infinite moveLeftToRight;
}
#normal-cloud-3 {
  visibility: hidden;
  animation: 240s 120s linear infinite moveLeftToRight;
}

#fast-cloud-1 {
  animation: 60s linear forwards moveLeftToRight_skipHalf;
}
#fast-cloud-2 {
  visibility: hidden;
  animation: 120s linear infinite moveLeftToRight;
}
#fast-cloud-3 {
  visibility: hidden;
  animation: 120s 60s linear infinite moveLeftToRight;
}

@keyframes moveLeftToRight_skipHalf {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(100vw));
  }
}

@keyframes moveLeftToRight {
  from {
    visibility: hidden;
    transform: translateX(-100%);
  }
  to {
    visibility: visible;
    transform: translateX(calc(100vw));
  }
}
</style>
