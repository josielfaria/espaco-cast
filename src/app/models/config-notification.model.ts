export class ConfigNotificationModel {
  // TYPES: secondary  success  danger  warning  info  light  dark  message: string;
  type: string; 
  message: string;
  show?: boolean;

  constructor(type: string, message: string, show: boolean) {
    this.type = type;
    this.message = message;
    this.show = show;
  }
}
