import { RadioContent } from './radio.service';

export class CreateContentListDto {
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