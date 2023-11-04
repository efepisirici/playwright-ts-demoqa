export class UserData {
  private userNameValue: string;
  private passwordValue: string;

  constructor() {
    this.userNameValue = '';
    this.passwordValue = "randomPass123!";
  }

  private generateRandomString(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  public get userName(): string {
    if (!this.userNameValue) {
      this.userNameValue = this.generateRandomString(8);
    }
    return this.userNameValue;
  }

  public set userName(value: string) {
    this.userNameValue = value;
  }

  public get password(): string {
    return this.passwordValue;
  }

  public set password(value: string) {
    this.passwordValue = value;
  }
}
