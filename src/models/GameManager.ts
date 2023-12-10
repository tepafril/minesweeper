export enum StateEnum {
  Loading = "loading",
  Ready = "ready",
  Story = "story",
  Menu = "Menu",
  InGame = "ingame",
  Credits = "credits",
  GameOverExploded = "gameover1",
  GameOverUnveilAll = "gameover2",
  GameOverRetry = "gameover3",
  GameOverWinning = "gameover4",
}

export class GameManager {
  private static _instance: GameManager;

  private constructor() {}

  public static Instance(): GameManager {
    if (!GameManager._instance) {
      GameManager._instance = new GameManager();
    }
    return GameManager._instance;
  }

  public assets: any = {
    audio: HTMLAudioElement,
    bgAudio: HTMLAudioElement,
  };

  public state: StateEnum = StateEnum.Loading;
  private mute: boolean = false;

  public get(prop: "state" | "mute"): any {
    return this[prop];
  }
  public set(prop: "state" | "mute", value: any): void {
    switch (prop) {
      case "state":
        this.state = value;
        break;
      case "mute":
        this.mute = value;
        if (this.mute) {
          this.assets.audio.volume = 0;
        } else {
          this.assets.audio.volume = 1;
        }
        break;
    }
  }
  public init(params: { audio: HTMLAudioElement; bgAudio: HTMLAudioElement }) {
    this.assets.audio = params.audio;
    this.assets.bgAudio = params.bgAudio;
  }
}
