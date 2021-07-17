import { MockRepository } from './mock-repository';
import  { sampleContent } from '../../fixtures/sample-content-data';
import  { sampleGroup } from '../../fixtures/sample-group-data';
import  { sampleUser } from '../../fixtures/sample-user-data';

describe('MockRepository', () => {
  const repository = MockRepository;

  it('should be defined', () => {
    expect(new MockRepository()).toBeDefined();
  });

  it("いい感じにfixturesからcontentデータを取得してくる", () => {
    expect(repository.content()).toBe(sampleContent);
  });

  it("いい感じにfixturesからgroupデータを取得してくる", () => {
    expect(repository.group()).toBe(sampleGroup);
  });

  it("いい感じにfixturesからuserデータを取得してくる", () => {
    expect(repository.User()).toBe(sampleUser);
  });
});
