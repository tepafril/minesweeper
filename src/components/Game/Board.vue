<script lang="ts">
import { defineComponent } from "vue";
import { Board } from "../../models/MineSweeper";
import Tile from "./Tile.vue";

export default defineComponent({
  components: {
    Tile,
  },
  props: {
    //
  },
  data() {
    return {
      board: {} as Board,
    };
  },
  computed: {
    //
  },
  methods: {
    //
  },
  async created() {
    this.board = new Board(16, 16, 50);
    this.board.init();
    console.log(this.board);
  },
});
</script>

<template>
  <div class="w-full h-[700px]">
    <div class="flex items-center justify-center h-full">
      <div>
        <template v-for="(col, i) in board.tiles" :key="i">
          <div class="p-0 m-0 flex">
            <template v-for="(row, j) in col" :key="j">
              <Tile :modelValue="board.tiles[i][j]" />
            </template>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
