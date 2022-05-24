/* eslint-env detox/detox */

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have home screen screen', async () => {
    await expect(element(by.id('hello'))).toBeVisible();
  });

  it('should send logs after tap', async () => {
    await expect(element(by.id('sendLogs'))).toBeVisible();
    await element(by.text('Hello!!!')).tap();
  });
});
