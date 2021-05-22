import { Test, TestingModule } from "@nestjs/testing";
import { RadioService } from "./radio.service";

describe('RadioService', () => {
  let service: RadioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RadioService],
    }).compile();

    service = module.get<RadioService>(RadioService);
  });

  test('経過時間を計算する', () =>{
    service.startRadio()
    expect(service.elapsedTimeInSec()).toEqual(expect.any(Number))
  });
});
