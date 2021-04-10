import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  connectionDemo(): { name: string; birth: Date }[] {
    return [
      {
        name: 'John',
        birth: new Date('2000-04-10T07:54:43.547Z'),
      },
      {
        name: 'Smith',
        birth: new Date('2000-04-01T07:54:43.547Z'),
      },
    ];
  }
}
