import { App } from './app';

describe('App', () => {
  it('create an App class', () => {
    expect(() => new App()).toBeDefined();
  });

  test('私の気分を記録して欲しい', () => {
    // test here
    const app = new App();
    app.recordMood('good');
    expect(app.todaysMood()).toBe(3);
  });

  it('is added other word or number', () =>{
    const app = new App();
    expect(app.recordMood('happy!')).toBe('error!');
  });

  it('calculates average in a days ', () => {
    const feelings = [3, 1, 2, 3, 3];
    const app = new App();
    app.calculateAve(feelings);
    expect(app.calculateAve(feelings)).toBe(2.4);
  });
});
