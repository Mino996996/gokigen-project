import { App } from "./app";

class AppImpl extends App {
}

describe("App", () => {
  it("should works without error", () => {
    expect(() => new App()).not.toThrowError();
  })

  test('私の気分を記録して欲しい', () => {
    // test here
    const app = new App()
    app.recordMood("good")
    expect(app.todaysMood()).toBe("good")
  })

  it('store some data when click buttons', () => {
    // test here
  })
})
