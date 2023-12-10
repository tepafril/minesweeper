<script lang="ts">
import { defineComponent } from "vue";
import { Board } from "../../models/MineSweeper";
import Tile from "./Tile.vue";
import { GameManager, StateEnum } from "../../models/GameManager";
import { sleep } from "../../models/Functions";

export default defineComponent({
  components: {
    Tile,
  },
  data() {
    return {
      board: {} as Board,
      gameManager: {} as GameManager,
    };
  },
  computed: {
    clickLock() {
      return (
        this.gameManager.state == StateEnum.GameOverExploded ||
        this.gameManager.state == StateEnum.GameOverUnveilAll ||
        this.gameManager.state == StateEnum.GameOverRetry ||
        this.gameManager.state == StateEnum.GameOverWinning
      );
    },
  },
  methods: {
    //
    async setGameover() {
      this.gameManager.state = StateEnum.GameOverExploded;
      await sleep(1000);
      this.gameManager.state = StateEnum.GameOverRetry;
    },
  },
  async mounted() {
    this.gameManager = GameManager.Instance();
    this.board.onWin = async () => {
      await sleep(1000);
      this.gameManager.state = StateEnum.GameOverWinning;
    };
  },
  async created() {
    this.board = new Board(18, 18, 42);
    this.board.init();
  },
});
</script>

<template>
  <div class="w-full h-[700px] absolute top-[0px] bg-white/50">
    <div class="flex items-center justify-center h-full">
      <div class="border-[#4f6101] border-4">
        <template v-for="col in board.tiles" :key="col.colIndex">
          <div class="p-0 m-0 flex">
            <template v-for="tile in col" :key="tile.rowIndex">
              <Tile
                :modelValue="board.tiles[tile.colIndex][tile.rowIndex]"
                :clickLock="clickLock"
                @gameover="setGameover"
              />
            </template>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
