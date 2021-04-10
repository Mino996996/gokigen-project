import { User } from './type-mosels';

export class App {
  user: User = {
    feelingList: [],
  };

  recordMood(feel: string): void | string {
    switch (feel) {
      case 'good':
        this.user.feelingList.push(3);
        break;
      case 'soso':
        this.user.feelingList.push(2);
        break;
      case 'bad':
        this.user.feelingList.push(1);
        break;
      default:
        return 'error!';
        break;
    }
  }

  todaysMood(): number {
    return this.user.feelingList.slice(-1)[0];
  }

  calculateAve(feelings: number[]): number {
    let sum = 0;
    feelings.forEach((value) => {
      sum += value;
    });
    return sum / feelings.length;
  }
}
