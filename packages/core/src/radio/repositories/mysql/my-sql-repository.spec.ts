import { MySqlRepository } from './my-sql-repository';

describe('MySqlRepository', () => {
  it('should be defined', () => {
    expect(new MySqlRepository()).toBeDefined();
  });
});
