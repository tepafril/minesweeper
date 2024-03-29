export class Board {
  public tiles: Tile[][];
  public minePositions: Array<{ x: number; y: number }> = [];
  private _numberOfRandomizeMines: number;
  public onWin: () => {};

  unveilCount: number = 0;

  public constructor(
    public readonly numberOfRow: number,
    public readonly numberOfColumn: number,
    public readonly numberOfMine: number
  ) {
    this._numberOfRandomizeMines = numberOfMine;
  }

  public init() {
    this.tiles = [];
    for (let i = 0; i < this.numberOfColumn; i++) {
      this.tiles[i] = [];
      for (let j = 0; j < this.numberOfRow; j++) {
        const isTopEdge = i == 0 ? true : false;
        const isBottomEdge = i == this.numberOfRow - 1 ? true : false;
        const isLeftEdge = j == 0 ? true : false;
        const isRightEdge = j == this.numberOfColumn - 1 ? true : false;

        const tile: Tile = new Tile(
          false,
          isTopEdge,
          isBottomEdge,
          isLeftEdge,
          isRightEdge,
          j,
          i,
          this,
          false
        );

        this.tiles[i][j] = tile;
      }
    }

    this.randomizeMines();
  }

  public randomizeMines() {
    this._numberOfRandomizeMines--;
    const x = Math.floor(Math.random() * this.numberOfColumn);
    const y = Math.floor(Math.random() * this.numberOfRow);
    if (
      !this.minePositions.find(
        (position: any) => position.x == x && position.y == y
      )
    ) {
      this.minePositions.push({ x: x, y: y });
      this.tiles[x][y].setMine();
    }
    if (this._numberOfRandomizeMines > 0) {
      this.randomizeMines();
    }
  }

  public async checkIfAllMinesCleared() {
    this.unveilCount++;
    if (
      this.numberOfColumn * this.numberOfRow - this.numberOfMine ==
      this.unveilCount
    ) {
      await this.onWin();
    }
  }
}

export class Tile {
  public isUnveiled: boolean;
  public nearByMines: number = 0;

  public constructor(
    public isMine: boolean,
    public readonly isTopEdge: boolean,
    public readonly isBottomEdge: boolean,
    public readonly isLeftEdge: boolean,
    public readonly isRightEdge: boolean,
    public readonly rowIndex: number,
    public readonly colIndex: number,
    public readonly _board: Board,
    public isFlag: boolean
  ) {
    this.isUnveiled = false;
  }

  public setMine() {
    this.isMine = true;

    if (!this.isTopEdge) {
      this._board.tiles[this.colIndex - 1][this.rowIndex].nearByMines += 1;
    }
    if (!this.isTopEdge && !this.isLeftEdge) {
      this._board.tiles[this.colIndex - 1][this.rowIndex - 1].nearByMines += 1;
    }
    if (!this.isTopEdge && !this.isRightEdge) {
      this._board.tiles[this.colIndex - 1][this.rowIndex + 1].nearByMines += 1;
    }

    if (!this.isBottomEdge) {
      this._board.tiles[this.colIndex + 1][this.rowIndex].nearByMines++;
    }
    if (!this.isBottomEdge && !this.isLeftEdge) {
      this._board.tiles[this.colIndex + 1][this.rowIndex - 1].nearByMines += 1;
    }
    if (!this.isBottomEdge && !this.isRightEdge) {
      this._board.tiles[this.colIndex + 1][this.rowIndex + 1].nearByMines += 1;
    }

    if (!this.isLeftEdge) {
      this._board.tiles[this.colIndex][this.rowIndex - 1].nearByMines++;
    }
    if (!this.isRightEdge) {
      this._board.tiles[this.colIndex][this.rowIndex + 1].nearByMines++;
    }
  }

  public unveil() {
    if (this.isFlag) return false;
    if (this.isMine) {
      this.isUnveiled = true;
      return true;
    } else {
      this.recursivelyUnveil(this.rowIndex, this.colIndex);
      return false;
    }
  }

  public toggleFlag() {
    this.isFlag = !this.isFlag;
  }

  public unveilOnlyMe() {
    this.isUnveiled = true;
    this.recursivelyUnveil(this.rowIndex, this.colIndex);
  }

  public recursivelyUnveil(rowIndex: number, colIndex: number) {
    if (this.isUnveiled || this.isMine) return;
    this.isUnveiled = true;
    if (this.nearByMines === 0) {
      if (!this.isTopEdge) {
        this._board.tiles[colIndex - 1][rowIndex].unveil();
      }
      if (!this.isBottomEdge) {
        this._board.tiles[colIndex + 1][rowIndex].unveil();
      }
      if (!this.isRightEdge) {
        this._board.tiles[colIndex][rowIndex + 1].unveil();
      }
      if (!this.isLeftEdge) {
        this._board.tiles[colIndex][rowIndex - 1].unveil();
      }
    }
    this._board.checkIfAllMinesCleared();
  }
}
