import { Test, TestingModule } from '@nestjs/testing';
import { RadioController } from './radio.controller';
import { RadioService } from './radio.service';

describe('RadioController', () => {
  let radioController: RadioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RadioController],
      providers: [RadioService],
    }).compile();

    radioController = module.get<RadioController>(RadioController);
  });

  it('should be defined', () => {
    expect(radioController).toBeDefined();
  });

  it("リスト形式でデモデータを返す", () => {
    const demoOKData=[{message: 'this is demo'},
      {message: 'radioController is done. GJ!'}];
    const demoNGData=[{message: 'this is NGdemo'},
      {message: 'but this test is done. GJ!'}];
    expect(radioController.demo()).toEqual(demoOKData);
  });
});
