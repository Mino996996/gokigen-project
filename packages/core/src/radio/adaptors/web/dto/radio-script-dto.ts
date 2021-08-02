import { RadioContent } from '../../../applications/radio.service';

export class RadioScriptDto {
  readonly date: Date;

  constructor(
    readonly sample: RadioContent[],
    dateStr: string,
    readonly groupId: number,
  ) {
    this.validateDate(dateStr);
    this.date = new Date(dateStr);
  }

  private validateDate(_date: string): void {
    // todo: validate date string
  }
}
