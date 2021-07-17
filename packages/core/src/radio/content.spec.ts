import { Content } from './content';

describe('Content', () => {
  it('should be defined', () => {
    expect(new Content(1, '','','',1, '')).toBeDefined();
  });

  it("いい感じにコンテンツオブジェクトを返す", () => {
    // const content = new Content(1, '餃子の話',
    //   'aka', '美味しい焼き方おしえて',5,
    //   'テンション高めに');
    // expect(content.getContentScript()).toEqual(content);
  });
});
