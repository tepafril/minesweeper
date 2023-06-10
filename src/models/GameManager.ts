export enum StateEnum {
  Loading = "loading",
  Ready = "ready",
  Story = "story",
  InGame = "ingame",
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
        console.log("state", this.state);
        break;
      case "mute":
        this.mute = value;
        break;
    }
  }
  public init(params: { audio: HTMLAudioElement }) {
    this.assets.audio = params.audio;
  }
}
