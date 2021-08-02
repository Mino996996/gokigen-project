import { Test, TestingModule } from '@nestjs/testing';
import { RadioController } from './radio.controller';
import { RadioService } from '../../applications/radio.service';

describe('RadioController', () => {
  let radioController: RadioController;

  // サービスをDIした場合はここでprovidersの定義をすること
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RadioController],
      providers: [RadioService], //追加
    }).compile();

    radioController = module.get<RadioController>(RadioController);
  });

  // 本番用
  it("いい感じにラジオ台本のリストを返す", () => {
    expect(radioController.allScripts()).toEqual(['under construction']);
  });
});
