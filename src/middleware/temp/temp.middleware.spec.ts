import { TempMiddleware } from './temp.middleware';

describe('TempMiddleware', () => {
  it('should be defined', () => {
    expect(new TempMiddleware()).toBeDefined();
  });
});
