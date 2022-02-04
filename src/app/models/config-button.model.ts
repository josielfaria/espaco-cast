export class ConfigButton {
  text: string;
  color: string;
  type: string;
  loading: boolean;

  constructor(text: string, color: string, type: string, loading: boolean) {
    this.text = text;
    this.color = color;
    this.type = type;
    this.loading = loading;
  }
}
